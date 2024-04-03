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
import Djelatnici from './pages/djelatnici/djelatnici'
import DjelatniciDodaj from './pages/djelatnici/djelatniciDodaj'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path={RoutesNames.HOME} element={<Pocetna />} />
        <Route path={RoutesNames.RASPORED_PREGLED} element={<Raspored />} />
        <Route path={RoutesNames.RASPORED_NOVI} element={<RasporedDodaj />} />
        <Route path={RoutesNames.DJELATNICI_PREGLED} element={<Djelatnici />} />
        <Route path={RoutesNames.DJELATNICI_NOVI} element={<DjelatniciDodaj />} />
        
      </Routes>
    </>
  )
}

export default App
