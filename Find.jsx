import React from 'react';
import styles from "./Find.module.css"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Card from "./Card"
import pic1 from "../Images/car1.png"
import pic2 from "../Images/car2.png"
import pic3 from "../Images/car3.png"
import pic4 from "../Images/car4.png"
import pic5 from "../Images/car5.png"
import pic6 from "../Images/car10.png"
import pic7 from "../Images/car7.png"
import pic8 from "../Images/car8.png"
import pic9 from "../Images/car9.png"
import pic10 from "../Images/car11.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import "swiper/css/navigation"

const Find = () => {
    return (
        <div className={styles.find}>
            <div className={styles.heading}>
                <h1>Find Your <span>Drive</span></h1>
                <div className={styles.text_bg}>
                <h3> 
                    <span>
                        Explore the world's largest car sharing marketplace
                    </span>
                </h3>
                </div>
            </div>

            <div className={styles.slider_container}>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={5}
      navigation
      breakpoints={{ 
        // when width is >= 340px
        340:{
            width: 200,
            slidesPerView: 1,
        },
         // when width is >= 768px
        768:{
            width: 768,
            slidesPerView: 4,
        },
         // when width is >= 1040px
        1040:{
            width: 1040,
            slidesPerView: 5,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide>
            <Card image={pic1} make="Audi"/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={pic2} make="Hyundai"/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={pic3} make="BMW"/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={pic4} make="Chevrolet"/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={pic5} make="Range Rover"/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={pic6} make="Nissan"/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={pic7} make="Toyota"/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={pic8} make="Highlander"/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={pic9} make="Sedona"/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image={pic10} make="Mercedes"/>
        </SwiperSlide>
        </Swiper>
        
            </div>

        </div>
    );
}

export default Find;
