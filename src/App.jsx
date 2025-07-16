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

function App() {
  
 return (
  <>
    {/* <Navbar/>
    <New/> */}
    <Routes>
      <Route path="/todo" element={<ToDo />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quiz" element={<Quiz />} />
      
    </Routes>
  </>
)
}

export default App;