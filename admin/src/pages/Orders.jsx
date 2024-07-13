import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {toast} from "react-toastify"
import axios from "axios"
import { assets } from '../assets/assets';

const Orders = ({url}) => {

const [orders,setOrders] = useState([]);
const fetchAllOrders =async()=>{
  const response =await axios.get(url+"/api/order/list");
  if(response.data.success){
    setOrders(response.data.data);
    console.log(response.data.data)
  }
  else{
    toast.error("Error")
  }
}

const statusHandler = async(event,orderId) =>{
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if(response.data.success){
      await fetchAllOrders()
    }
}

useEffect(()=>{
  fetchAllOrders();
},[])

  return (
    <div className=' m-10'>
    <h3 className='text-2xl font-bold mb-3'>Orders Page</h3>
      <div className=''>
      {orders.map((order,index)=>(
        <div key={index} className='grid grid-cols-5 items-start gap-7 border-2 p-5 mx-7 text-sm my-3'>
          <img src={assets.parcel_icon} alt=''/>
          <div>
            <p className=' font-semibold'>{order.items.map((item,index)=>{
                if(index===order.items.length-1){
                  return item.name+ " x " + item.quantity
                }
                else{
                  return item.name+ " x " + item.quantity+", "
                }
            })}</p>
            <p className=' font-semibold mt-5 mb-1'>{order.address.firstName+" "+order.address.lastName}</p>
            <div className=' mb-4'>
            <p>{order.address.street+","}</p>
            <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.pin_code}</p>
            </div>
            <p>{order.address.phone}</p>
          </div>
          <p>Items: {order.items.length}</p>
          <p>Rs.{order.amount}</p>
          <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className=' bg-gray-300 py-2'>
            <option value="Food Processing">Food Processing</option>
            <option value="Out For Delivery">Out For Delivery</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Orders
