import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './ToDo'
import Calculator from './Calculator'
import MovieCard from './components/MovieCard'
import { MovieProvider } from './contexts/MovieContext'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Favorite from './pages/Favorites'

function App() {
  
  return (
    <MovieProvider>
      <NavBar />  {/* Add this line! */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </MovieProvider>
  )
}

export default App;