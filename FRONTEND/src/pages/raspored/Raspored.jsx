import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {RoutesNames} from '../../constants'
import RasporedService from '../../services/RasporedService';
import Djelatnici from '../djelatnici/djelatnici';


export default function Raspored(){
    const [Raspored, setraspored] = useState();


    async function dohvatiRaspored(){
        await RasporedService.get()
        .then((odg)=>{
            setraspored(odg);
        })
        .catch((e)=>{
            console.log(e);
        });
    }

    useEffect(()=>{
        dohvatiRaspored();
    },[]);

    
    async function obrisiAsync(obrisiraspored){
        const odgovor = await RasporedService._delete(obrisiraspored);
        if (odgovor.greska){
            console.log(odgovor.poruka);
            alert('Pogledaj konzolu');
            return;
        }
        dohvatiRaspored();
    }

    function obrisi(obrisiraspored){
        obrisiAsync(obrisiraspored);
    }

    

    return(
        <>
           <Container>
           <Link to={RoutesNames.RASPORED_NOVI}> Dodaj </Link>
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
                        {Raspored && Raspored.map((Raspored,index)=>(
                            <tr key={index}>
                                <td>{Raspored.ime}</td>
                                <td>{Raspored.prezime}</td>
                                <td>{Raspored.odjel}</td>
                                <td><label for="Raspored.ponedjeljak"></label>
                                <input type="number" id="Raspored.ponedjeljak" name="Raspored.ponedjeljak"/>
                                </td>
                                <td>{Raspored.utorak}<label for="Raspored.utorak"></label>
                                <input type="number" id="Raspored.utorak" name="Raspored.utorak"/></td>
                                <td>{Raspored.srijeda}<form>
  <input type="radio" id="6-14" name="fav_language" value="6-14"/>
  <label for="6-14">6-14</label>
  <input type="radio" id="10-18" name="fav_language" value="10-18"/>
  <label for="css">10-18</label>
  <input type="radio" id="14-22" name="fav_language" value="14-22"/>
  <label for="javascript">14-22</label></form></td>
                                <td>{Raspored.cetvrtak}
                                <input id="Raspored.cetvrtak" type="number" name="Raspored.cetvrtak" list="smjene" />
                                <span class="validity"></span>
                                <datalist id="smjene">
                                <option value="6-14"></option>
                                <option value="10-18"></option>
                                <option value="14-22"></option>
                                <option value="12345678"></option>
                                <option value="12999922"></option>
                                </datalist></td>
                                <td>{Raspored.petak}</td>
                                <td>{Raspored.subota}</td>
                                <td>{Raspored.nedjelja}</td>
                                <td>{Raspored.fondsati}</td>
                                <td>
                                    <Button 
                                    onClick={()=>obrisi(Raspored.ID)}
                                    variant='danger'
                                    >
                                        Obriši
                                    </Button>
                                        {/* kosi jednostruki navodnici `` su AltGR (desni) + 7 */}
                                    <Button 
                                    onClick={()=>{navigate(`/raspored/${ID.obrisiraspored}`)}} 
                                    >
                                        Promjeni
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
            </Table>
           </Container>
        </>
    );
}


