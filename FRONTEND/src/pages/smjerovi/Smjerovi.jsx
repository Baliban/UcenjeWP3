import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import SmjerService from '../../services/SmjerService';
import { Table } from 'react-bootstrap';


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

    return(
        <>
           <Container>
            <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Naziv</th>
                            <th>Trajanje</th>
                            <th>Cijena</th>
                            <th>Verificiran</th>
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
                            </tr>
                        ))}
                    </tbody>
            </Table>
           </Container>
        </>
    );
}