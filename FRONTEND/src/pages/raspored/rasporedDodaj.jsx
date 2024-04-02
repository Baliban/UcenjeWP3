import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RoutesNames } from "../../constants";
import RasporedService from "../../services/RasporedService";
import raspored from "./Raspored";


export default function rasporedDodaj(){
    const navigate = useNavigate();

    async function dodaj(raspored){
        const odgovor = await RasporedServiceService.post(raspored);
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

        const smjer = {
            naziv: podaci.get('naziv'),  // 'naziv' je name atribut u Form.Control
            Ponedjeljak: parseInt(podaci.get('Ponedjeljak')), //na backend je int
            Utorak: parseInt(podaci.get('Utorak')),
            Srijeda: parseInt(podaci.get('Srijeda')),     
            Cetvrtak: parseInt(podaci.get('Cetvrtak')),  
            Petak: parseInt(podaci.get('Petak')), 
            Subota: parseInt(podaci.get('Subota')), 
            Nedjelja: parseInt(podaci.get('Nedjelja')),  
            fondsati: parseInt(podaci.get('fondsati')),
        };

        //console.log(smjer);
        dodaj(raspored);

    }

    return (

        <Container>
            <Form onSubmit={obradiSubmit}>

                <Form.Group controlId="Ime">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control type="text" name="Ime" required />
                </Form.Group>

                <Form.Group controlId="Prezime">
                    <Form.Label>Trajanje</Form.Label>
                    <Form.Control type="text" name="Prezime" />
                </Form.Group>

                <Form.Group controlId="Odjel">
                    <Form.Label>Cijena</Form.Label>
                    <Form.Control type="text" name="Odjel" />
                </Form.Group>

               
                <Form.Group controlId="Ponedjeljak">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control type="number" name="Ponedjeljak" required />
                </Form.Group>
                <Form.Group controlId="Utorak">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control type="number" name="Utorak" required />
                </Form.Group>

                <Form.Group controlId="Srijeda">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control type="number" name="Srijeda" required />
                </Form.Group>

                <Form.Group controlId="Cetvrtak">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control type="number" name="Cetvrtak" required />
                </Form.Group>

                <Form.Group controlId="Petak">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control type="number" name="Petak" required />
                </Form.Group>
                <Form.Group controlId="Subota">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control type="number" name="Subota" required />
                </Form.Group>
                <Form.Group controlId="Nedjelja">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control type="number" name="Nedjelja" required />
                </Form.Group>
                <Form.Group controlId="fond sati">
                    <Form.Label>Naziv</Form.Label>
                    <Form.Control type="number" name="fond sati" required />
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