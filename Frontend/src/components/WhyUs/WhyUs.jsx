import React from 'react'
import './WhyUs.css'
import { DefaultAssets } from '../../assets/assets'


const WhyUs = () => {
  return (
    <section className="whyus ">
        <div className="row">
            <div className="content">
                <div className="home-title">
                    <span>Why Our Company</span>
                    <h3>The Sweet Choice You Deserve</h3>
                </div>
                <div className="reason">
                    <img src={DefaultAssets.premium} alt=""/>
                    <div className="reason-content">
                        <h3>Unmatched Quality</h3>
                        <p>Crafted with the finest ingredients to deliver the ultimate chocolate experience</p>
                    </div>
                </div>
                <div className="reason">
                    <img src={DefaultAssets.chef} alt=""/>
                    <div className="reason-content">
                        <h3>Passion for Perfection</h3>
                        <p>Every bite is a testament to our dedication to flavor and satisfaction</p>
                    </div>
                </div>
                <div className="reason">
                    <img src={DefaultAssets.community} alt=""/>
                    <div className="reason-content">
                        <h3>Customer-Centric Approach</h3>
                        <p>Your happiness is our priority, with exceptional service and delightful treats tailored to
                            you</p>
                    </div>
                </div>

            </div>
            <div className="image Aos">
                {/* <div className="container">
                    <div id="circletext">Indulge in Sweet Perfection – Where Every Bite Delivers Bliss ~&nbsp;</div>
                </div> */}
                <div className="circle"></div>
                <img src={DefaultAssets.WhyUs} alt=""/>
            </div>

        </div>

    </section>
  )
}

export default WhyUs