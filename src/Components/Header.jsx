import Navbar from "./Navbar";


export default function Header() {

  return(


    <header className="items-center grid grid-cols-2 shadow-xl/30 px-5 py-2 lg:text-2xl">
      <div className="flex justify-center items-center gap-5">
        <img className="w-8" src="/Header/Group53.png" alt="icon" />
        <h1 className="font-[Lalezar]">Online Shop</h1>
      </div>
      <Navbar/>
    </header>

  )
}
