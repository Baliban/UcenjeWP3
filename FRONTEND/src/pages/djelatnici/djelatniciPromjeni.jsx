import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RoutesNames } from "../../constants";
import DjelatniciService from "../../services/DjelatniciService";
import { useEffect, useState } from "react";

export default function DjelatnikPromjeni(){
    const navigate = useNavigate();
    const routeParams = useParams();
    const [djelatnik, setDjelatnik] = useState({});

   async function dohvatiDjelatnik(){
        const o = await DjelatniciService.GetBySifra(routeParams.id);
        if(o.greska){
            console.log(o.poruka);
            alert('pogledaj konzolu');
            return;
        }
        setDjelatnik(o.poruka);
   }

   async function promjeni(djelatnik){
    const odgovor = await DjelatniciService.put(routeParams.id,djelatnik);
    if (odgovor.greska){
        console.log(odgovor.poruka);
        alert('Pogledaj konzolu');
        return;
    }
    navigate(RoutesNames.DJELATNICI_PREGLED);
}

   useEffect(()=>{
    dohvatiDjelatnik();
   },[]);

    function obradiSubmit(e){ 
        e.preventDefault();
        

        const podaci = new FormData(e.target);

        const djelatnik = {
            Ime: podaci.get('ime'),
            Prezime: podaci.get('prezime'),
            Odjel: podaci.get('odjel')
            
        };
        
        promjeni(djelatnik);

    }

    return (

        <Container>
            <Form onSubmit={obradiSubmit}>

                <Form.Group controlId="ime">
                    <Form.Label>Ime</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="ime" 
                    defaultValue={djelatnik.ime}
                    required />
                </Form.Group>

                <Form.Group controlId="prezime">
                    <Form.Label>Prezime</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="prezime"
                    defaultValue={djelatnik.prezime}
                     />
                </Form.Group>

                <Form.Group controlId="odjel">
                    <Form.Label>Odjel</Form.Label>
                    <Form.Control type="text" name="odjel" defaultValue={djelatnik.odjel} />
                </Form.Group>
                       
                           
                <hr />
                <Row>
                    <Col>
                        <Link className="btn btn-danger siroko" to={RoutesNames.DJELATNICI_PREGLED}>
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