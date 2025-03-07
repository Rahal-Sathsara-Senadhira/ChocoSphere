import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import "./TestimonialSlider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// Import required modules
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { DefaultAssets } from "../../assets/assets";

const TestimonialSlider = () => {
  return (
    <div className="container">
      
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        centeredSlides={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="box">
            <div className="quotation">"</div>
            <img className="image" src={DefaultAssets.dp1} alt="" />
            <div className="message">
              Excellent Customer support! These guys reply within minutes sometimes and really help you when you need them. The theme itself is very extended as well. Happy with my purchase!
            </div>
            <div className="nameandposition">Rahal | CEO</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <div className="quotation">"</div>
            <img className="image" src={DefaultAssets.dp2} alt="" />

            <div className="message">
              Fantastic service and quick responses. The theme is highly customizable and perfect for our needs.
            </div>
            <div className="nameandposition">Jane Doe | Marketing Manager</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <div className="quotation">"</div>
            <img className="image" src={DefaultAssets.dp3} alt="" />

            <div className="message">
              Great experience with the support team. They are very knowledgeable and helpful.
            </div>
            <div className="nameandposition">John Smith | CEO</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <div className="quotation">"</div>
            <img className="image" src={DefaultAssets.dp2} alt="" />

            <div className="message">
              Love the theme! It's very user-friendly and the support team is always there to assist.
            </div>
            <div className="nameandposition">Emily Davis | Cake Designer</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
