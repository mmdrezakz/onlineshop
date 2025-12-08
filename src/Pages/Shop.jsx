import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ButtonAddToCart from '../Components/ButtonAddToCart'
import { PulseLoader } from 'react-spinners'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

export default function Shop({category}) {
    const [products,setProducts] = useState([])
    const [sort,setSort] = useState(null)
    const[searchTerm,setSearchTerm] = useState("")
    const[minPrice,setMinPrice] = useState(1)
    const[maxPrice,setMaxPrice] = useState(2000)
    const[reviews,setReviews] =useState(1)
    const[rate,setRate] = useState(1)
    const [isLoading,setIsLoading] = useState()

  useEffect(() =>{
    async function fetchData(){
          setIsLoading(true)
      let url = 'https://fakestoreapi.com/products'
      if(category){
        url = `https://fakestoreapi.com/products/category/${category}`
      }
      
      const res = await axios.get(url)
      const Data = res.data
      console.log(Data);
      setProducts(Data)
          setIsLoading(false)
      
    }
    fetchData()
  },[category])

  return (
    <>
    <div className='mx-5 md:mx-10 my-10'>
            <Toaster    toastOptions={{
    className: 'bg-green-500',
    style: {
      border: '1px solid #4e4e4b',
      padding: '16px',
      backgroundColor:"greenyellow",
      color: '#343834',
    }}}/>
      <section>
        <div className='flex flex-wrap justify-start items-center gap-3 md:gap-5 text-slate-700 text-xs sm:text-sm md:text-lg'>
          <p className='font-bold text-sm md:text-lg'>
            <i class="bi-filter-right bi"></i>
            Sort : </p>
          <p onClick={() =>setSort("cheapest")} className='bg-green-500 active:bg-green-600 px-2 py-0.5 rounded-2xl font-semibold text-slate-50 hover:cursor-pointer'>Cheapest</p>
          <p onClick={() =>setSort("expensive")} className='bg-green-500 active:bg-green-600 px-2 py-0.5 rounded-2xl font-semibold text-slate-50 hover:cursor-pointer'>Most expensive</p>

          <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type='search' placeholder='Search Products ...' className='bg-slate-50 lg:mx-10 px-2 sm:px-4 md:px-8 py-0.5 md:py-1 border-2 border-green-500 rounded-lg focus:outline-green-600 placeholder:text-green-500 text-center'></input>
        </div>
      </section>
      {/* Main */}
<main className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-6">
  {/* Filters */}
  <div
    name="Filters"
    className="bg-white shadow-md p-4 border border-green-300 rounded-xl h-fit text-slate-700 text-sm md:text-base lg:text-lg"
  >
    <p className="flex items-center gap-2 mb-6 font-bold text-base md:text-lg">
      <i className="bi bi-funnel"></i> Filters
    </p>

    {/* Price Range */}
    <div className="flex flex-col gap-4 mb-6">
      <p className="font-bold">Price range :</p>
      <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 font-medium text-xs md:text-sm">
        <span>Between:</span>
        <span className="w-12 text-green-500 text-center">{minPrice}</span>
        <span>And</span>
        <span className="w-12 text-green-500 text-center">{maxPrice}</span>
        <p className="px-1">Up</p>
      </div>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
        <div className="flex md:flex-row flex-col items-center gap-2">
          <p className="px-1">From:</p>
          <input
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="bg-white shadow-sm border-2 border-green-500 rounded-lg focus:outline-green-500 w-full md:w-13 lg:w-20 placeholder:text-green-500 text-center"
          />
        </div>
        <div className="flex md:flex-row flex-col items-center gap-2">
          <p className="px-1"> to:</p>
          <input
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="bg-white shadow-sm border-2 border-green-500 rounded-lg focus:outline-green-500 w-full md:w-13 lg:w-20 placeholder:text-green-500 text-center"
          />
        </div>
      </div>
    </div>

    {/* Reviews */}
    <div className="flex flex-col gap-4 mb-6">
      <p className="font-bold">Reviews From :</p>
      <div className="flex justify-center md:justify-start items-center gap-2 font-medium text-sm">
        <span>Reviews From</span>
        <span className="w-12 text-green-500 text-center">{reviews}</span>
        <p className="px-1">Up</p>
      </div>
      <input
        value={reviews}
        onChange={(e) => setReviews(e.target.value)}
        type="number"
        min={1}
        className="bg-white shadow-sm border-2 border-green-500 rounded-lg focus:outline-green-500 w-full md:w-28 placeholder:text-green-500 text-center"
      />
    </div>

    {/* Rate */}
    <div className="flex flex-col gap-4 mb-6">
      <p className="font-bold">Rate From :</p>
      <div className="relative">
        <label
          htmlFor="default-range"
          className="flex justify-center md:justify-start items-center gap-2 mb-2 font-medium text-sm"
        >
          Rate Filter
          <span className="w-12 text-green-500 text-center">{rate}</span>
          up to <span className="px-2 text-green-500">5</span>
        </label>
        <input
          id="default-range"
          min={1}
          onChange={(e) => setRate(e.target.value)}
          step={0.1}
          type="range"
          value={rate}
          max={5}
          className="rounded-full w-full h-2 text-center accent-green-400 hover:accent-green-400 cursor-pointer"
        />
        <span className="-bottom-6 left-0 absolute text-green-500 text-xs">Min 1</span>
        <span className="right-0 -bottom-6 absolute text-green-500 text-xs">Max 5</span>
      </div>
    </div>




  </div>
  {/* Products */}
  <Boxes
    products={products}
    sort={sort}
    searchTerm={searchTerm}
    minPrice={minPrice}
    maxPrice={maxPrice}
    reviews={reviews}
    rate={rate}
    isLoading={isLoading}
    />
</main>
      
    </div>
            <Footer />
    </>
  )
}


function Boxes({products,sort,searchTerm,minPrice,maxPrice,reviews,rate,isLoading}){
    let sortedProducts =[...products]

    if(sort === "cheapest"){
      sortedProducts.sort((a,b) => a.price - b.price)
    }else if(sort === "expensive"){
      sortedProducts.sort((a,b) => b.price - a.price)
    }
    // سرچ
    let filteredProducts = sortedProducts.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    // رنج قیمت
    if(minPrice){
      filteredProducts = filteredProducts.filter(item => item.price >= parseFloat(minPrice))
    }
    if(maxPrice){
      filteredProducts = filteredProducts.filter(item => item.price <= parseFloat(maxPrice))
    }
    if(reviews){
      filteredProducts = filteredProducts.filter(item => item.rating.count >= reviews)
    }
    if(rate){
      filteredProducts = filteredProducts.filter(item => item.rating.rate >= rate)
    }
        if(isLoading) return(
  <div className='flex justify-center items-center col-span-2 w-full'>
    <PulseLoader color='#383535' />
  </div>)
    // اگر آیتم در سرچ نبود
    if(filteredProducts.length === 0){
      return(<div className='flex justify-center items-center col-span-2 w-full text-2xl'><span className='mx-2 text-green-500 underline'>{searchTerm}</span>Product does not exist.</div>)
    }
  return(
  <div  className='gap-4 grid grid-cols-2 max-[370px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-2 mt-4 md:mt-0'>
          {filteredProducts.map((item) => (
            <div data-aos="fade-down" data-aos-duration="300" key={item.id} className='bg-white shadow-2xl shadow-slate-300 mx-2 p-2 border border-slate-100 rounded-lg h-max'>
              <Link to={`/shop/${item.id}`} >
              <img src={item.image} alt={item.title} className='mx-auto h-32' />
              <p className='font-bold text-sm'>{
                item.title.length > 16 ? item.title.slice(0,16) +"..." : item.title
              }
              </p>
              <p className="text-gray-500 text-sm line-clamp-2">{
                item.description.length > 40 ? item.description.slice(0,40) +"..." : item.description}
              </p>
              <p className="text-gray-500 text-xs">category : {item.category}</p>
              <p className="text-gray-500 text-xs">Rate: {item.rating?.rate} ⭐</p>
              <p className="text-gray-400 text-xs">({item.rating?.count} reviews)</p>

              <p className='text-green-500'>${item.price}</p>
              </Link>
              <ButtonAddToCart product={item} />
            </div>
          ))}
        </div>
)
}