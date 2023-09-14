import { useContext, } from "react";
import {  Col, Container, Row } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../provider/AuthProvider";
import DestinationForm from "./DestinationForm";
import { useLoaderData } from "react-router-dom";

const Destination = () => {
  // const {user}=useContext(AuthContext)
  // console.log("Use COntext ==>>",user);
  const data=useLoaderData();
  console.log(data);
  return (
    <Container>
      <Row>
        <Col lg={5}>
          <h1>Coxs Bazar</h1>
          <p>
            Relax on the worlds longest natural sea beach and enjoy scenic
            beauty. Coxs Bazar offers miles of sandy beaches, Himchari National
            Park, St. Martins Island, and Adinath Temple.
          </p>
        </Col>
        <Col lg={7}>
          <DestinationForm></DestinationForm>
        </Col>
      </Row>
    </Container>
  );
};

export default Destination;
