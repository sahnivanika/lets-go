import React from "react";
import PageHeaderContent from '../../components/pageHeaderContent';
import {BsInfoCircleFill} from 'react-icons/bs'
import { Animate } from "react-simple-animate";
import './styles.scss'
const Contact =()=>{
return(
    <section id ="contact" className="contact">
    <PageHeaderContent
    headerText ="Contact Details"
    icon={<BsInfoCircleFill size ={40}/>}
    />
    <div className="contact_content">
        <Animate
        play
        duration={1}
        delay={0}
        start={{
         transform:"translateX(-200px)"   
        }}
        end={{
            transform:"translateX(0px)"
        }}
        >
            <h3 className="contact_content_header-text">Let's Talk</h3>
        </Animate>
        <Animate
        play
        duration={1}
        delay={0}
        start={{
         transform:"translateX(200px)"   
        }}
        end={{
            transform:"translateX(0px)"
        }}
        >
            <div className="contact_content_form">
                <div className="contact_content_form_controlswrapper">
                  <div className="nameWrapper">
                    <input name="name" className="inputName" type={'text'}/>
                    <label htmlFor="name" className="nameLabel">Name</label>
                  </div>
                  <div className="emailWrapper">
                  <input name="email" className="inputEmail" type={'text'}/>
                  <label htmlFor="email" className="emailLabel">Name</label>
                  </div>
                  <div className="descriptionWrapper">
                  <input name="description" className="inputdescription" type={'text'}/>
                  <label htmlFor="description" className="descriptionLabel">Name</label>
                  </div>  
                </div>
            </div>
        </Animate>
    </div>
    </section>
)
}
export default Contact;