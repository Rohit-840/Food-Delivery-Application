import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {

 
  const {cartItems,addToCart,removeFromCart,url} =useContext(StoreContext)
  return <>
    <div className='border-2 rounded-2xl w-80 flex flex-col'>
      <div className=' relative'>
        <img className=' rounded-t-2xl' src={url+"/images/"+image} alt=""></img>
        {
          !cartItems[id]
          ?<img className='absolute right-0 bottom-0' onClick={()=>addToCart(id)} src={assets.addIconWhite} alt=''></img>
          :<div className='absolute right-2 bottom-2 flex gap-2 justify-center items-center bg-white rounded-3xl p-1'>
            <img  onClick={()=>removeFromCart(id)} src={assets.removeIcon} alt=""/>
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.addIconGreen}/>
          </div>
        }
      </div>
      <div className='flex justify-around items-center'>
        <p className='font-semibold text-xl p-3'>{name}</p>
        <img className='h-4' src={assets.starRating}></img>
      </div>
      <div className='text-xs text-gray-400 px-4'>{description}</div>
      <div className='px-4 p-2 text-xl text-gray-700 font-bold'>Price: Rs.{price}</div>
    </div>
    </>
}

export default FoodItem
