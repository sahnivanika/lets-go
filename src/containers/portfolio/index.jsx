import React from "react";
import PageHeaderContent from '../../components/pageHeaderContent';
import {BsInfoCircleFill} from 'react-icons/bs'
const Portfolio =()=>{
return (
    <section id ="portfolio" className="portfoflio">
    <PageHeaderContent
    headerText ="My Portfolio"
    icon={<BsInfoCircleFill size ={40}/>}
    />
    </section>
)
};
export default Portfolio;