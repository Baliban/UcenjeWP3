import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import SmjerService from '../../services/SmjerService';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {RoutesNames} from '../../constants'


export default function Smjerovi(){
    const [smjerovi, setSmjerovi] = useState();


    async function dohvatiSmjerove(){
        await SmjerService.get()
        .then((odg)=>{
            setSmjerovi(odg);
        })
        .catch((e)=>{
            console.log(e);
        });
    }

    useEffect(()=>{
        dohvatiSmjerove();
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
        const odgovor = await SmjerService._delete(sifra);
        if (odgovor.greska){
            console.log(odgovor.poruka);
            alert('Pogledaj konzolu');
            return;
        }
        dohvatiSmjerove();
    }

    function obrisi(sifra){
        obrisiAsync(sifra);
    }

    return(
        <>
           <Container>
            <Link to={RoutesNames.SMJER_NOVI}> Dodaj </Link>
            <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Naziv</th>
                            <th>Trajanje</th>
                            <th>Cijena</th>
                            <th>Verificiran</th>
                            <th>Akcija</th>
                        </tr>
                    </thead>
                    <tbody>
                        {smjerovi && smjerovi.map((smjer,index)=>(
                            <tr key={index}>
                                <td>{smjer.naziv}</td>
                                <td>{smjer.trajanje}</td>
                                <td>{smjer.cijena}</td>
                                <td>
                                    {formatirajVerificiran(smjer.verificiran)}
                                    {/* 
                                    {smjer.verificiran==null 
                                    ? 'Nije definirano'
                                    : smjer.verificiran ? 'DA' : 'NE'}
                                    */}
                                </td>
                                <td>
                                    <Button 
                                    onClick={()=>obrisi(smjer.sifra)}
                                    variant='danger'
                                    >
                                        Obriši
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