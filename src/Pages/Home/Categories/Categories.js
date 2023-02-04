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
    <>
      <div className='my-10 px-5'>
        <h2 className='text-2xl mb-3 font-semibold'>Browse Categories</h2>
        <Swiper
          style={{
            "--swiper-navigation-size": "22px",
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
          className="w-full h-[230px] border rounded-md swiper"
        >
          <div>
            {
              categories.map(category =>
                <SwiperSlide className='text-center hover:underline'>
                  <Link to={`/category/${category?._id}`} >
                    <div>
                      {/* <img src={category?.img} className='' alt="category img" /> */}
                      <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsip1U_U5ElDOrtQiAGbVgAmV-LU2GaUFRew&usqp=CAU' className='object-cover mx-auto' alt="category img" />
                      <p>{category?.categoryName}</p>
                    </div>
                  </Link>
                </SwiperSlide>
              )
            }
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Categories;