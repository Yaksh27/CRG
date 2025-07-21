import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './v1/ToDo'
import Calculator from './v1/Calculator'
import { Routes, Route } from 'react-router-dom'
import Quiz from './v1/Quiz'
import Home from './v1/Home'
import New from './v1/New'
import Navbar from './v1/Navbar'
import Create from './v1/Create'
import BlogDetails from './v1/BlogDetails'
import CountrySearch from './v1/CountrySearch'
import Animal from './v1/Animal'
import Recipe from './v1/Recipe'
import ProductCard from './eCommerce/components/ProductCard'
import ProductList from './eCommerce/components/ProductList'
import App2 from './eCommerce/App2'
import CartItem from './eCommerce/components/CartItem'
import { CartProvider } from './eCommerce/context/CartContext'
import Cart from './eCommerce/components/Cart'

function App() {
  
 return (
       <CartProvider> 
  <>
  

    <Routes>
      <Route path="/todo" element={<ToDo />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/New" element={<New />} />
      <Route path="/create" element={<Create />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
      <Route path="/Country" element={<CountrySearch/>} />
      <Route path="/Animal" element={<Animal/>} />
      <Route path="/Favorites" element={<Recipe/>} />
      <Route path="/Cart" element={<Cart/>} />
      <Route path="/" element={<App2/>} />
        
      
    </Routes>
  </>
  </CartProvider>
)
}

export default App;