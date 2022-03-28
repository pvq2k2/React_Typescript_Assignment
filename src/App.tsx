import { useState } from 'react'
// import './App.css'
import { Routes, Route, NavLink } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import AdminLayout from './pages/layouts/AdminLayout';
import ProductManager from './pages/ProductManager';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/admin" element={<AdminLayout/>}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path='products'>
            <Route index element={<ProductManager/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
