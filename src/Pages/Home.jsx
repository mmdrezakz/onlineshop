



import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import FeaturedProduct from "../Components/FeaturedProduct";
import Header from "../Components/Header";
import HeaderBottom from "../Components/HeaderBottom";
import OffProduct from '../Components/OffProduct';
import { useEffect, useState} from 'react';
import axios from 'axios';
import { PulseLoader } from 'react-spinners';
import Timer from '../Components/Timer';
import  CategoryListsWhyUs from '../Components/CategoryListsWhyUs';
import BannerImage from '../Components/BannerImage';
import Electronics from '../Components/Electronics';
import WomenClothing from './../Components/WomenClothing';
import CategorySliders from '../Components/CategorySliders';
import MenClothing from '../Components/MenClothing';
import Footer from '../Components/Footer';
import { Toaster } from 'react-hot-toast';




export default function Home() {
        const [product, setProduct] = useState([])
        const [productNew, setProductNew] = useState([])
        const [electronicItem,setElectronicItem] = useState([])
        const [womenItem,setWomenItem] = useState([])
        const [menItem,setMenItem] = useState([])

        const [isLoading,setIsLoading] = useState()
useEffect(() => {
  async function fetchData() {
    setIsLoading(true)
    try {
      const res = await axios.get("https://fakestoreapi.com/products")
      const productArray = res.data
      const res2= await axios.get("https://fakestoreapi.com/products/category/electronics")
      const Electronics = res2.data
      const res3= await axios.get("https://fakestoreapi.com/products/category/women's clothing")
      const Women = res3.data
      const res4= await axios.get("https://fakestoreapi.com/products/category/men's clothing")
      const Men = res4.data
      
      //  console.log(Women);
      
      // محصولات تخفیف‌دار (فرضی: اگر قیمت بالای 70 باشه)
      const offItem = productArray.filter(item => item.price >= 70)
      
      // محصولات جدید (فرضی: دسته‌بندی خاص)
      const newItem = productArray.filter(item => item.category === "electronics")
      
      setProduct(offItem)
      setProductNew(newItem)
      setElectronicItem(Electronics)
      setWomenItem(Women)
      setMenItem(Men)
    } catch (error) {
      console.error("Error fetching FakeStore API:", error)
    }
    setIsLoading(false)
  }
  fetchData()
}, [])
  
  
    if(isLoading) return(
  <div className='flex justify-center items-center w-full min-h-screen'>
    <PulseLoader color='#383535' />
  </div>)
  
  return (
    <div>
      <HeaderBottom />
      <Toaster    toastOptions={{
    className: 'bg-green-500',
    style: {
      border: '1px solid #4e4e4b',
      padding: '16px',
      backgroundColor:"greenyellow",
      color: '#343834',
    }}}/>
      <FeaturedProduct   productNew={productNew}/>
      <Timer />
      <OffProduct   product={product} />
      <CategoryListsWhyUs />
      <BannerImage />
      <CategorySliders>
        <Electronics electronicItem={electronicItem} />
      </CategorySliders>
      <CategorySliders>
        <WomenClothing  womenItem={womenItem}/>
      </CategorySliders>
      <CategorySliders>
        <MenClothing  menItem={menItem}/>
        
      </CategorySliders>

      {/* <Electronics electronicItem={electronicItem} />
      <WomenClothing  womenItem={womenItem}/> */}
      <Footer />
    </div>
  )
}
