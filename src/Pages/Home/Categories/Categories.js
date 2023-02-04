import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Keyboard, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Categories.css';
import { Link } from 'react-router-dom';

const Categories = () => {
  const { categories } = useContext(AuthContext);

  return (
    <div className='my-10 mx-5 bg-white rounded-md'>
      <h2 className='text-xl font-bold border-b-2 pb-2 p-2'>Browse Categories</h2>
      <Swiper
        style={{
          "--swiper-navigation-size": "12px",
        }}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 3,
          },
          768: {
            width: 640,
            slidesPerView: 3,
          },
          1024: {
            width: 1024,
            slidesPerView: 3,
          },
        }}
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, FreeMode, Keyboard]}
        className="w-full h-[180px] swiper mt-2"
      >
        <div>
          {
            categories.map(category =>
              <SwiperSlide className='text-center hover:underline'>
                <Link to={`/category/${category?._id}`} >
                  <div>
                    {/* <img src={category?.img} className='' alt="category img" /> */}
                    <img className='w-32 h-32 object-cover mx-auto' src='https://media.istockphoto.com/id/1161116588/photo/mobile-phone-top-view-with-white-screen.jpg?s=612x612&w=0&k=20&c=6nGTbnTvQUiq2XXSYuT411pC-5B1SUjhpLhE3eGrNIw=' alt="category img" />
                    <p>{category?.categoryName}</p>
                  </div>
                </Link>
              </SwiperSlide>
            )
          }
        </div>
      </Swiper>
    </div>

  );
};

export default Categories;