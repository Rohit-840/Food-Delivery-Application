import React from 'react'
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import List from './pages/List'
import Orders from './pages/Orders'
import Add from './pages/Add'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "http://localhost:4000"
  return (
    <div>
    <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className='flex'>
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add url={url}/>}/>
          <Route path='/list' element={<List url={url}/>}/>
          <Route path='/orders' element={<Orders url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
