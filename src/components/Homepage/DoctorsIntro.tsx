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
      <div className="mt-[200px] text-center w-[50%]" data-aos = "fade-down">
        <h2 className="font-bold text-[24px]">Chuyên gia của chúng tôi</h2>
        <p className="text-[18px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum the industry's standard dummy text.</p>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        data-aos = "fade-up"
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
              <img className="h-[100%] object-cover" src='https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip'/>
            </div>
            <div className="h-[30%] mt-8">
              <p className="text-[20px] font-bold">Dr. Evan</p>
              <p>Tâm lí học</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[100%]">
            <div className="h-[70%]">
              <img className="h-[100%] object-cover" src='https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*'/>
            </div>
            <div className="h-[30%] mt-8">
              <p className="text-[20px] font-bold">Dr. Ben</p>
              <p>Đa khoa</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[100%]">
            <div className="h-[70%]">
              <img className="h-[100%] object-cover" src='https://img.freepik.com/free-photo/smiling-asian-male-doctor-pointing-upwards_1262-18321.jpg?w=996&t=st=1685097648~exp=1685098248~hmac=3dbeb43b746bcfeec0bf165f0ad2b6b529deca8b55dd7edc7b880e2f38558954'/>
            </div>
            <div className="h-[30%] mt-8">
              <p className="text-[20px] font-bold">Dr. Harry</p>
              <p>Xương khớp</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[100%]">
            <div className="h-[70%]">
              <img className="h-[100%] object-cover" src='https://img.freepik.com/free-photo/portrait-smiling-attractive-male-doctor-man_171337-5066.jpg?w=996&t=st=1685097714~exp=1685098314~hmac=e72299d8d0552e5345587a3737d500ca8b223182286cef127c44cc80afccc778'/>
            </div>
            <div className="h-[30%] mt-8">
              <p className="text-[20px] font-bold">Dr. Sam</p>
              <p>Tai mũi họng</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[100%]">
            <div className="h-[70%]">
              <img className="h-[100%] object-cover" src='https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*'/>
            </div>
            <div className="h-[30%] mt-8">
              <p className="text-[20px] font-bold">Dr. Ben</p>
              <p>Đa khoa</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="h-[100%]">
            <div className="h-[70%]">
              <img className="h-[100%] object-cover" src='https://img.freepik.com/free-photo/smiling-asian-male-doctor-pointing-upwards_1262-18321.jpg?w=996&t=st=1685097648~exp=1685098248~hmac=3dbeb43b746bcfeec0bf165f0ad2b6b529deca8b55dd7edc7b880e2f38558954'/>
            </div>
            <div className="h-[30%] mt-8">
              <p className="text-[20px] font-bold">Dr. Harry</p>
              <p>Xương khớp</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </>
  );
}
