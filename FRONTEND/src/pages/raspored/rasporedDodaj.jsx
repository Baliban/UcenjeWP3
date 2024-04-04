import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RoutesNames } from "../../constants";
import RasporedService from "../../services/RasporedService";
import Raspored from "./Raspored";


export default function rasporedDodaj(){
    const navigate = useNavigate();

    async function dodaj(rasporedi){
        const odgovor = await RasporedService.post(rasporedi);
        if (odgovor.greska){
            console.log(odgovor.poruka);
            alert('Pogledaj konzolu');
            return;
        }
        navigate(RoutesNames.RASPORED_PREGLED);
    }

    function obradiSubmit(e){ 
        

        const podaci = new FormData(e.target);

        const raspored = {
            djelatnik: podaci.get('djelatnik'),  
            ponedjeljak: parseInt(podaci.get('ponedjeljak')), 
            utorak: parseInt(podaci.get('utorak')),
            srijeda: parseInt(podaci.get('srijeda')),
            
        };

        //console.log(smjer);
        dodaj(raspored);

    }

    return (

        <Container>
            <Form onSubmit={obradiSubmit}>

                <Form.Group controlId="ID">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="int" name="ID" required />
                </Form.Group>

                <Form.Group controlId="ponedjeljak">
                    <Form.Label>ponedjeljak</Form.Label>
                    <Form.Control type="text" name="ponedjeljak" />
                </Form.Group>

                <Form.Group controlId="utorak">
                    <Form.Label>utorak</Form.Label>
                    <Form.Control type="text" name="utorak" />
                </Form.Group>

               
                
                

                <hr />
                <Row>
                    <Col xs={6} sm={6} md={3} lg={6} xl={1} xxl={2}>
                        <Link className="btn btn-danger siroko" to={RoutesNames.RASPOREDI_PREGLED}>
                            Odustani
                        </Link>
                    </Col>
                    <Col xs={6} sm={6} md={9} lg={6} xl={1} xxl={10}>
                        <Button className="siroko" variant="primary" type="submit">
                            Dodaj
                        </Button>
                    </Col>
                </Row>

            </Form>
        </Container>

    );
}