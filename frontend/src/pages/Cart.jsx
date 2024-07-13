import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount,url } = useContext(StoreContext);

  const navigate =useNavigate();
  return (
    <div className='  mt-24'>
      <div >
        <div className=' grid grid-cols-custom gap-4 text-grey'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className=' grid grid-cols-custom gap-4 text-black my-2'>
                  <img className=' w-14' src={url+"/images/"+item.image} alt='' />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className=' cursor-pointer'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>

      <div className='  flex justify-between gap-40 mt-10 max-md:flex-col-reverse max-md:gap-10 '>
      
        <div className=' flex-1 flex-col gap-5'>
          <h2 className='text-2xl font-semibold py-3'>Cart Totals</h2>
          <div>
            <div className='flex justify-between my-2 '>
              <p>Subtotal</p>
              <p>Rs.{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className='flex justify-between my-2'>
              <p>Delivery Fee</p>
              <p>Rs.{getTotalCartAmount()===0?0:20}</p>
            </div>
            <hr/>
            <div className='flex justify-between my-2'>
              <b>Total</b>
              <b>Rs.{getTotalCartAmount()===0?0:getTotalCartAmount()+20}</b>
            </div>
          </div>
            <button className='border bg-blue-600 p-2 text-white rounded-3xl mt-3 px-3 mb-7' onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className='flex-1  '>
          <div>
            <p className=' text-gray-600'>If you have promo code, Enter it here</p>
            <div className='flex  '>
              <input className=' bg-gray-200 text-white p-2 border-none  ' type='text' placeholder='promo code'/>
              <button className='bg-black p-2 text-white px-9'>Submit</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart
