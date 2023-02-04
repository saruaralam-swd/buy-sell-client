import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Keyboard, FreeMode } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from '../../../assets/SlideImage/img1.avif'
import img2 from '../../../assets/SlideImage/img2.avif'
import img3 from '../../../assets/SlideImage/img3.avif'
import img4 from '../../../assets/SlideImage/img4.avif'
import img5 from '../../../assets/SlideImage/img5.jpg'

const Banner = () => {
  const slides = [
    {
      title: 'About Phone Band Title',
      image: img1,
    },
    {
      title: 'About Phone Band Title',
      image: img2,
    },
    {
      title: 'About Phone Band Title',
      image: img3,
    },
    {
      title: 'About Phone Band Title',
      image: img4,
    },
    {
      title: 'About Phone Band Title',
      image: img5,
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, FreeMode, Keyboard]}
        className="h-[600px]"
      >
        {
          slides.map(slide =>
            <SwiperSlide className=''>
              <img className='w-full h-full object-cover' src={slide.image} alt="" />

            </SwiperSlide>
          )
        }
      </Swiper>
    </>
  );
};

export default Banner;