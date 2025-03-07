import React, { useEffect } from "react";
import "./AboutUs.css";
import "react-router-dom";
import { DefaultAssets } from "../../assets/assets";
import TestimonialSlider from "../../components/TestimonialSlider/TestimonialSlider";
import Aos from "aos"
import 'aos/dist/aos.css'


const AboutUs = () => {
  
  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <div>
      <div className="spacer"></div>
      <div className="about_us">
        <div className="aboutus_dark"></div>
        <div className="aboutus_head">
          <img src={DefaultAssets.aboutushead} alt="" />
          <p>About Us</p>
        </div>

        <div className="our_story">
          <div className="row">
            <div className="content">
              <div className="home-title">
                <h3>Our Story</h3>
              </div>
              <p>
                ChocoSphere began as a small dream—a passion for crafting the
                finest chocolates with love and precision. From our humble
                beginnings, where every chocolate was handmade in a tiny
                kitchen, we have grown into a beloved brand known for its rich
                flavors and premium ingredients. As word spread, we expanded,
                introducing new creations and opening our doors to more
                chocolate lovers. With the launch of our online store, we made
                indulgence just a click away. Today, ChocoSphere continues its
                journey, blending tradition with innovation to bring joy, one
                chocolate at a time. Join us and taste the magic!
              </p>
            </div>
            <div className="image">
              <div className="imgholder">
                <img src={DefaultAssets.aboutus_sideimage} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="story_line">
          <div className="timeline-container">
            <h2 className="timeline-title">Our History</h2>
            <p className="timeline-subtitle">
              Step out on to the path to your left. Where there is no change.
            </p>

            <div className="timeline">
              <div className="timeline-item left" >
                <div className="timeline-content" data-aos="fade-left">
                  <h3 className="timeline-heading">Beginning, 2014</h3>
                  <p>
                    So, there you have it; the six steps that will help you to
                    the fabled land of achievement and success! You now have the
                    opportunity to push ahead and reach your potential. No more
                    excuses – make the commitment to take action TODAY!
                  </p>
                </div>
                <div className="timeline-circle">1</div>
              </div>

              <div className="timeline-item right">
                <div className="timeline-circle">2</div>
                <div className="timeline-content" data-aos="fade-right">
                  <h3 className="timeline-heading">
                    Register For Classes, 2015
                  </h3>
                  <p>
                    Benjamin Franklin, inventor, statesman, writer, publisher,
                    and economist relates in his autobiography that early in his
                    life he decided to focus on arriving at moral perfection. He
                    made a list of 13 virtues, assigning a page to each.
                  </p>
                </div>
              </div>

              <div className="timeline-item left">
                <div className="timeline-content" data-aos="fade-left">
                  <h3 className="timeline-heading">Beginning, 2014</h3>
                  <p>
                    So, there you have it; the six steps that will help you to
                    the fabled land of achievement and success! You now have the
                    opportunity to push ahead and reach your potential. No more
                    excuses – make the commitment to take action TODAY!
                  </p>
                </div>
                <div className="timeline-circle">3</div>
              </div>

              <div className="timeline-item right">
                <div className="timeline-circle">4</div>
                <div className="timeline-content" data-aos="fade-right">
                  <h3 className="timeline-heading">
                    Register For Classes, 2015
                  </h3>
                  <p>
                    Benjamin Franklin, inventor, statesman, writer, publisher,
                    and economist relates in his autobiography that early in his
                    life he decided to focus on arriving at moral perfection. He
                    made a list of 13 virtues, assigning a page to each.
                  </p>
                </div>
              </div>

              <div className="timeline-item left">
                <div className="timeline-content" data-aos="fade-left">
                  <h3 className="timeline-heading">Beginning, 2014</h3>
                  <p>
                    So, there you have it; the six steps that will help you to
                    the fabled land of achievement and success! You now have the
                    opportunity to push ahead and reach your potential. No more
                    excuses – make the commitment to take action TODAY!
                  </p>
                </div>
                <div className="timeline-circle">5</div>
              </div>

              <div className="timeline-item right">
                <div className="timeline-circle">6</div>
                <div className="timeline-content" data-aos="fade-right">
                  <h3 className="timeline-heading">
                    Register For Classes, 2015
                  </h3>
                  <p>
                    Benjamin Franklin, inventor, statesman, writer, publisher,
                    and economist relates in his autobiography that early in his
                    life he decided to focus on arriving at moral perfection. He
                    made a list of 13 virtues, assigning a page to each.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="swiper_holder">
              <div className="review_head">Our Crew</div>
              <TestimonialSlider />
            </div>

      </div>
    </div>
  );
};

export default AboutUs;
