import React from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ApartmentGrid from './components/ApartementGrid.jsx'


function App() {
  return <div>
    <Navbar />
    <Banner />
    <ApartmentGrid />
  </div>;  
}

export default App