import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {RoutesNames} from '../../constants'
import DjelatniciService from '../../services/DjelatniciService';



export default function Djelatnici(){
    const [djelatnici, setdjelatnici] = useState();
    const navigate = useNavigate;

    async function dohvatidjelatnike(){
        await DjelatniciService.get()
        .then((odg)=>{
            setdjelatnici(odg);
        })
        .catch((e)=>{
            console.log(e);
        });
    }

    useEffect(()=>{
        dohvatidjelatnike();
    },[]);

    
    async function obrisiAsync(id){
        const odgovor = await DjelatniciService._delete(id);
        if (odgovor.greska){
            console.log(odgovor.poruka);
            alert('Pogledaj konzolu');
            return;
        }
        dohvatidjelatnike();
    }

    function obrisi(ID){
        obrisiAsync(ID);
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
                        {djelatnici && djelatnici.map((djelatnik,index)=>(
                            <tr key={index}>
                                <td>{djelatnik.ime}</td>
                                <td>{djelatnik.prezime}</td>
                                <td>{djelatnik.odjel}</td>
                                                                <td>
                                    <Button 
                                    onClick={()=>obrisi(djelatnik.id)}
                                    variant='danger'
                                    >
                                        Obriši
                                    </Button>
                                        {/* kosi jednostruki navodnici `` su AltGR (desni) + 7 */}
                                    <Button 
                                    onClick={()=>{navigate(`/djelatnici/${djelatnik.id}`)}} 
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