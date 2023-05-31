import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"
// import '~/styles/style.css';
// import '~/styles/style.scss'
// import required modules
import { Navigation, Pagination } from "swiper";

export default function DoctorsIntro() {
  return (
      <>
      <div className="mt-16 text-center w-[50%]">
        <h2 className="font-bold text-[24px]">Chuyên gia của chúng tôi</h2>
        <p className="text-[18px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum the industry's standard dummy text.</p>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        navigation = {true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <div className="h-[100%]">
            <div className="h-[70%]">
              <img className="h-[100%] object-cover" src='https://nischinto-html.netlify.app/nischinto/assets/img/member1.jpg'/>
            </div>
            <div className="h-[30%] mt-8">
              <p className="text-[20px] font-bold">Dr. Philip Bailey</p>
              <p>Urology</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[100%]">
            <div className="h-[70%]">
              <img className="h-[100%] object-cover" src='https://nischinto-html.netlify.app/nischinto/assets/img/member4.jpg'/>
            </div>
            <div className="h-[30%] mt-8">
              <p className="text-[20px] font-bold">Dr. Philip Bailey</p>
              <p>Urology</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[100%]">
            <div className="h-[70%]">
              <img className="h-[100%] object-cover" src='https://nischinto-html.netlify.app/nischinto/assets/img/member2.jpg'/>
            </div>
            <div className="h-[30%] mt-8">
              <p className="text-[20px] font-bold">Dr. Philip Bailey</p>
              <p>Urology</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[100%]">
            <div className="h-[70%]">
              <img className="h-[100%] object-cover" src='https://nischinto-html.netlify.app/nischinto/assets/img/member3.jpg'/>
            </div>
            <div className="h-[30%] mt-8">
              <p className="text-[20px] font-bold">Dr. Philip Bailey</p>
              <p>Urology</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[100%]">
            <div className="h-[70%]">
              <img className="h-[100%] object-cover" src='https://nischinto-html.netlify.app/nischinto/assets/img/member1.jpg'/>
            </div>
            <div className="h-[30%] mt-8">
              <p className="text-[20px] font-bold">Dr. Philip Bailey</p>
              <p>Urology</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[100%]">
            <div className="h-[70%]">
              <img className="h-[100%] object-cover" src='https://nischinto-html.netlify.app/nischinto/assets/img/member1.jpg'/>
            </div>
            <div className="h-[30%] mt-8">
              <p className="text-[20px] font-bold">Dr. Philip Bailey</p>
              <p>Urology</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[100%]">
            <div className="h-[70%]">
              <img className="h-[100%] object-cover" src='https://nischinto-html.netlify.app/nischinto/assets/img/member1.jpg'/>
            </div>
            <div className="h-[30%] mt-8">
              <p className="text-[20px] font-bold">Dr. Philip Bailey</p>
              <p>Urology</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[100%]">
            <div className="h-[70%]">
              <img className="h-[100%] object-cover" src='https://nischinto-html.netlify.app/nischinto/assets/img/member1.jpg'/>
            </div>
            <div className="h-[30%] mt-8">
              <p className="text-[20px] font-bold">Dr. Philip Bailey</p>
              <p>Urology</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[100%]">
            <div className="h-[70%]">
              <img className="h-[100%] object-cover" src='https://nischinto-html.netlify.app/nischinto/assets/img/member1.jpg'/>
            </div>
            <div className="h-[30%] mt-8">
              <p className="text-[20px] font-bold">Dr. Philip Bailey</p>
              <p>Urology</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </>
  );
}
