"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Image from "next/image";

import "swiper/css";

const CustomCarusel = () => {
  return (
    <Swiper
      slidesPerView={1}
      navigation={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      <SwiperSlide>
        <Image
          src="/student-john.jpg"
          alt="student img"
          width={200}
          height={100}
          style={{ width: "100%" }}
        />
        <p className="p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, atque.</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/student-john.jpg"
          alt="student img"
          width={200}
          height={100}
          style={{ width: "100%" }}
        />
        <p className="p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, atque.</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/student-john.jpg"
          alt="student img"
          width={200}
          height={100}
          style={{ width: "100%" }}
        />
        <p className="p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, atque.</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/student-john.jpg"
          alt="student img"
          width={200}
          height={100}
          style={{ width: "100%" }}
        />
        <p className="p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, atque.</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/student-john.jpg"
          alt="student img"
          width={200}
          height={100}
          style={{ width: "100%" }}
        />
        <p className="p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, atque.</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/student-john.jpg"
          alt="student img"
          width={200}
          height={100}
          style={{ width: "100%" }}
        />
        <p className="p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, atque.</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/student-john.jpg"
          alt="student img"
          width={200}
          height={100}
          style={{ width: "100%" }}
        />
        <p className="p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, atque.</p>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/student-john.jpg"
          alt="student img"
          width={200}
          height={100}
          style={{ width: "100%" }}
        />
        <p className="p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, atque.</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default CustomCarusel;
