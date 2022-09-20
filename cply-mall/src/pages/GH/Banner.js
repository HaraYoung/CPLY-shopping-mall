import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { getBannerList } from "../../slices/KH/BannerSlice";
import { useDispatch,useSelector } from "react-redux";
import Spinner from "../../components/Spinner";
import ErrorView from "../../components/ErrorView";

const BannerCss = styled.div`
    margin-bottom: 50px;
    .swiper-slide {
        margin: 100px 0;
        opacity: 0.8;
        filter: grayscale(60%);
        img {
            width: 100%;
        }
    }
    .swiper-button-next {
    background: url(./assets/img/next_button.png) no-repeat;
    width: 75px;
    height: 75px;
    background-position: center center;    
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(-300%,-25%);
    }

    .swiper-button-prev {
    background: url(./assets/img/prev_button.png) no-repeat;
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
        opacity: 1;
        filter: grayscale(0%);
        transition: transform 0.5s ease-in-out;
        
    }
`;

const Banner = () => {
    //리덕스 초기화
    const dispatch = useDispatch();

    const {data,loading,error} = useSelector((state)=> state.banner);
    React.useEffect(()=> {
        dispatch(getBannerList())
    },[dispatch])

    return (
        <BannerCss>
        <Spinner visible={loading}/>
        {error ? (
            <ErrorView error={error}/>
        ):(
            data && (
                <>
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
                    {data.item.map((v,i)=> {
                        const url = 'http://localhost:3001'
                        return (
                            <SwiperSlide key={i}><img src={`${url}${v.url}`} alt={i}/></SwiperSlide>                    
                        )
                    })}
                </Swiper>                
                </>
            )
        )}
    </BannerCss>
    );
};

export default Banner;