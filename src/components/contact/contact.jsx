import React from 'react'
import './contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import { BsFillCameraVideoFill } from "react-icons/bs";
const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
           <div className="flexColStart c-left">
             <span className='orange'>Contact us</span>
             <span className='primary'>Easy to contact us</span>
             <span className='secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, aliquid.</span>
          <div className="flexColStart contactModes">
            <div className="flexStart row">
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                          <MdCall size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span className='secondary'>Call</span>
                            <span className='secondary'>+92123456</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Call now</div>
                </div>
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                          <BsFillChatDotsFill size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span className='secondary'>Chat</span>
                            <span className='secondary'>+92123456</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Chat now</div>
                </div>
            </div>
            <div className="flexStart row">
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                          <BsFillCameraVideoFill size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span className='secondary'>Call</span>
                            <span className='secondary'>+92123456</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Video call now</div>
                </div>
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                          <HiChatBubbleBottomCenter size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span className='secondary'>Chat</span>
                            <span className='secondary'>+92123456</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Chat now</div>
                </div>
            </div>
          </div>
           </div>
           <div className="c-right">
            <div className="image-container">
                <img src="./contact.jpg" alt="" />
            </div>
           </div>
        </div>
    </section>
  )
}

export default Contact