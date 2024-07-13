import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
const List = ({url}) => {
  
  const [list,setList]=useState([]);

  const fetchList = async()=>{
    const response = await axios.get(`${url}/api/food/list`);
    if(response.data.success){
        setList(response.data.data);
    }
    else{
      toast.error("Error");
    }
  }

    const removeFood = async(foodId) =>{
      const response =await axios.post(`${url}/api/food/remove`,{id:foodId});
      await fetchList();
      if(response.data.success){
        toast.success(response.data.message)
      }
      else{
        toast.error("Error")
      }
    }

  useEffect(()=>{
    fetchList();
  },[])
  return (
    <div className=' w-screen'>
    <p>All Foods List</p>
    <div className='container mx-auto p-14'>
      <div className=' grid grid-cols-5 gap-3'>
          <b className='bg-gray-200 p-2 font-bold'>Image</b>
          <b className='bg-gray-200 p-2 font-bold'>Name</b>
          <b className='bg-gray-200 p-2 font-bold'>Category</b>
          <b className='bg-gray-200 p-2 font-bold'>Price</b>
          <b className='bg-gray-200 p-2 font-bold'>Action</b>
      </div>
      <hr className='border-3 my-1'/>
      {list.map((item,index)=>{
            return(
              <div>
              <div key={index} className='grid grid-cols-5 gap-4 my-5'>
              <img className='w-32 bg-gray-100 p-2' src={`${url}/images/` +item.image} alt=''/>
              <p className='bg-gray-100 p-2'>{item.name}</p>
              <p className='bg-gray-100 p-2'>{item.category}</p>
              <p className='bg-gray-100 p-2'>Rs.{item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='bg-gray-100 p-2 cursor-pointer'>X</p>
              </div>
              <hr/>
              </div>
            )
      })}
    </div>
      
    </div>
  )
}

export default List
