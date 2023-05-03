import Header from './components/Header/Header';
import './App.css';
import Hero from './components/hero/hero';
import Companies from './components/companies/companies';
import Slider from './components/slider/Slider';
import Value from './components/Value/Value';
import Contact from './components/contact/contact';
function App() {
  return (
   <div className='App'>
   <div>
    <div className='white-gradient'/>
   <Header/>
   <Hero/>
   </div>
   <Companies/>
   <Slider/>
   <Value/>
   <Contact/>
   </div>
  );
}

export default App;
