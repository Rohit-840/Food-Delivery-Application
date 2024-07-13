import { useState } from 'react'
import Navbar from './component/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PlaceOrder from './pages/PlaceOrder'
import Cart from './pages/Cart'
import FoodDisplay from './component/FoodDisplay'
import Footer from './component/Footer'
import Login from './component/Login'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'

function App() {
  const [showLogin,setShowLogin]=useState(false);
  const[category,setCategory] = useState("All");

  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className='flex flex-col items-center w-4/4'><div className=' w-5/6 '>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home category={category} setCategory={setCategory}/>}/>
        <Route path='/dishes' element={<FoodDisplay category={category}/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Order' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
      </Routes>
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default App
