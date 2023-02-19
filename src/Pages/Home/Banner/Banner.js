import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Keyboard, FreeMode } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img2 from '../../../assets/SlideImage/2.jpg'
import img3 from '../../../assets/SlideImage/3.jpg'
import img4 from '../../../assets/SlideImage/4.jpg'

const Banner = () => {
  const slides = [
    {
      title: 'About Phone Band Title',
      image: img2,
      text: 'lorem ipsum is dolor'
    },
    {
      title: 'About Phone Band Title',
      image: img3,
      text: 'lorem ipsum is dolor'
    },
    {
      title: 'About Phone Band Title',
      image: img4,
      text: 'lorem ipsum is dolor'
    }
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
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, FreeMode, Keyboard]}
        className="h-[600px]"
      >
        {
          slides.map(slide =>
            <SwiperSlide className='relative'>
              <img className='w-full h-full object-cover object' src={slide.image} alt="" />

              <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center'>
                <div className='w-1/2 h-[80%] flex items-center justify-center bg-black/50 text-white text-center rounded-lg'>
                  <div>
                    <h2 className="text-4xl font-semibold">{slide.title}</h2>
                    <p>{slide.text}</p>
                    <button className='btn btn-sm btn-primary'>Click</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        }
      </Swiper>
    </>
  );
};

export default Banner;