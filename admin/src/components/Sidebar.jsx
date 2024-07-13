import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className=' w-1/5 border border-black border-t-0 min-h-screen'>
      <div className='ml-6 mt-5 flex flex-col gap-8'>

        <NavLink to='/add'  className={({isActive}) => ` ${isActive?"bg-purple-100":""} border flex gap-3 items-center p-3 border-r-0 cursor-pointer`}>
          <img className='rounded-full' src={assets.addIcon} alt=''/>
          <p className=' max-lg:hidden'>Add Items</p>
        </NavLink>

        <NavLink to='/list' className={({isActive}) => ` ${isActive?"bg-purple-100":""} border flex gap-3 items-center p-3 border-r-0 cursor-pointer`}>
          <img className='rounded-full' src={assets.addIcon} alt=''/>
          <p className=' max-lg:hidden'>Lists Items</p>
        </NavLink>

        <NavLink to='/orders' className={({isActive}) => ` ${isActive?"bg-purple-100":""} border flex gap-3 items-center p-3 border-r-0 cursor-pointer`}>
          <img className='rounded-full' src={assets.addIcon} alt=''/>
          <p className=' max-lg:hidden'>Orders</p>
        </NavLink>
        
      </div>
    </div>
  )
}

export default Sidebar
