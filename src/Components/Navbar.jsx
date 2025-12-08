import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { supabase } from '../utils/SupabaseClient';
import '@tailwindplus/elements';
import { CartContext } from '../utils/CartContext';
export default function Navbar() {
  const [profile, setProfile] = useState(null);
  const{cartItems} = useContext(CartContext)
  // console.log(cartItem.quantity);
  const totalItems = cartItems.reduce((sum,item) => sum + item.quantity,0)
  console.log(totalItems);
  
  async function loadProfile(userId) {
    
    const { data, error } = await supabase
    .from("profiles")
    .select("first_name, last_name")
    .eq("id", userId)
    .single();
    
    if (!error) {
      setProfile(data);
    }
  }

  useEffect(() => {
    // گرفتن session اولیه
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        loadProfile(session.user.id);
      }
    });

    // گوش دادن به تغییرات لاگین/لاگ‌اوت
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          loadProfile(session.user.id);
        } else {
          setProfile(null); // اگر لاگ‌اوت شد
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);
  async function LogOut(){
     await supabase.auth.signOut()
  }
  return (
    <nav className='flex justify-end md:justify-between items-center'>
      <NavbarMobile totalItems={totalItems} profile={profile} LogOut={LogOut} />
        <div className='hidden md:flex md:items-center md:gap-5 text-xl desktop'>
          <NavLink className="flex justify-center items-center" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
</svg><span>Home</span></NavLink>     
          <el-dropdown class="inline-block">
         <button class="inline-flex justify-center items-center rounded-md w-full text-gray-900">
         Products
        <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-5 text-gray-900">
        <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
        </svg>
       </button>

        <el-menu anchor="bottom end" popover className="absolute bg-[#F0EFEF] data-closed:opacity-0 shadow-xl/30 rounded-md outline-1 outline-white/10 -outline-offset-1 w-56 data-closed:scale-95 origin-top-right transition transition-discrete data-enter:duration-100 data-leave:duration-75 data-leave:ease-in data-enter:ease-out [--anchor-gap:--spacing(2)] data-closed:transform">
        <div class="py-1">
       <Link to={"/shop"} class="block focus:bg-white/5 px-4 py-2 focus:outline-hidden text-gray-900 focus:text-gray-950 text-sm">All Products</Link>

       <Link to={"/shop/men"} class="block focus:bg-white/5 px-4 py-2 focus:outline-hidden text-gray-900 focus:text-gray-950 text-sm">Man</Link>
       <Link to={"/shop/women"} class="block focus:bg-white/5 px-4 py-2 focus:outline-hidden text-gray-900 focus:text-gray-950 text-sm">Woman</Link>
       <Link to={"/shop/electronic"} class="block focus:bg-white/5 px-4 py-2 focus:outline-hidden text-gray-900 focus:text-gray-950 text-sm">Electronic</Link>

      </div>
      </el-menu>
      </el-dropdown>

      <NavLink className="relative flex justify-center items-center" to="/cart">
      <span className='-top-1 left-0 absolute flex justify-center items-center px-1 rounded-full text-xs'>{totalItems}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg><span>Cart</span></NavLink>

      {profile ? (
        <div className='flex justify-center items-center gap-3'>
        <button onClick={LogOut}>Logout</button>
        <NavLink className="bg-slate-300 px-1 py-0.5 rounded-2xl" to="/">{profile.first_name}</NavLink>
        </div>
      ) : (
        <>
        <NavLink to="/register">Signup</NavLink>
        <NavLink to="/login">Login</NavLink>
        </>

      )}
        </div>
    </nav>
  );
}

function NavbarMobile({ profile, LogOut,totalItems }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div   className="md:hidden z-50 relative">
      {/* دکمه باز/بستن */}
      <button onClick={() => setIsOpen(!isOpen)} className="p-2">
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2.5 2.5l11 11m0-11l-11 11" stroke="currentColor" strokeWidth="2" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        )}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-[0.8px]"
          onClick={() => setIsOpen(false)} // 👈 کلیک روی بک‌دراپ منو رو می‌بنده
        ></div>
      )}

      {/* منو */}
      <div
        className={`fixed top-0 right-0 gap-3 h-full flex flex-col  bg-[#F0EFEF] shadow-lg p-5 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2.5 2.5l11 11m0-11l-11 11" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        <NavLink onClick={() => setIsOpen(false)} className="flex" to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
</svg><span>Home</span></NavLink>
                  <el-dropdown class="inline-block">
         <button class="inline-flex justify-center items-center rounded-md w-full text-gray-900">
         Products
        <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-5 text-gray-900">
        <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
        </svg>
       </button>

        <el-menu anchor="bottom end" popover className="absolute bg-[#F0EFEF] data-closed:opacity-0 shadow-xl/30 rounded-md outline-1 outline-white/10 -outline-offset-1 w-56 data-closed:scale-95 origin-top-right transition transition-discrete data-enter:duration-100 data-leave:duration-75 data-leave:ease-in data-enter:ease-out [--anchor-gap:--spacing(2)] data-closed:transform">
        <div class="py-1">
       <Link onClick={() => setIsOpen(false)} to={"/shop"} class="block focus:bg-white/5 px-4 py-2 focus:outline-hidden text-gray-900 focus:text-gray-950 text-sm">All Products</Link>

       <Link onClick={() => setIsOpen(false)} to={"/shop/men"} class="block focus:bg-white/5 px-4 py-2 focus:outline-hidden text-gray-900 focus:text-gray-950 text-sm">Man</Link>
       <Link onClick={() => setIsOpen(false)} to={"/shop/women"} class="block focus:bg-white/5 px-4 py-2 focus:outline-hidden text-gray-900 focus:text-gray-950 text-sm">Woman</Link>
       <Link onClick={() => setIsOpen(false)} to={"/shop/electronic"} class="block focus:bg-white/5 px-4 py-2 focus:outline-hidden text-gray-900 focus:text-gray-950 text-sm">Electronic</Link>

      </div>
      </el-menu>
      </el-dropdown>
      <NavLink onClick={() => setIsOpen(false)} className="relative flex" to="/cart">
      <span className='-top-3 md:-top-1 left-0.5 md:left-0 absolute flex justify-center items-center px-1 rounded-full text-xs'>{totalItems}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">

  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg><span>Cart</span></NavLink>

        {profile ? (
          <div className="flex flex-col gap-3 mt-4">
            <button onClick={LogOut}>Logout</button>
            <NavLink onClick={() => setIsOpen(false)} className="bg-slate-300 px-2 py-1 rounded-2xl" to="/">
              {profile.first_name}
            </NavLink>
          </div>
        ) : (
          <div className="flex flex-col gap-3 mt-4">
            <NavLink onClick={() => setIsOpen(false)} to="/register">Signup</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/login">Login</NavLink>
          </div>
        )}
      </div>
    </div>
  );
}