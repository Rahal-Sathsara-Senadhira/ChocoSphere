import React from 'react'
import './HomeAbout.css'
import { DefaultAssets } from '../../assets/assets'

const HomeAbout = () => {
  return (
    <section className="about">
        <div className="row">
            <div className="image">
                <img src={DefaultAssets.About} alt=""/>
            </div>
            <div className="content">
                <div className="home-title">
                    <span>About Our Company</span>
                    <h3>Our Journey of Sweet Indulgence</h3>
                </div>
                <p>At ChocoSphere, we’re passionate about delivering moments of joy with every bite. Our mission is to
                    craft irresistible chocolates that inspire happiness and bring people closer together.</p>
                <span className="signature">Rahal Sathsara</span><br/>
                <span className="founder">founder of company</span>
            </div>
        </div>

    </section>
  )
}

export default HomeAbout