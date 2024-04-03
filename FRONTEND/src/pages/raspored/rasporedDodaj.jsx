import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RoutesNames } from "../../constants";
import RasporedService from "../../services/RasporedService";
import raspored from "./Raspored";


export default function rasporedDodaj(){
    const navigate = useNavigate();

    async function dodaj(raspored){
        const odgovor = await RasporedService.post(raspored);
        if (odgovor.greska){
            console.log(odgovor.poruka);
            alert('Pogledaj konzolu');
            return;
        }
        navigate(RoutesNames.RASPORED_PREGLED);
    }

    function obradiSubmit(e){ // e predstavlja event
        e.preventDefault();
        //alert('Dodajem smjer');

        const podaci = new FormData(e.target);

        const raspored = {
            odjel: podaci.get('odjel'),  // 'naziv' je name atribut u Form.Control
            prezime: parseInt(podaci.get('prezime')), //na backend je int
            ime: parseInt(podaci.get('ime')),
            
        };

        //console.log(smjer);
        dodaj(raspored);

    }

    return (

        <Container>
            <Form onSubmit={obradiSubmit}>

                <Form.Group controlId="odjel">
                    <Form.Label>odjel</Form.Label>
                    <Form.Control type="text" name="odjel" required />
                </Form.Group>

                <Form.Group controlId="ime">
                    <Form.Label>ime</Form.Label>
                    <Form.Control type="text" name="ime" />
                </Form.Group>

                <Form.Group controlId="prezime">
                    <Form.Label>prezime</Form.Label>
                    <Form.Control type="text" name="prezime" />
                </Form.Group>

               
                
                

                <hr />
                <Row>
                    <Col xs={6} sm={6} md={3} lg={6} xl={1} xxl={2}>
                        <Link className="btn btn-danger siroko" to={RoutesNames.RASPORED_PREGLED}>
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