import React from 'react'
import './Footer.css'
import { DefaultAssets } from '../../assets/assets'

const Footer = () => {
  return (
    <section className="footer" id="footer">
        <div className="logo">
            <img className="footerlogo" src={DefaultAssets.FooterMainLogo} alt=""/>
        </div>

        <div className="box-container">

            <div className="box ">
                <div className="findings">
                    <img src={DefaultAssets.location} alt=""/>
                    <span>636/D, KURUDUWATHTHA, COLOMBO</span>
                </div>
                <div className="findings">
                    <img src={DefaultAssets.calling} alt=""/>
                    <span>+94 74 342 9610</span>
                </div>
                <div className="findings">
                    <img src={DefaultAssets.email} alt=""/>
                    <span>SMARSATHSARA@GMAIL.COM</span>
                </div>
            </div>

            <div className="box box1">
                <h3>Whisper to us about your feelings, and we will wrap it with love</h3>
                <div className="socialMediaIcons">
                    <a href="#"><img src={DefaultAssets.telegram} alt=""/></a>
                    <a href="#"><img src={DefaultAssets.facebook} alt=""/></a>
                    <a href="#"><img src={DefaultAssets.twitter} alt=""/></a>
                    <a href="#"><img src={DefaultAssets.instagram} alt=""/></a>
                </div>
            </div>

            <div className="box box1 openingHours">

                <label for=""><span>mon – fri: </span>9.00 am – 6.00pm</label>
                <label for=""><span>sat: </span>11.00 am – 6.00pm</label>
                <label for=""><span>sun: </span>11.00 am – 6.00pm</label>

            </div>

        </div>
        <div className="credit">
            <hr/>
            Copyright © 2024 ChocoSphere by <span>RS Creations</span> | All Rights Reserved
        </div>
    </section>
  )
}

export default Footer