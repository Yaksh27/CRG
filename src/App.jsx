import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './ToDo'
import Calculator from './Calculator'
import { Routes, Route } from 'react-router-dom'
import Quiz from './Quiz'
import Home from './Home'
import New from './New'
import Navbar from './Navbar'
import Create from './Create'
import BlogDetails from './BlogDetails'
import CountrySearch from './CountrySearch'
import Animal from './Animal'
import Recipe from './Recipe'

function App() {
  
 return (
  <>
    <Navbar/>
    
    <Routes>
      <Route path="/todo" element={<ToDo />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/New" element={<New />} />
      <Route path="/create" element={<Create />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
      <Route path="/Country" element={<CountrySearch/>} />
      <Route path="/Animal" element={<Animal/>} />
      <Route path="/" element={<Recipe/>} />

      
    </Routes>
  </>
)
}

export default App;