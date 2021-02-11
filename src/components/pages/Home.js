import React,{Component} from 'react';
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';

//re-usable components
import Services from '../common/Services';
import Portfolio from '../pages/Portfolio';
import About from '../pages/About';
import Team from '../pages/Team';
import Clients from '../pages/Clients';
import Timeline from '../common/Timeline';
import Contacts from '../pages/Contacts';
class Home extends Component{

render(){
    return(
            <div>
            <Header
                title="Welcome to Our Studio!"
                subtitle="IT'S NICE TO MEET YOU"
                buttonText="Tell me more"
                link="/services"
                showButton={true}
                image={image}
            />
            <Services />
            <Portfolio />
            <Timeline />
            <Team/>
            <Clients/>
            <Contacts/>
        </div>
    );
}

}export default Home;
