import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React from 'react';
import { HeroSection } from './HeroSection';
import newsand from './new_sand.png'
import girl from './girl1.png';
import CloudFlexbox from './CloudFlexbox';
import cloud from './cloud.png';

function App() {

  const internships = [
    {
      title: "Goldman Sachs",
      body: "Developed a web application to decommission a legacy trading system in the Asset Management team. Developed REST APIs for retrieving shares, facilitating transactions, and ensuring timely deployment through streamlined teamwork and coordination.",
      techstack: "Languages/Tools: Java, Spring Boot, Maven, Angular, SQL, Git."
    },
    {
      title: "Zipcar",
      body: "Collaborated with Zipcar's billing team to develop features including new search options, on-time tolls and violations updates on invoices and, automating critical billing tasks impacting over 10,000 customers.",
      techstack: "Languages/Tools: Java, Kotlin, Ruby, SQL, Git, Adyen, Prometheus."
    }
  ];
  const projects1 = [
    {
      title: "What’s in your Fridge",
      body: "Developed a web application that recommends personalized recipes based on ingredients in the fridge and user preferences, utilizing a content-based filtering recommendation engine"
    },
    {
      title: "Furball Favs",
      body: "Developed an Android e-commerce app that enables pet owners to easily find and buy high-quality pet products with a seamless checkout process using Firebase authentication and storage"
    },
    {
      title: "Cravewheels ChatBot",
      body: "Developed a multi-user chatbot using Open AI APIs to deliver seamless real-time interactions along with neural network-powered text-to-speech synthesis"
    },{
      title: "Language Classifier",
      body: "Implemented a text classifier with an accuracy rate of 96% for determining the language of a text as either English or Dutch"
    }
  ];
  
  // const alignCenter = { display: 'flex', alignItems: 'center' }

  return (
    <div className="flex-container">
      <Parallax pages={2.6}>
        {/* setting background color */}
        <div className="flex-item1">
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={2.6}
            style={{ background: 'linear-gradient(to bottom, #7bb2ff, #e0ffff)'}}
          ></ParallaxLayer>
        </div>

        {/* Clouds */}
        <ParallaxLayer offset={0} speed={0.8} style={{ opacity: 0.2 }}>
          <img src={cloud}  style={{ display: 'block', width: '16%', marginLeft: '15%' }} />
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '55%' }} />
          <a href="https://www.freepik.com/free-vector/cloud-sticker-clipart-vector-set-flat-design_18705168.htm
          #query=cloud&from_query=clo&position=0&from_view=search&track=sph"></a>
        </ParallaxLayer>

        <ParallaxLayer offset={0.1} speed={0.8} style={{ opacity: 0.5 }}>
          <img src={cloud} style={{ display: 'block', width: '13%', marginLeft: '78%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.6} speed={0.4} style={{ opacity: 0.4 }}>
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '25% '}} />
          <img src={cloud} style={{ display: 'block', width: '25%', marginLeft: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.75} speed={0.5} style={{ opacity: 0.5 }}>
          <img src={cloud} style={{ display: 'block', width: '8%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.6} style={{ opacity: 0.5 }}>
          <img src={cloud} style={{ display: 'block', width: '16%', marginLeft: '14%' }} />
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.3} speed={0.7} style={{ opacity: 0.2 }}>
          <img src={cloud} style={{ display: 'block', width: '22%', marginLeft: '30%' }} />
          <img src={cloud} style={{ display: 'block', width: '17%', marginLeft: '58%' }} />
        </ParallaxLayer>
        
        <ParallaxLayer offset={1.6} speed={0.7} style={{ opacity: 0.6 }}>
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '75%' }} />
          <img src={cloud} style={{ display: 'block', width: '15%', marginLeft: '9%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.9} speed={0.7} style={{ opacity: 0.3 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '20%' }} />
          <img src={cloud} style={{ display: 'block', width: '15%', marginLeft: '85%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.0} speed={0.7} style={{ opacity: 0.6 }}>
          <img src={cloud} style={{ display: 'block', width: '15%', marginLeft: '62%' }} />
          <img src={cloud} style={{ display: 'block', width: '15%', marginLeft: '22%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.3} speed={0.6} style={{ opacity: 0.6 }}>
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '36%' }} />
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '95%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.4} speed={0.4} style={{ opacity: 0.8 }}>
          <img src={cloud} style={{ display: 'block', width: '5%', marginLeft: '1%' }} />
          <img src={cloud} style={{ display: 'block', width: '23%', marginLeft: '55%' }} />
        </ParallaxLayer>

         {/* parachute girl */}
         <ParallaxLayer offset={0.5} speed={-1}>
            <div className= "card" >
              <img src={girl} style={{marginLeft:'5%', maxWidth: '100%', height: 'auto' }} />
              <a href="https://www.freepik.com/free-vector/skydiving-amd-extreme-sports-set_6438401.htm#
              query=skydiving-amd-extreme-sports-set&position=0&from_view=search&track=sph"></a>
            </div>
        </ParallaxLayer>   

        {/* Hero Section component */}
        <ParallaxLayer
          offset={0.35}
          speed={0.1}
          >
          <div style={{ display: 'inline-block', marginLeft:'35%'}}>
           <HeroSection/>
          </div>
        </ParallaxLayer>

        {/* Experience Component */}
        <ParallaxLayer
          offset={1}
          speed={0.1}
          >
          <div className="top-layer" style={{ display: 'inline-block', marginLeft:'35%'}}>
            <CloudFlexbox items = {internships} heading = "Experience"/>
          </div>
        </ParallaxLayer>

        {/* Projects Component */}
        <ParallaxLayer
          offset={1.8}
          speed={0.1}
          >
          <div className="top-layer" style={{ display: 'inline-block', marginLeft:'35%'} }>
            <CloudFlexbox items = {projects1} heading = "Projects"/>
          </div>
        </ParallaxLayer>
    
        {/* Sand  */}
        <ParallaxLayer offset={2.2} speed={0.5} >
        <img src={newsand} style={{ display: 'block', width: '100%', height: '30%' }}/>
        <a href="https://www.freepik.com/free-vector/flat-background-summertime_39427365.htm"></a>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;