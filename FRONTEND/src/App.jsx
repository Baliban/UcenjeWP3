import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import { RoutesNames } from './constants'
import Pocetna from './pages/Pocetna'
import Djelatnici from './pages/djelatnici/Djelatnici'
import DjelatniciDodaj from './pages/djelatnici/DjelatniciDodaj'
import DjelatniciPromjena from './pages/djelatnici/DjelatniciPromjeni'
import Raspored from './pages/raspored/Raspored'
import RasporedDodaj from './pages/raspored/rasporedDodaj'
import ErrorModal from './components/ErrorModal';
import useError from "./hooks/useError"
import LoadingSpinner from './components/LoadingSpinner'


function App() {

  const { errors, prikaziErrorModal, sakrijError } = useError();

  return (
    <>
    <ErrorModal show={prikaziErrorModal} errors={errors} onHide={sakrijError} />
      <LoadingSpinner />
      <NavBar />
      <Routes>
        <Route path={RoutesNames.HOME} element={<Pocetna />} />
        <Route path={RoutesNames.DJELATNICI_PREGLED} element={<Djelatnici />} />
        <Route path={RoutesNames.DJELATNICI_NOVI} element={<DjelatniciDodaj />} />
        <Route path={RoutesNames.DJELATNICI_PROMJENI} element={<DjelatniciPromjena />} />
        <Route path={RoutesNames.RASPOREDI_PREGLED} element={<Raspored />} />
        <Route path={RoutesNames.RASPOREDI_NOVI} element={<RasporedDodaj />} />
        
      </Routes>
    </>
  )
}

export default App
