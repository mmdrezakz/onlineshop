import { Link } from "react-router-dom";

export default function HeaderBottom() {
  return (


    <div className="relative font-[Lalezar] text-slate-900">
      <img
        className="header-bottom w-full h-[60vh] md:h-[80vh] object-cover"
        src="./Header/bgland.jpg"
        alt="landing background"
        />

      {/* متن تبلیغی روی تصویر */}
      <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start space-y-4 md:mx-20 md:text-left text-center">

        <h2  data-aos="zoom-in"  data-aos-duration="1000" className="drop-shadow-lg text-4xl md:text-7xl">
          The best online shopping experience
        </h2>
        <p data-aos="zoom-in"  data-aos-duration="1800" className="bg-slate-200 drop-shadow-lg px-2 rounded-sm text-lg md:text-3xl lg:text-4xl">
          Various products at reasonable prices
        </p>
        <div>
          <Link to={'/shop'}>
            <button className="bg-green-500 shadow-lg px-6 py-2 rounded-lg text-white transition">
            Buy now
            </button>
          </Link>
        </div>
        {/* آیکون‌های شبکه‌های اجتماعی با Bootstrap Icons */}
        <div data-aos="zoom-in"  data-aos-duration="2500" className="flex space-x-4 mt-4 text-slate-900">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="hover:text-green-500 text-2xl transition bi bi-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="hover:text-green-500 text-2xl transition bi bi-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="hover:text-green-500 text-2xl transition hover:textgreen-500 bi bi-twitter"></i>
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer">
            <i className="hover:text-green-500 text-2xl transition bi bi-telegram"></i>
          </a>
        </div>
        </div>
      </div>
  
  )
}