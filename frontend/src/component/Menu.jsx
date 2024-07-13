import React from 'react'
import { menu_list } from '../assets/assets'
import { Link } from 'react-router-dom'
// className=' w-48 h-48 rounded-full cursor-pointer border-4'
const Menu = ({category,setCategory}) => {
  return (
    <div className='flex flex-col gap-20 max-w-8xl mx-5  m-7' id='menu'>
      <h1 className='text-5xl text-gray-500 font-bold p-2 '>Our Menu</h1>
     
      <div className='flex flex-row gap-5 overflow-y-scroll no-scrollbar  text-center'>
        {menu_list.map((item,index)=>{
          return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className=' min-w-72 flex flex-col items-center gap-2' key={index}>
              <div><Link to='/dishes'> <img className={category===item.menu_name?"border border-4 border-gray-500 p-2":""}  style={{width:192, height:192, borderRadius:100, cursor:'pointer' }} src={item.menu_image} alt=''/></Link></div>
              <p>{item.menu_name}</p>
            </div>
          )
        })}
        
      
      </div>
      <div className=' my-4 border  w-full bg-gray-500'></div>
    </div>
  )
}

export default Menu
