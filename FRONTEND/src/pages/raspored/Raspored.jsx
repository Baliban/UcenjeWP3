import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {RoutesNames} from '../../constants'
import RasporedService from '../../services/RasporedService';


export default function Raspored(){
    const [raspored, setraspored] = useState();


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

    function formatirajVerificiran(v){
        if(v==null){
            return 'nije definirano';
        }

        if(v){
            return 'DA';
        }

        return 'NE';
    }

    async function obrisiAsync(sifra){
        const odgovor = await RasporedService._delete(ID);
        if (odgovor.greska){
            console.log(odgovor.poruka);
            alert('Pogledaj konzolu');
            return;
        }
        dohvatiRaspored();
    }

    function obrisi(sifra){
        obrisiAsync(sifra);
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
                        {raspored && raspored.map((Raspored,index)=>(
                            <tr key={index}>
                                <td>{Raspored.Ime}</td>
                                <td>{Raspored.Prezime}</td>
                                <td>{Raspored.Odjel}</td>
                                <td>{Raspored.Ponedjeljak}</td>
                                <td>{Raspored.Utorak}</td>
                                <td>{Raspored.Srijeda}</td>
                                <td>{Raspored.Cetvrtak}</td>
                                <td>{Raspored.Petak}</td>
                                <td>{Raspored.Subota}</td>
                                <td>{Raspored.Nedjelja}</td>
                                <td>{Raspored.fondsati}</td>
                                
                            </tr>
                        ))}
                    </tbody>
            </Table>
           </Container>
        </>
    );
}