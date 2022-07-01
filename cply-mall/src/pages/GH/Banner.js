import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


const BannerCss = styled.div`
    margin-bottom: 50px;
    .swiper-slide {
        background-color: #ff6600;
        height: 300px;
        margin: 100px 0;
    }
    .swiper-button-next {
    background: url(./assets/img/btn_banner_next1.png) no-repeat;
    width: 75px;
    height: 75px;
    background-position: center center;    
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(-300%,-25%);
    }

    .swiper-button-prev {
    background: url(./assets/img/btn_banner_prev1.png) no-repeat;
    width: 75px;
    height: 75px;
    background-position: center;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(300%,-25%);
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
    display: none;
    }
    .swiper-pagination {
        position:absolute;
        bottom: 0;

    }
    .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background-color: #ccc;
        opacity: 1;
        margin: 0px 10px !important;
        &:hover {
            background: #000;
            transition: all 0.3s;
        }
    }
    .swiper-pagination-bullet-active { background: #000;}
    .swiper-slide-active{
        transform: scale(1.5,1.5);
        background-color: #000;
        z-index: 99;
        transition: transform 0.5s ease-in-out;
    }
`;

const Banner = () => {
    return (
        <BannerCss>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          autoplay={{ delay: 3000}}
          loop={true}
          centeredSlides={true}
          pagination={{ clickable: true }}
        >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      
    </Swiper>
    </BannerCss>
    );
};

export default Banner;