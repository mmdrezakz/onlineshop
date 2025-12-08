import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import  './ElectronicsCss.css'
// import required modules
import { Pagination } from 'swiper/modules';
import ButtonAddToCart from './ButtonAddToCart';
import { Link } from 'react-router-dom';

export default function womenClothing({womenItem}) {
  return (
         <>
         <div className="flex flex-col divide-y divide-gray-400">

          <h3 className='mx-2 my-5 font-extrabold md:text-2xl'>WOMEN CLOTHING</h3>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={
            {
                0: {slidesPerView :2},
                640:{slidesPerView :3},
                1024: {slidesPerView :4},
                1600: {slidesPerView :5},
                
            }
        } 
        modules={[]}
        className="MySwiper4"
        >  
            {womenItem.map(item =>

<SwiperSlide  key={item.id}>
    
                <div className='flex justify-center items-center bg-[#cdcccc] rounded-2xl w-40 md:w-44 md:h-56'>  
                     <Link to={`/shop/${item.id}`}>
                <img className='w-30 md:w-40 h-40 md:h-54 object-center object-contain'  src={item.image} alt={item.title} />
                  </Link>
                </div>
                <div className='justify-around items-center w-40 md:w-44 md:h-56'>
                     <Link to={`/shop/${item.id}`}>
                  <h3 className="font-semibold text-gray-800 lg:text-lg">{
                    item.title.length > 9  ? item.title.slice(0,9) +"..." : item.title
                  }</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{
                    item.description.length > 50 ? item.description.slice(0,50) +"..." : item.description}</p>
                  <p className="text-gray-500 text-sm">category : {item.category}</p>
                  <p className="mt-2 font-bold text-green-600">price : {item.price} $</p>
                    </Link>
                <ButtonAddToCart  product={item}/>
                </div>
                
            </SwiperSlide>
            
            
        )}
                    <SwiperSlide className='swiper-slide'>
                <div className='flex justify-center items-center bg-[#e6e5e5] rounded-2xl w-40 md:w-44 h-40 md:h-56 font-extrabold text-green-500 underline cursor-pointer'>
                    <Link to={"/shop/women"}>SHOW ALL</Link>
                </div>
            </SwiperSlide>
            </Swiper>
        </div>
        </>
  )
}
