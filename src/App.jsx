import React from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Header from './components/Header'
import OutfitsPage from './pages/OutfitsPage'
import DetailsPage from './pages/DetailsPage'
import CreateOutfitPage from './pages/CreateOutfitPage'
import EditOutfitPage from './pages/EditOutfitPage'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/outfits' element={<OutfitsPage />} />
        <Route path='/outfits/create' element={<CreateOutfitPage />} />
        <Route path='/outfits/:id/edit' element={<EditOutfitPage />} />
        <Route path='/outfits/:id' element={<DetailsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>

    </>
  )
}

export default App
