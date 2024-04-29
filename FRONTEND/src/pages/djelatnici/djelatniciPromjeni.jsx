import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RoutesNames } from "../../constants";
import Service from "../../services/DjelatniciService";
import { useEffect, useState } from "react";
import Akcije from "../../components/Akcije";

export default function DjelatniciPromjena(){
    const navigate = useNavigate();
    const routeParams = useParams();
    const [djelatnik, setDjelatnik] = useState({});

   async function dohvatiDjelatnik(){
        const o = await Service.getBySifra("Djelatnici", routeParams.id);
        if (!odgovor.ok) {
            alert(Service.dohvatiPorukeAlert(odgovor.podaci));
            navigate(RoutesNames.DJELATNICI_PREGLED);
            return;
        }
        setDjelatnik(odgovor.podaci);
   }

   useEffect(() => {
    dohvatiDjelatnik();
      }, []);

      async function promjeniDjelatnik(djelatnik) {
        const odgovor = await Service.promjeni(
          "Djelatnici",
          routeParams.id,
          djelatnik
        );
        if (odgovor.ok) {
          navigate(RoutesNames.KORISNIK_PREGLED);
          return;
        }
        alert(Service.dohvatiPorukeAlert(odgovor.podaci));
      }

    function obradiSubmit(e){ 
        e.preventDefault();
        

        const podaci = new FormData(e.target);
        promjeniDjelatnik({
        
            Ime: podaci.get('ime'),
            Prezime: podaci.get('prezime'),
            Odjel: podaci.get('odjel')
            
        });
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