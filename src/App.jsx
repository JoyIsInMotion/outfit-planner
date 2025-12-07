import React from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Header from './components/Header'
import OutfitsPage from './pages/OutfitsPage'

function App() {


  return (
    <>
    <Header />
    <Routes>
    <Route path='/' element={<HomePage />} />
     <Route path='/outfits' element={<OutfitsPage />} />
     <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>

    </>
  )
}

export default App
