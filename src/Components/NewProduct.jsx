
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';
import '../../src/swiper.css'
import { Autoplay, Pagination } from 'swiper/modules'
import { PulseLoader } from 'react-spinners';
import ButtonAddToCart from './ButtonAddToCart';
import { Link } from 'react-router-dom';

function NewProduct({productNew}){


  return(
          <div className="p-6">
        <Swiper 
        
          slidesPerView={3}
            autoplay={{
            delay: 3000,   // 👈 هر 3 ثانیه اسلاید عوض میشه
            disableOnInteraction: false, // 👈 بعد از تعامل کاربر هم ادامه میده
          }}

          breakpoints={{
            0: { slidesPerView: 1 },     // موبایل
            640: { slidesPerView: 2 },   // تبلت
            1024: { slidesPerView: 3 },  // دسکتاپ
          }}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {productNew.map((item) => (
            <SwiperSlide key={item._id} className='flex' >
              <div className="bg-white shadow-md hover:shadow-xl p-4 rounded-lg transition-transform hover:-translate-y-1 transform">
              <Link to={`/shop/${item.id}`}>
                <div className="w-full h-64">
                  <img
                    src={item.image || "./Home/placeholder.jpg"}
                    alt={item.title || "NOT FOUND"}
                    loading='lazy'
                    className="mb-4 rounded-md w-full h-full object-contain"
                    />
                  
                </div>
                <div className='justify-around items-center'>
                  <h3 className="font-semibold text-gray-800 lg:text-lg">{
                    item.title.length > 20  ? item.title.slice(0,20) +"..." : item.title
                  }</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{
                    item.description.length > 120 ? item.description.slice(0,120) +"..." : item.description}</p>
                  <p className="text-gray-500 text-sm">category : {item.category}</p>
                  <p className="mt-2 font-bold text-green-600">price : {item.price} $</p>
                </div>
              </Link>
              <ButtonAddToCart product={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  )
}
export default NewProduct