import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Products from './Products/Products'
import { Routes, Route } from 'react-router-dom'
import SingleProduct from './Products/SingleProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/Products/" element={<Products />} />
      <Route path="SingleProduct/:productid" element={<SingleProduct />} />
    </Routes>
    </>
  )
}

export default App
