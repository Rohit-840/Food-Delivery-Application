import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {

  const [searchParams,setSearchParams] = useSearchParams();
  const success = searchParams.get("success")
  const orderId = searchParams.get("orderId")
  const {url} = useContext(StoreContext)
  const navigate =useNavigate();

  const verifyPayment = async () =>{
    const response = await axios.post(url+"/api/order/verify", {success,orderId});
    if(response.data.success){
        navigate("/myorders");
    }
    else{
      navigate("/")
    }
  }

  useEffect(()=>{
    verifyPayment();
  },[])

  return (
    <div className=' h-96 w-full flex items-center  justify-center  '>
      <div className='   w-24 h-24  border-4 border-t-gray-600 rounded-full animate-spin'>

      </div>
    </div>
  )
}

export default Verify
