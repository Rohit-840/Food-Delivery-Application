import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const {getTotalCartAmount, token, food_list,cartItems,url} =useContext(StoreContext)

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    pin_code:"",
    country:"",
    phone:""

  })

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async(event)=>{
    event.preventDefault();
    let orderItems=[];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
      
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+20,
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else{
      alert("Error")
    }
  }

  const navigate = useNavigate();

  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }
    else if(getTotalCartAmount()===0){
      navigate('/cart')
    }
  },[token])

  return <>
    <div className='pt-20 '>
    <form onSubmit={placeOrder}>
    <div className=' flex justify-between items-center mb-14'>
      <div className='flex flex-col gap-3'>
        <p className=' mb-16 text-4xl font-bold'>Delivery Information</p>
        <div className='flex gap-3'>
        <input required name='firstName' onChange={onChangeHandler} value={data.firstName} className='border-2 border-black p-1 rounded-lg' type='text' placeholder='First name'/>
        <input required name='lastName' onChange={onChangeHandler} value={data.lastName} className='border-2 border-black p-1 rounded-lg' type='text' placeholder='Last name'/>
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} className='border-2 border-black p-1 rounded-lg' type='email' placeholder='Email address'/>
        <input required name='street' onChange={onChangeHandler} value={data.street} className='border-2 border-black p-1 rounded-lg' type='text' placeholder='Street'/>
        <div className='flex gap-3'>
          <input required name='city' onChange={onChangeHandler} value={data.city} className='border-2 border-black p-1 rounded-lg' type='text' placeholder='City'/>
          <input required name='state' onChange={onChangeHandler} value={data.state} className='border-2 border-black p-1 rounded-lg' type='text' placeholder='State'/>
        </div>
        <div className='flex gap-3'>
          <input required name='pin_code' onChange={onChangeHandler} value={data.pin_code} className='border-2 border-black p-1 rounded-lg' type='text' placeholder='Pin code'/>
          <input required name='country' onChange={onChangeHandler} value={data.country}  className='border-2 border-black p-1 rounded-lg' type='text' placeholder='Country'/>
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} className='border-2 border-black p-1 rounded-lg' text='number' placeholder='Phone'/>
      </div>



      <div className=' flex flex-col gap-5 w-96' >
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
            <button type='submit' className='border bg-blue-600 p-2 text-white rounded-3xl mt-3 px-3 mb-7' >PROCEED TO CHECKOUT</button>
        </div>
    </div>
    </form>
    </div>
    </>
}

export default PlaceOrder
