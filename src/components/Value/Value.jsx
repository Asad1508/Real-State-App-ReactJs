import React, { useState } from "react";
import {
  Accordion,
  AccordionItemState,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";
import "./Value.css";
const Value = () => {
    const [className,setClassName]=useState(null)

  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        <div className="flexColStart v-right">
          <span style={{ color: "orange", fontWeight: "bolder",fontSize:'2rem' }}>
            Our value
          </span>
          <span
            style={{ color: "blue", fontWeight: "700", fontSize: "1.5rem" }}
          >
            Value we give to you
          </span>
          <span style={{ color: "gray" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {
                data.map((item,i)=>{
                    return(
                        <AccordionItem className={`accordionItem ${className}`} uuid={i} key={i}>
                            <AccordionItemHeading>
                                <AccordionItemButton className="flexCenter accordionbutton">
                                    {/* jo open hoga ussi ka shadow ho */}
                                    <AccordionItemState>
                                        {({expanded})=>expanded?setClassName('expanded'):setClassName('collapsed')}
                                    </AccordionItemState>
                               <div className="flexCenter icon">{item.icon}</div>
                               <span className="primaryText">{item.heading}</span>
                               <div className="flexCenter icon">
                                <MdOutlineArrowDropDown size={20}/>
                               </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="secondaryText">{item.detail}</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                })
            }
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
