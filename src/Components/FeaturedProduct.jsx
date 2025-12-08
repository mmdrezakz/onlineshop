
import { Link } from "react-router-dom";
import NewProduct from "./NewProduct";


export default function FeaturedProduct({productNew}) {



  return (
    <section className='md:my-2 py-2'>
      <div className='text-center'>
        <div className='font-[Lalezar] font-extralight text-lg md:text-2xl lg:text-3xl uppercase'>New Products</div>
          <Link to={'/shop'}>
        <button className='hover:bg-[#D9D9D9] mt-2 md:mt-4 px-4 md:px-8 py-1 md:pt-2 rounded-xl outline-[#D9D9D9] outline-2 transition-all duration-75 ease-in-out'>
          Show All
        </button>
          </Link>
      </div>
    <div data-aos="fade-up"
     data-aos-duration="800">
      <NewProduct  productNew={productNew} />
     </div>

    </section>
  )
}

