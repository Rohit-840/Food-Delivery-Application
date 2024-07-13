import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=' flex w-full bg-gray-950 text-white justify-center gap-36 p-8'>
    <div>
      <div className='logo text-4xl font-bold text-purple-800 pb-8'>TaStE HeAvEn</div>
      <div className=' w-96'><p>Craving your favorite dishes? Get them delivered hot and fresh to your doorstep with our fast and reliable food delivery app. Order now and savor delicious meals in the comfort of your home with just a few clicks!</p></div>
      <div className='flex gap-4 p-3'>
        <div><img src={assets.Facebook}></img></div>
        <div><img src={assets.twitter}></img></div>
        <div><img src={assets.linkedin}></img></div>
      </div>
      </div>

    <div className='flex flex-col'>
    <div className='text-2xl font-bold pb-8'>COMPANY</div>
    <div className='flex flex-col'><a href=''>Home</a>
    <a href=''>About us</a>
    <a href=''>Delivery</a>
    <a href=''>Privacy policy</a></div>
    </div>

    <div className='flex flex-col' id='contact-us'>
        <div className='text-2xl font-bold pb-8 '>GET IN TOUCH</div>
        <div>+91-7359756845</div>
        <div>food@delivery.com</div>
    </div>



    </div>
  )
}

export default Footer
