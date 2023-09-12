import { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap'
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Destination = () => {
     const [startDate, setStartDate] = useState();
     const [endDate, setEndtDate] = useState();
     console.log("start date =>",startDate);   
     console.log("end date =>",endDate);   
     return (
       <Container>
         <Row>
           <Col lg={5}>
             <h1>Cox's Bazar</h1>
             <p>
               "Relax on the world's longest natural sea beach and enjoy scenic
               beauty. Cox's Bazar offers miles of sandy beaches, Himchari
               National Park, St. Martin's Island, and Adinath Temple."
             </p>
           </Col>
           <Col lg={7}>
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
             <Form.Group className='mb-3'>
               <Form.Check type='checkbox' label="Can't check this" disabled />
             </Form.Group>
           </Col>
         </Row>
       </Container>
     );
}

export default Destination