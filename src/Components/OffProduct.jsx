import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import '../../src/swiper.css'
import '../../src/swiperPagination.css'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import ButtonAddToCart from './ButtonAddToCart'
import { Link } from 'react-router-dom'

export default function OffProduct({ product }) {
  const [Loaded, setLoaded] = useState(false)

  return (
    <main className="justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:ml-5 md:ml-15">
      <section data-aos="fade-left"
     data-aos-duration="1000" className="hidden sm:flex flex-col items-center">
        <img src="./Home/50.png" alt="1234" />
      </section>


  
      <section data-aos="fade-right"
     data-aos-duration="1000" className="md:col-span-2">
        <div className="relative p-6">
          <Swiper
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              0: { slidesPerView: 1 }, // موبایل
              640: { slidesPerView: 2 }, // تبلت
              1024: { slidesPerView: 3 }, // دسکتاپ
            }}
            spaceBetween={10}
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {product.map((item) => (
              <SwiperSlide key={item._id} className="flex">
                <div className="relative bg-[#cdcccc] p-4 rounded-lg transition-transform duration-75">
                  <Link to={`/shop/${item.id}`}>
                  {/* 🔥 بنر بالای باکس */}
                  <div className="-top-3 left-1/2 z-50 absolute bg-linear-to-r from-pink-500 via-red-500 to-yellow-400 shadow-lg px-3 py-1 rounded-full font-bold text-white text-xs -translate-x-1/2 translate-y-4 animate-pulse transform">
                    50% OFF
                  </div>

                  <div className="relative mt-4 w-full h-40 sm:h-56">
                    <img
                      src={item.image || "./Home/placeholder.jpg"}
                      alt={item.title || "NOT FOUND"}
                      loading="lazy"
                      className="mb-2 sm:mb-4 rounded-md w-full h-full object-contain"
                      onLoad={() => setLoaded(true)}
                      />
                  </div>

                      </Link>
                  <div className="bottom-2 left-0 absolute px-2 w-full">
                  <Link to={`/shop/${item.id}`}>

                    <p className="bg-[#cdccccc4] font-bold text-slate-800 text-xs sm:text-sm truncate">
                      {item.title.length > 24
                        ? item.title.slice(0, 24) + "..."
                        : item.title}
                    </p>
                    <p className="bg-[#cdcccc] mt-1 w-fit font-bold text-slate-700 text-xs sm:text-sm">
                      price : {item.price} $
                    </p>
                        </Link>
                  <ButtonAddToCart product={item} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

    </main>
  )
}