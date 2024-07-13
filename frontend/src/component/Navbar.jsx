import React, { useState, useContext } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { StoreContext} from '../context/StoreContext'



const Navbar = ({setShowLogin}) => {
  const [menu,setMenu] = useState("home")
  const {getTotalCartAmount,token,setToken} = useContext(StoreContext)

  const navigate = useNavigate();

  const logout =()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/")
  }

  return <>
  
    <div className='flex justify-between items-center w-full py-3 px-20'>
        <Link to='/'><div className='logo text-4xl font-bold text-purple-800 '> TaStE HeAvEn</div></Link>

        <div>
            <ul className='flex gap-5 font-bold py-3 text-gray-500 cursor-pointer'>
                <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"border-b-2":""}>Home</Link>
                <a href='#menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"border-b-2":""}>Menu</a>
                <Link to='/dishes' onClick={()=>setMenu("Dishes")} className={menu==="Dishes"?"border-b-2":""}>Dishes</Link>
                <a href='#contact-us' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"border-b-2":""}>Contact-us</a>
            </ul>
        </div>

        <div className='flex gap-8 pr-10'>
            <div><img className='w-10' src={assets.search}></img></div>
            <div className=' relative'><Link to='/cart'><img className='w-10' src={assets.cart}></img></Link>
            <div className={getTotalCartAmount()===0? "" : " absolute w-3 h-3 bg-red-500 rounded-md top-0 right-0"}></div></div>
            {!token?<div><button className='border-2 rounded-2xl w-38 p-2 px-5 hover:bg-slate-300 font-bold ' onClick={()=>setShowLogin(true)}>Sign in</button></div>:<div className='nav-profile relative group'><img className=' w-7 mt-1' src={assets.user_icon} alt=''/>
            <div className='hidden absolute group-hover:flex flex-col'>
            <ul className='nav-profile-drop right-0 mt-5 flex flex-col gap-3 bg-gray-100 p-3 rounded-md z-10  w-4/4 px-8'>
              <li onClick={()=>navigate('/myorders')} className='flex items-center gap-2 cursor-pointer mx-3 hover:text-gray-500'><img className=' w-5' src={assets.bag} alt=''/><p>Orders</p></li>
              <hr/>
              <li onClick={logout} className='flex items-center gap-2 cursor-pointer mx-3 hover:text-gray-500'><img className=' w-5' src={assets.logout} alt=''/><p>Logout</p></li>
            </ul></div></div>}
            
        </div>
       
    </div>
    
  </>
}

export default Navbar
