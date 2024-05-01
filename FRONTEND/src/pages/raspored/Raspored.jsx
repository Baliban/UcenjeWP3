import { useEffect, useState } from 'react';
//import Container from 'react-bootstrap/Container';
import { Button, Container, Table } from "react-bootstrap";
import { IoIosAdd } from "react-icons/io";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {RoutesNames} from '../../constants'
import Service from '../../services/RasporedService';
//import Djelatnici from './pages/djelatnici/Djelatnici'


export default function Raspored(){
    const [rasporedi, setRaspored] = useState([]);
    const [djelatnici, setDjelatnici] = useState([]);

    async function dohvatiRaspored() {
        const odgovor = await Service.get("Raspored");
        if (!odgovor.ok) {
          alert(Service.dohvatiPorukeAlert(odgovor.podaci));
          return;
        }
        setRaspored(odgovor.podaci);
      }
   
     
         
        async function dohvatiDjelatnike() {
          const odgovor = await Service.get("Djelatnici");
          if (!odgovor.ok) {
            alert(Service.dohvatiPorukeAlert(odgovor.podaci));
            return;
          }
          setDjelatnici(odgovor.podaci);
        }
        useEffect(()=>{
            dohvatiRaspored();
    
        },[]);

  
   // useEffect(() => {
  //          dohvatiDjelatnike();
  //  },[]);

    
    
    

    return(
        <>
           <Container>
           <Link to={RoutesNames.RASPOREDI_NOVI}> Dodaj </Link>
            <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Ime</th>
                            <th>Prezime</th>
                            <th>Odjel</th>
                            <th>Ponedjeljak</th>
                            <th>Utorak</th>
                            <th>Srijeda</th>
                            <th>Cetvrtak</th>
                            <th>Petak</th>
                            <th>Subota</th>
                            <th>Nedjelja</th>
                            <th>fond sati</th>
                        </tr>
                    </thead>
                    <tbody>
                        {djelatnici.map && rasporedi.map ((entitet,djelatnici, index)=>(
                            <tr key={index}>
                                <td>{djelatnici.ime}</td>
                                <td>{djelatnici.prezime}</td>
                                <td>{djelatnici.odjel}</td>
                                <td><label for="entitet.ponedjeljak"></label>
                                <input type="number" id="entitet.ponedjeljak" name="entitet.ponedjeljak"/>
                                </td>
                                <td>{entitet.utorak}<label for="entitet.utorak"></label>
                                <input type="number" id="entitet.utorak" name="entitet.utorak"/></td>
                                <td>{entitet.srijeda}<form>
  <input type="radio" id="6-14" name="fav_language" value="6-14"/>
  <label for="6-14">6-14</label>
  <input type="radio" id="10-18" name="fav_language" value="10-18"/>
  <label for="css">10-18</label>
  <input type="radio" id="14-22" name="fav_language" value="14-22"/>
  <label for="javascript">14-22</label></form></td>
                                <td>{entitet.cetvrtak}
                                <input id="entitet.cetvrtak" type="number" name="entitet.cetvrtak" list="smjene" />
                                <span class="validity"></span>
                                <datalist id="smjene">
                                <option value="6-14"></option>
                                <option value="10-18"></option>
                                <option value="14-22"></option>
                                <option value="12345678"></option>
                                <option value="12999922"></option>
                                </datalist></td>
                                <td>{entitet.petak}</td>
                                <td>{entitet.subota}</td>
                                <td>{entitet.nedjelja}</td>
                                <td>{entitet.fondsati}</td>
                                
                            </tr>
                        ))}
                    </tbody>
            </Table>
           </Container>
        </>
    );
}


