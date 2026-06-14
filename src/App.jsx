import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './Home'
import ProductsPage from './ProductsPage'

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </>
  )
}