import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import SideCart from './components/SideCart/SideCart';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <div className='header m-auto mb-3'>
        <Header></Header>
      </div>
      <div className="main row">
        <div className="home-container col-md-8">
          <Home></Home>
        </div>
        <div className="sideCart col-md-4 card">
          <SideCart></SideCart>
        </div>
      </div>
      <Contact></Contact>
    </div>
  )
}

export default App
