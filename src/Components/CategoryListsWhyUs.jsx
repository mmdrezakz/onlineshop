import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

import { Autoplay, Grid, Navigation, Pagination } from 'swiper/modules';

import './CategoryList.css'
import './CategoryBrandsCss.css'

const CategoryItems = [
  { id:1, name:"Home", image:"/Home/category/1.jpg" },
  { id:2, name:"Book & Music", image:"/Home/category/2.jpg" },
  { id:3, name:"Sport", image:"/Home/category/3.jpg" },
  { id:4, name:"Pet", image:"/Home/category/4.jpg" },
  { id:5, name:"Digital", image:"/Home/category/5.jpg" },
  { id:6, name:"Mobile", image:"/Home/category/6.jpg" },
  { id:7, name:"Gold", image:"/Home/category/7.jpg" },
  { id:8, name:"Clothes", image:"/Home/category/8.jpg" },
  { id:9, name:"Devices", image:"/Home/category/9.jpg" },
];

export default function CategoryListsWhyUs() {
  return (
    <section className="inset-shadow-[15px_9px_16px_-4px_rgb(0,0,0,0.1),0_10px_4px_-2px_rgb(0,0,0,0.1)] bg-white mx-3 sm:mx-6 md:mx-16 pt-4 rounded-2xl">
    <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="400">

     
      <Swiper
      navigation={true}
      autoplay={true}     
        slidesPerView={3}
        grid={{ rows: 2 }}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Grid,Navigation ,Autoplay]}
        className="mySwiper2"
        breakpoints={{
          0: { slidesPerView: 2, grid: { rows: 1 }, spaceBetween: 12 },
          640: { slidesPerView: 3, grid: { rows: 1 }, spaceBetween: 16 },
          1024: { slidesPerView: 5, grid: { rows: 1 }, spaceBetween: 20 },
        }}
      >
        {CategoryItems.map(item => (
          <SwiperSlide className='special-slide' key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="drop-shadow-amber-600 drop-shadow-lg/25 fill-white mx-auto rounded-full w-28 md:w-30 h-28 md:h-30 object-cover hover:scale-105 transition-all duration-300 ease-out"
            />
            <p style={{fontFamily:"Bebas Neue"}} className="mt-2 text-gray-600 text-sm text-center">{item.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <WhyUs />
          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="400">

      <CategoryBrands />
     </div>
    </section>
  );
}

function WhyUs(){
  return (
    <main>
      <div className='flex justify-center items-center mb-2 font-extrabold text-slate-700 text-2xl'>
        <p className='pl-2 border-l-3 underline underline-offset-2'>Why US</p>
        <div className='flex justify-center items-start'>
          <img src='/WhyUs/question.gif' /></div>
      </div>
      <section className='justify-center items-center gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:mx-24 rounded-xl'>
        <div className='justify-center items-center grid grid-cols-1 bg-slate-500 mx-1 mb-4 rounded-2xl h-full text-gray-200 text-center'>
          <h4 className='font-bold text-2xl text-center'>1. FAST SEND</h4>
          <p className='mx-4 border-b-2 text-xs text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.<p className='hidden md:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.</p>
          </p>
          <div className='flex justify-center items-center my-2'>
            <img className='rounded-sm' src='/WhyUs/send.gif' />
          </div>
        </div>
        <div className='justify-center items-center grid grid-cols-1 bg-slate-500 mx-1 mb-4 rounded-2xl h-full text-gray-200 text-center'>
          <h4 className='font-bold text-lg text-center'>2. CUSTOMER SUPPORT</h4>
          <p className='mx-4 border-b-2 text-xs text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.<p className='hidden md:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.</p>
          </p>
          <div className='flex justify-center items-center my-2'>
            <img className='rounded-sm' src='/WhyUs/customer.gif' />
          </div>
        </div>
                <div className='hidden justify-center items-center lg:grid grid-cols-1 bg-slate-500 mx-1 mb-4 rounded-2xl h-full text-gray-200 text-center'>
          <h4 className='font-bold text-2xl text-center'>3. BEST PRODUCT</h4>
          <p className='mx-4 border-b-2 text-xs text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.<p className='hidden md:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.</p>
          </p>
          <div className='flex justify-center items-center my-2'>
            <img className='rounded-sm' src='/WhyUs/store.gif' />
          </div>
        </div>

      </section>
    </main>
  )
}

function CategoryBrands(){
  return(
      <section className="mx-3 sm:mx-6 md:mx-32 md:py-4 rounded-2xl">
        <div className='flex justify-center mt-4 mb-4 font-extrabold text-slate-700 text-2xl'>
          <p className='md:py-2 pl-2 border-l-3 underline underline-offset-2'>BRANDS</p>
        </div>
      <Swiper
      navigation={true}
        slidesPerView={3}
        breakpoints={{
  0: { slidesPerView: 2, grid: { rows: 2 }, spaceBetween: 12 },
  640: { slidesPerView: 3, grid: { rows: 2 }, spaceBetween: 16 },
  1024: { slidesPerView: 5, grid: { rows: 2 }, spaceBetween: 20 },
}}

        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Grid, Navigation]}
        className="mySwiper3"
      >
        <SwiperSlide  className='inset-shadow-sm border-r rounded-lg'>
          <img src='/Brands/1.jpg' alt='45'/>
        </SwiperSlide>
        <SwiperSlide  className='border-l rounded-lg'>
          <img src='/Brands/2.png' alt='45'/>
        </SwiperSlide>
        <SwiperSlide  className='border-r rounded-lg'>
          <img src='/Brands/3.jpg' alt='45'/>
        </SwiperSlide>
        <SwiperSlide className='border-l rounded-lg' >
          <img src='/Brands/4.png' alt='45'/>
        </SwiperSlide>
        <SwiperSlide  className='border-r rounded-lg'>
          <img src='/Brands/5.jpg' alt='45'/>
        </SwiperSlide>
        <SwiperSlide  className='border-l rounded-lg'>
          <img src='/Brands/6.png' alt='45'/>
        </SwiperSlide>
        <SwiperSlide  className='border-r rounded-lg'>
          <img src='/Brands/7.jpg' alt='45'/>
        </SwiperSlide>
        <SwiperSlide  className='border-l rounded-lg'>
          <img src='/Brands/8.jpg' alt='45'/>
        </SwiperSlide>
        <SwiperSlide  className='border-r rounded-lg'>
          <img src='/Brands/9.jpg' alt='45'/>
        </SwiperSlide>
                <SwiperSlide  className='border-l rounded-lg'>
          <img src='/Brands/1.jpg' alt='45'/>
        </SwiperSlide>
        <SwiperSlide  className='border-r rounded-lg'>
          <img src='/Brands/2.png' alt='45'/>
        </SwiperSlide>
        <SwiperSlide  className='border-l rounded-lg'>
          <img src='/Brands/3.jpg' alt='45'/>
        </SwiperSlide>
        <SwiperSlide className='border-r rounded-lg' >
          <img src='/Brands/4.png' alt='45'/>
        </SwiperSlide>
        <SwiperSlide  className='border-l rounded-lg'>
          <img src='/Brands/5.jpg' alt='45'/>
        </SwiperSlide>
        <SwiperSlide  className='border-r rounded-lg'>
          <img src='/Brands/6.png' alt='45'/>
        </SwiperSlide>
        <SwiperSlide  className='border-l rounded-lg'>
          <img src='/Brands/7.jpg' alt='45'/>
        </SwiperSlide>
        <SwiperSlide  className='border-r rounded-lg'>
          <img src='/Brands/8.jpg' alt='45'/>
        </SwiperSlide>
        <SwiperSlide  className='border-l rounded-lg'>
          <img src='/Brands/9.jpg' alt='45'/>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}