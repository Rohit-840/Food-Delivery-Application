import React, { useState } from 'react'
import Header from '../component/Header'
import Menu from '../component/Menu'
import FoodDisplay from '../component/FoodDisplay';

const Home = ({category, setCategory}) => {

  
  return (
    <div >
      <Header/>
      <Menu category={category} setCategory={setCategory}/>
      
    </div>
  )
}

export default Home
