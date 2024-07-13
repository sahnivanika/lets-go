import React from 'react';
import './styles.scss';
import PageHeaderContent from '../../components/pageHeaderContent';
import {BsInfoCircleFill} from 'react-icons/bs'
import {Animate} from "react-simple-animate"
import './styles.scss';
import {FaDev,FaBookReader} from 'react-icons/fa'
import {DiBootstrap,DiJavascript} from 'react-icons/di'
const jobSummary ="Hello!My name is Vanika Sahni and I am an undergraduate student at Thapar Institute of Engineering and Technology,Patiala,Punjab.I am pursuing my B.Tech in Electronics and Communication Engineering.I am a very hardworking individual who loves to complete her work on time.My passion for punctuality and dedication speak for itself with a record 100% attendance in school for 5 consecutive years.Besides being a tech-enthusiast and striving to horn my coding skills, my love for public speaking and debating knows no bounds. Having addressed crowds as large as 3000 people during the annual college fests, mic has always been my best buddy. I have also participated and organized multiple Model United Nations Conferences and won several Special Mentions and Best Delegate awards.I have also acquired the skill of  Search Engine Optimization(SEO) for the websites while working with a start-up.Content writing is my another area of expertise as I a work as the Head of Content at Microsoft Learn Student Chapter,TIET.Socializng and talking with different types of people is my favourite pass time.Would be glad to work with new people and learn from them.See you on the other side!"
const About = () => {
  return (
  <section id ="about" className="about">
  <PageHeaderContent
  headerText ="About Me"
  icon={<BsInfoCircleFill size ={40}/>}
  />
  <div className="about_content">
  <div className="about_content_personalWrapper">
  <Animate
    play={1.5}
    delay={1}
    start={{
      transform: 'translateY(-900px)'
    }}
    end={{
      transform:'translatex(0px)'
    }}>
    <h3>Front End Developer</h3>
    <p>{jobSummary}</p>
    </Animate>
  </div>
    <div className="about_content_personalWrapper">
    <div className="about_content_personalWrappe_innerContent">
    <div>
        <FaDev size={60} color ="var(--yellow-theme-main-color)"/>
      </div>
      <div>
      <FaBookReader size={60} color ="var(--yellow-theme-main-color)"/>
      </div>
      <div>
      < DiJavascript size={60} color ="var(--yellow-theme-main-color)"/>
      </div>
      <div>
      <DiBootstrap size={60} color ="var(--yellow-theme-main-color)"/>
      </div>
    </div>
     
    </div>
  </div>
  </section>
  );
};

export default About;

