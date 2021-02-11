import React,{Component}from 'react';
import SingleClient from '../common/SingleClient';
import img1 from '../assets/img/logos/envato.jpg';
import img2 from '../assets/img/logos/designmodo.jpg';
import img3 from '../assets/img/logos/themeforest.jpg';
import img4 from '../assets/img/logos/creative-market.jpg';
const clients=[
    {image:img1},
    {image:img2},
    {image:img3},
    {image:img4}
];

class Clients extends Component{
render(){
    return(
        <div class="py-5">
            <div class="container">
                <div class="row">
                    {clients.map((item,index)=>{
                        return <SingleClient {...item} key={index} />
                    }

                    )
                    
                    
                    }
                 
                </div>
            </div>
        </div>


        );
}
}export default Clients;