import React, { useEffect, useRef } from "react";
import "./Header.css";
import Button_1 from "../button_1/Button_1";
import { DefaultAssets } from "../../assets/assets";

const Header = () => {
  const parallaxRef = useRef(null);
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const sideRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      const sFront = 800;
      const sBack = 3000;

      if (frontRef.current) {
        frontRef.current.style.transform = `translate(${x / sFront}%, ${
          y / sFront
        }%)`;
      }
      if (sideRef.current) {
        sideRef.current.style.transform = `translate(${-(x / sFront)}%, ${-(
          y / sFront
        )}%)`;
      }
      if (backRef.current) {
        backRef.current.style.transform = `translate(${x / sBack}%, ${
          y / sBack
        }%)`;
      }
    };

    const parallax = parallaxRef.current;
    if (parallax) {
      parallax.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (parallax) {
        parallax.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section className="home-first-view">
      {/* <div className="container" >
      <div id="text" className="circleText">
        Indulge in Sweet Perfection – Where Every Bite Delivers Bliss ~&nbsp;
      </div>
    </div> */}
      <div className="parallax" ref={parallaxRef}>
        <div className="heading-container">
          <h1>
            Exclusive
            <br />
            Chocolates &<br />
            Sweeties
          </h1>
          <Button_1>Learn More</Button_1>
        </div>
        <div className="front-layer">
          <img ref={frontRef} src={DefaultAssets.Home2} alt="Front Layer" />
        </div>
        <div className="back-layer">
          <img ref={backRef} src={DefaultAssets.Home1} alt="Back Layer" />
        </div>
        <div className="side-layer">
          <img ref={sideRef} src={DefaultAssets.Home3} alt="Side Layer" />
        </div>
      </div>
    </section>
  );
};

export default Header;
