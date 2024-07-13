import React from 'react';
import './styles.scss';
const Home = () => {
  return (
  <section id ="home" className='home'>
    <div className=" home_text-wrapper">
    <h1>
      Hello,I'm Vanika
      <br/>
      Front end developer
    </h1>
    </div>
    <div className="home_contact-me">
      <button>Let's talk</button>
    </div>
  </section>
  )
};

export default Home;

