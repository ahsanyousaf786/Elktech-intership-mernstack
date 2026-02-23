import React from 'react'
import webdev from '../assets/web-dev.jpg'
import uiux from '../assets/uiux.jpg'
import ecommerce from '../assets/e-commerce.jpg'
import digital from '../assets/digital.png' 

function Services() {
    return (
        <div id="services" className='services'>
            <h2>My Services</h2>
            <div className="services-container">

                <div id="webDevelopment" className="service-card">
                    <div className="img"> <img src={webdev} alt="Web Development" /> </div>
                    <p>Web Development</p>
                    <p className='read-more'><a href="">Read More</a></p>
                </div>

                <div id="UI/UX" className="service-card">
                    <div className="img">  <img src={uiux} alt="UI/UX Designer" />  </div>
                    <p>UI/UX Designer</p>
                    <p className='read-more'><a href="">Read More</a></p>
                </div>

                <div id="e-commerce" className="service-card">
                    <div className="img"> <img src={ecommerce} alt="E-Commerce Solutions" />  </div>
                    <p>E-Commerce Solutions</p>
                    <p className='read-more'><a href="">Read More</a></p>
                </div>

                <div id="digitalMarketing" className="service-card">
                    <div className="img">  <img src={digital} alt="Digital Marketing" />  </div>
                    <p>Digital Marketing</p>
                    <p className='read-more'><a href="">Read More</a></p>
                </div>

            </div>
        </div>
    )
}

export default Services