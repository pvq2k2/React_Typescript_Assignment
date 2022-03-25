import { useState } from 'react'
import './App.css'
import { Routes, Route, NavLink } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </div>
  )
}

export default App
