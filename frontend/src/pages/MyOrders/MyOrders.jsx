import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {

    const {url,token} = useContext(StoreContext);
    const [data,setData] =useState([]);

    const fetchOrders =async()=>{
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        setData(response.data.data);
        
    }

    useEffect(()=>{
        if (token) {
            fetchOrders();
        }
},[token])

  return (
    <div className=' mx-12 my-8'>
      <h2 className=' text-3xl font-bold'>My Orders</h2>
      <div className='flex flex-col gap-5 mt-7'>
        {data.map((order,index)=>{
            return(
                <div key={index} className='grid grid-cols-6 items-center gap-7 text-sm px-2 py-5 border-4'>
                <img className=' w-12' src={assets.parcel_icon}></img>
                <p>{order.items.map((item,index)=>{
                    if(index === order.items.length-1){
                        return item.name+" x "+item.quantity
                    }
                    else{
                        return item.name+" x "+item.quantity+", "
                    }
                })}</p>
                <p>Rs.{order.amount}.00</p>
                <p>Items: {order.items.length}</p>
                <p className=' text-gray-600'><span >&#x25cf;</span>{order.status}</p>
                <button onClick={fetchOrders} className=' bg-gray-200 py-3'>Track Order</button>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default MyOrders
