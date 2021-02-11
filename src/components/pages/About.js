import React,{Component}from 'react';
import Header from '../common/Header';
import image from '../assets/img/about.jpg';
import Timeline from '../common/Timeline';
class About extends Component{
render(){
    return(
<div>

{/*Header */}
            <Header
                title="Welcome to Our Studio!"
                subtitle="IT'S NICE TO MEET YOU"
                buttonText="Tell me more"
                link="/services"
                showButton={false}
                image={image}
                />



{/*About Page*/}
               <Timeline />


</div>
    );
}
}export default About;
