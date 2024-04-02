import { useState } from 'react'
import reactLogo from './assets/react.svg'
import mojLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import { RoutesNames } from './constants'
import Pocetna from './pages/Pocetna'
import Raspored from './pages/raspored/Raspored'
import RasporedDodaj from './pages/raspored/rasporedDodaj'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path={RoutesNames.HOME} element={<Pocetna />} />
        <Route path={RoutesNames.RASPORED_PREGLED} element={<Raspored />} />
        <Route path={RoutesNames.RASPORED_NOVI} element={<RasporedDodaj />} />
        
      </Routes>
    </>
  )
}

export default App
