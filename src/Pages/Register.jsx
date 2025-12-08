import React, { useState } from 'react'
import { supabase } from './../utils/SupabaseClient';
import { Link, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';


export default function Register() {
  const [email,setEmail] = useState("")
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [password,setPassword] = useState("")
  const [phone,setPhone] = useState("")
  const[showPass,setShowPass] = useState(false)
  const[loading,setIsLoading] = useState(false)
  
  const navigate = useNavigate()
async function Registered(e){
  e.preventDefault()
  setIsLoading(true)
  let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password
})
try{
  if(error){
  alert("خطا در ثبت نام" , error.message)
}else{
  const userId = data.user?.id
  const { error:InsertError } = await supabase
    .from('profiles')
    .insert([
      { 
        id:userId,
        first_name:firstName,
        last_name:lastName,
        phone:phone,
        role:"user"
      },
    ])
    .select()
  
  if(InsertError){
    alert("خطا در ذخیره پروفایل " + InsertError.message)
  }
  else{
    alert("ثبت نام موفق بود 💌")
    navigate("/")
  }
  setIsLoading(false)
}
}finally{
  setIsLoading(false)
}
}
function showHandler(){
  setShowPass(s => !s)
}
if(loading){return(      
    <div className='flex justify-center items-center mx-10 h-[75vh] font-light 2xl:text-2xl'>

<ClipLoader
        loading={loading}
        
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
        </div>
        )}
  return (
    <div className='flex justify-center items-center mx-10 font-light 2xl:text-2xl'>

    <main data-aos="fade-right" data-aos-duration="2000" className='justify-center grid bg-white shadow-2xl shadow-slate-500 px-2 py-4 md:rounded-s-2xl w-[80%] sm:w-full md:w-1/3 md:h-[64vh] lg:h-[64vh] translate-y-1/3 md:translate-y-1/10 xl:translate-y-1/3'>
      <form onSubmit={Registered} className='flex flex-col items-center gap-2 md:gap-4 mx-4 text-sm 2xl:text-lg'>
      <h1 className='border-b-[#cdcccc] border-b-2 font-light text-[#949393] text-2xl text-center'>SignUp</h1>
      <div className='relative'>
        
        <i className="top-1 left-1 absolute text-slate-500 bi bi-person"></i>
        <input onChange={(e) => setFirstName(e.target.value)} className='bg-slate-100 shadow-2xl shadow-slate-200 px-1 2xl:px-6 py-0.5 pl-4 rounded-2xl focus:outline-none placeholder:text-xs' type='text' name='name'   placeholder='Your Name '></input>
      </div>
      <div className='relative'>
        <i className="top-1 left-1 absolute text-slate-500 bi bi-person"></i>

        <input onChange={(e) => setLastName(e.target.value)} className='bg-slate-100 shadow-2xl shadow-slate-200 px-1 2xl:px-6 py-0.5 pl-4 rounded-2xl focus:outline-none placeholder:text-xs'  type='text' name='family'  placeholder='Your Family'></input>
      </div>
      <div className='relative'>
        <i className="top-1 left-1 absolute text-slate-500 bi bi-envelope"></i>
        <input onChange={(e) => setEmail(e.target.value)} className='bg-slate-100 shadow-2xl shadow-slate-200 px-1 2xl:px-6 py-0.5 pl-5 rounded-2xl focus:outline-none placeholder:text-xs 1'   type='email' name='email'  placeholder='Example@gmail.com'></input>
      </div>
      <div className='relative'>
        <i class="top-1 left-1 absolute text-slate-500 bi bi-telephone"></i>
        <input onChange={(e) => setPhone(e.target.value)}  className='bg-slate-100 shadow-2xl shadow-slate-200 px-1 2xl:px-6 py-0.5 pl-4 rounded-2xl focus:outline-none placeholder:text-xs'  type="text"  name='Phone' placeholder='+989921499833'></input>
      </div>
      <div className='relative'>

        {/* eyes */}
        <i onClick={showHandler} className={`top-1 right-2 absolute text-slate-500 ${showPass ? " bi bi-eye-slash " : " bi bi-eye "} `}></i>
        <input onChange={(e) => setPassword(e.target.value)} className='bg-slate-100 shadow-2xl shadow-slate-200 px-1 2xl:px-6 py-0.5 pl-4 rounded-2xl focus:outline-none placeholder:text-xs 1'   type={`${showPass ? "text" :"password"}`} name='password'  placeholder='Password'></input>
      </div>
                <div className="flex items-center gap-2 text-slate-600 text-xs">
            <input type="checkbox"/>
            <span>Accepted Rules And Terms...</span>
          </div>


        <button type='submit' className='col-span-2 bg-green-500 mt-2 px-8 py-1 rounded-xl font-bold text-white'>Create Account</button>
        <div className="flex items-center gap-2 text-slate-600 text-xs">
          <span>Already have an account?</span><Link className='font-semibold text-slate-500' to='/login'>Sign in</Link>
        </div>
      </form>
    </main>


    <section data-aos="fade-left" data-aos-duration="2000" className='hidden lg:flex flex-col justify-center items-center bg-[#cdcccc] shadow-2xl shadow-slate-50 py-4 rounded-e-2xl md:w-1/4 h-[64vh] font-semibold text-slate-800 text-center translate-y-1/3 md:translate-y-1/10 xl:translate-y-1/3'>
    <h4>Hello My Friend🖐️</h4>
    <div className='border-b-2 border-b-white'>Just One Minute To Go </div>
    
    </section>
    </div>
  )
}
