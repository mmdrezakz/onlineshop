import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { PulseLoader } from "react-spinners";

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';
import '../../src/swiper.css'
import { Autoplay, Pagination } from 'swiper/modules'
import Footer from "../Components/Footer";
import ButtonAddToCart from "../Components/ButtonAddToCart";
import { Toaster } from "react-hot-toast";



export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        const prod = res.data
        setProduct(prod);
        const resRelated = await axios.get(
  `https://fakestoreapi.com/products/category/${prod.category}`
);
setRelatedProducts(resRelated.data);

      } catch (error) {
        console.error("Error fetching product:", error);
      }
      setIsLoading(false);
    }
    fetchProduct();
  }, [id]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center w-full min-h-screen">
        <PulseLoader color="#6d726f" />
      </div>
    );

  if (!product) return <p className="text-center">Product not found</p>;

  return (
      <>
    <div className="bg-gray-50 px-4 md:px-12 py-10 min-h-screen">
            <Toaster    toastOptions={{
    className: 'bg-green-500',
    style: {
      border: '1px solid #4e4e4b',
      padding: '16px',
      backgroundColor:"greenyellow",
      color: '#343834',
    }}}/>
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg p-6 rounded-xl">
        {/* Product Image */}
        <div className="flex justify-center items-center" data-aos="zoom-in">
          <img
            src={product.image}
            alt={product.title}
            className="shadow-md rounded-lg w-64 md:w-96 h-64 md:h-96 object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between gap-6" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500">
          <h1 className="font-bold text-slate-800 text-2xl md:text-3xl">
            {product.title}
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {product.description}
          </p>

          {/* Price & Rating */}
          <div className="flex flex-col gap-4">
            <p className="font-extrabold text-green-600 text-2xl">
              ${product.price}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-lg">⭐</span>
              <span className="font-medium text-slate-700">
                {product.rating?.rate} / 5
              </span>
              <span className="text-gray-500 text-sm">
                ({product.rating?.count} reviews)
              </span>
            </div>
          </div>

          {/* Add to Cart Button */}
    <ButtonAddToCart product={product} />
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">

        <h2 className="mb-6 font-bold text-slate-800 text-xl md:text-2xl">
          Related Products
        </h2>
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
        <div className="gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {relatedProducts.map((item) => (
            <SwiperSlide key={item.id} className='flex' >
                <Link to={`/shop/${item.id}`}>
              <div
              
              className="flex flex-col items-center bg-white shadow-md hover:shadow-xl p-4 rounded-lg transition"
              >
              <img
                src={item.image}
                alt={item.title}
                className="mb-2 w-24 h-24 object-contain"
                />
              <p className="font-medium text-sm text-center line-clamp-2">
                {item.title.length > 25  ? item.title.slice(0,25) +"..." : item.title}
              </p>
              <p className="font-bold text-green-600">${item.price}</p>
            </div>
                </Link>
                </SwiperSlide>
          ))}
        </div>
          </Swiper>
      </div>
    </div>
    <Footer/>
    </>
  );
}