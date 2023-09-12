import { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../provider/AuthProvider";

const Destination = () => {
  const {user}=useContext(AuthContext)
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndtDate] = useState();
  console.log("start date =>", startDate);
  console.log("end date =>", endDate);
  console.log("Use COntext ==>>",user);
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
          <Form variant="dark">
            <Form.Group className='mb-3'>
              <Form.Control
                placeholder='Start your Journey From'
                name='destination'
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Select>
                <option name='Chittagong'>Chittagong</option>
                <option name='syhlet'>Syhlet</option>
                <option name='khulna'>Khulna</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className='d-flex gap-5'>
              <ReactDatePicker
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText='start date'
              />
              <ReactDatePicker
                showIcon
                selected={endDate}
                onChange={(date) => setEndtDate(date)}
                placeholderText='pickup date'
              />
            </Form.Group>
            <Form.Group className='my-3'>
              <Form.Check type='checkbox' label="Can't check this" />
            </Form.Group>
            <Button variant='warning' type='submit'>
              Book
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Destination;
