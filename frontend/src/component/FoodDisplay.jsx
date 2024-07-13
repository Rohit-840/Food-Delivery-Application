import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'


const FoodDisplay = ({category}) => {

   const {food_list} = useContext(StoreContext)
    
  return <>
    <div className=''>
      <div className='text-5xl text-gray-500 font-bold p-2 mx-7 ' id='dishes'>Top dishes</div>
      <div className='grid grid-cols-3 gap-4 m-7'>
        {food_list.map((item,index)=>{
            if(category==="All" || category===item.category){

            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }

        })}
      </div>
    </div>
    </>
}

export default FoodDisplay
