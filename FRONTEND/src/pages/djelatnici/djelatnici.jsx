import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {RoutesNames} from '../../constants'
import DjelatniciService from '../../services/DjelatniciService';
import Raspored from '../raspored/Raspored';


export default function Djelatnici(){
    const [djelatnici, setdjelatnici] = useState();


    async function dohvatidjelatnici(){
        await DjelatniciService.get()
        .then((odg)=>{
            setdjelatnici(odg);
        })
        .catch((e)=>{
            console.log(e);
        });
    }

    useEffect(()=>{
        dohvatidjelatnici();
    },[]);

    
    async function obrisiAsync(Iddjelatnika){
        const odgovor = await DjelatniciService._delete(djelatnici);
        if (odgovor.greska){
            console.log(odgovor.poruka);
            alert('Pogledaj konzolu');
            return;
        }
        dohvatidjelatnici();
    }

    function obrisi(Iddjelatnika){
        obrisiAsync(Iddjelatnika);
    }

   

    return(
        <>
           <Container>
           <Link to={RoutesNames.DJELATNICI_NOVI}> Dodaj novog djelatnika</Link>
            <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Ime</th>
                            <th>Prezime</th>
                            <th>Odjel</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {djelatnici && djelatnici.map((Djelatnici,index)=>(
                            <tr key={index}>
                                <td>{Djelatnici.ime}</td>
                                <td>{Djelatnici.prezime}</td>
                                <td>{Djelatnici.odjel}</td>
                                                                <td>
                                    <Button 
                                    onClick={()=>obrisi(Djelatnici.ID)}
                                    variant='danger'
                                    >
                                        Obriši
                                    </Button>
                                        {/* kosi jednostruki navodnici `` su AltGR (desni) + 7 */}
                                    <Button 
                                    onClick={()=>{navigate(`/djelatnici/${Djelatnici.ID}`)}} 
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