import { Row, Col } from "react-bootstrap";
 import {Card } from "react-bootstrap";
import { Container} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
   
export default function AppliedJob() {
  const Navigate=useNavigate();

  return (
    <Container>
      <Row>
        <Col lg="1"></Col>
        <Col lg="10">
          <h1 style={{ textAlign: "center" }}>Applied Jobs</h1>
        </Col>
      </Row>
      <Card style={{ background: "pink" }}>
        <Card.Body>
          <Card.Title
            className="d-flex"
            style={{ justifyContent: "space-between" }}
          >
            Senio Developer<Card.Title>3 days ago</Card.Title>
          </Card.Title>
          <Card.Text>
            <Card.Text>Aman@gmail.com</Card.Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
            numquam nisi corrupti vel eaque autem veniam reprehenderit mollitia
            expedita perferendis, incidunt officia modi fugiat obcaecati eius
            quo aliquam, quasi error ipsam maiores nostrum! Consequatur,
            perferendis! Doloremque id neque similique a! Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Soluta eum doloremque harum
            maxime repellendus aperiam laborum iure placeat blanditiis rem,
            excepturi dolor minus non earum ullam hic quod molestias fugiat
            cupiditate itaque ad dignissimos! Perspiciatis illum adipisci
            aspernatur voluptatum sit!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ background: "grey" }}>
        <Card.Body>
          <Card.Title
            className="d-flex"
            style={{ justifyContent: "space-between" }}
          >
            Senio Developer<Card.Title>3 days ago</Card.Title>
          </Card.Title>
          <Card.Title></Card.Title>
          <Card.Text>
            <Card.Text>Aman@gmail.com</Card.Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
            numquam nisi corrupti vel eaque autem veniam reprehenderit mollitia
            expedita perferendis, incidunt officia modi fugiat obcaecati eius
            quo aliquam, quasi error ipsam maiores nostrum! Consequatur,
            perferendis! Doloremque id neque similique a! Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Soluta eum doloremque harum
            maxime repellendus aperiam laborum iure placeat blanditiis rem,
            excepturi dolor minus non earum ullam hic quod molestias fugiat
            cupiditate itaque ad dignissimos! Perspiciatis illum adipisci
            aspernatur voluptatum sit!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title
            className="d-flex"
            style={{ justifyContent: "space-between" }}
          >
            Senio Developer<Card.Title>3 days ago</Card.Title>
          </Card.Title>
          <Card.Text>
            <Card.Text>Aman@gmail.com</Card.Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
            numquam nisi corrupti vel eaque autem veniam reprehenderit mollitia
            expedita perferendis, incidunt officia modi fugiat obcaecati eius
            quo aliquam, quasi error ipsam maiores nostrum! Consequatur,
            perferendis! Doloremque id neque similique a! Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Soluta eum doloremque harum
            maxime repellendus aperiam laborum iure placeat blanditiis rem,
            excepturi dolor minus non earum ullam hic quod molestias fugiat
            cupiditate itaque ad dignissimos! Perspiciatis illum adipisci
            aspernatur voluptatum sit!
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
    
