import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "react-toastify/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import Layout from './pages/Layout'
const App = () => {
  return (
    <div>


      <BrowserRouter>
        <ToastContainer />
        <Routes>


          <Route path='/' element={<Layout />} />

        </Routes>
      </BrowserRouter>



    </div>
  )
}

export default App