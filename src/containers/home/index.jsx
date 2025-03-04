import React from 'react';
import {useNavigate} from 'react-router-dom';
import './styles.scss';
import {Animate} from 'react-simple-animate'
const Home = () => {

  const navigate =useNavigate();
  const handleNavigateToContactMePage=()=>{
    navigate("/contact");
  }
  return (
  <section id ="home" className='home'>
    <div className=" home_text-wrapper">
    <h1>
      Hello,I'm Vanika
      <br/>
      Front end developer
    </h1>
    </div>
    <Animate
    play={1.5}
    delay={1}
    start={{
      transform: 'translateY(550px)'
    }}
    end={{
      transform:'translatex(0px)'
    }}>
    <div className="home_contact-me">
    <button onClick={handleNavigateToContactMePage}>Let's talk</button>
    </div>
    </Animate>
    
  </section>
  )
};

export default Home;

