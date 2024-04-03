import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RoutesNames } from "../../constants";
import RasporedService from "../../services/RasporedService";
import { useEffect, useState } from "react";


export default function RasporedPromjena(){
    const navigate = useNavigate();
    const routeParams = useParams();
    const [raspored, setraspored] = useState({});

   async function dohvatiRaspored(){
        const o = await RasporedService.getBySifra(routeParams.sifra);
        if(o.greska){
            console.log(o.poruka);
            alert('pogledaj konzolu');
            return;
        }
        setraspored(o.poruka);
   }

   async function promjeni(raspored){
    const odgovor = await RasporedService.put(routeParams.ID,raspored);
    if (odgovor.greska){
        console.log(odgovor.poruka);
        alert('Pogledaj konzolu');
        return;
    }
    navigate(RoutesNames.RASPORED_PREGLED);
}

   useEffect(()=>{
    dohvatiRaspored();
   },[]);

    function obradiSubmit(e){ // e predstavlja event
        e.preventDefault();
        //alert('Dodajem smjer');

        const podaci = new FormData(e.target);

        const raspored = {
            ID: podaci.get('ID'),  // 'naziv' je name atribut u Form.Control
            ponedjeljak: parseInt(podaci.get('ponedjeljak')), //na backend je int
            utorak: parseFloat(podaci.get('utorak')),
            srijeda: parseFloat(podaci.get('srijeda')),
            cetvrtak: parseFloat(podaci.get('cetvrtak')),
            petak: parseFloat(podaci.get('petak')),  
            subota: parseFloat(podaci.get('subota')),
            nedjelja: parseFloat(podaci.get('nedjelja')),
            
        };
        //console.log(routeParams.sifra);
        //console.log(smjer);
        promjeni(smjer);

    }

    return (

        <Container>
            <Form onSubmit={obradiSubmit}>

                <Form.Group controlId="naziv">
                    <Form.Label>ID</Form.Label>
                    <Form.Control 
                    type="int" 
                    name="ID djelatnika" 
                    defaultValue={Djelatnik.ID}
                    required />
                </Form.Group>

                <Form.Group controlId="ponedjeljak">
                    <Form.Label>ponedjeljak</Form.Label>
                    <Form.Control 
                    type="number" 
                    name="ponedjeljak"
                    defaultValue={raspored.ponedjeljak}
                     />
                </Form.Group>

                <Form.Group controlId="utorak">
                    <Form.Label>utorak</Form.Label>
                    <Form.Control type="number" name="utorak" defaultValue={raspored.utorak} />
                </Form.Group>
                <Form.Group controlId="srijeda">
                    <Form.Label>srijeda</Form.Label>
                    <Form.Control 
                    type="number" 
                    name="srijeda"
                    defaultValue={raspored.srijeda}
                     />
                </Form.Group>

                <Form.Group controlId="cetvrtak">
                    <Form.Label>cetvrtak</Form.Label>
                    <Form.Control 
                    type="number" 
                    name="cetvrtak"
                    defaultValue={raspored.cetvrtak}
                     />
                </Form.Group>

                <Form.Group controlId="petak">
                    <Form.Label>petak</Form.Label>
                    <Form.Control 
                    type="number" 
                    name="petak"
                    defaultValue={raspored.petak}
                     />
                </Form.Group>

                <Form.Group controlId="subota">
                    <Form.Label>subota</Form.Label>
                    <Form.Control 
                    type="number" 
                    name="subota"
                    defaultValue={raspored.subota}
                     />
                </Form.Group>

                <Form.Group controlId="nedjelja">
                    <Form.Label>nedjelja</Form.Label>
                    <Form.Control 
                    type="number" 
                    name="nedjelja"
                    defaultValue={raspored.nedjelja}
                     />
                </Form.Group>


                <hr />
                <Row>
                    <Col>
                        <Link className="btn btn-danger siroko" to={RoutesNames.SMJER_PREGLED}>
                            Odustani
                        </Link>
                    </Col>
                    <Col>
                        <Button className="siroko" variant="primary" type="submit">
                            Promjeni
                        </Button>
                    </Col>
                </Row>

            </Form>
        </Container>

    );
}