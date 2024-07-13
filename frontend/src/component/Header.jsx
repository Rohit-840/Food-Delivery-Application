import React from 'react'

const Header = () => {
  return <>
  
      <div className= " bg-[url('.././public/header_image.jpg')] bg-no-repeat m-7 rounded-xl" >
      <div className='h-96 relative'>
        <div className='absolute flex-col flex max-w-2xl bottom-0 right-0 text-white gap-4 p-2'>
            <h2 className='text-6xl font-bold p-1'>Order your favourite food here</h2>
            <div><p>Craving your favorite dishes? Get them delivered hot and fresh to your doorstep with our fast and reliable food delivery app. Order now and savor delicious meals in the comfort of your home with just a few clicks!</p></div>
            <div><button className=' w-40 p-2 text-gray-500 font-bold bg-white rounded-2xl'>View Menu</button></div>
        </div>
      </div>
    
      </div>
      </>
}

export default Header
