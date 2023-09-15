import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
const BookedHotel = () => {
  const data = useLoaderData();
  return (
    <Row>
      <Col lg={6} >
    
        {data.map((items) => (
          <Card style={{ width: "20rem" }} key={items.id} className="text-black">
            <Card.Img variant="top" src={items.image_url} />
            <Card.Body>
              <Card.Title>{items.hotel_name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
      
            </Card.Body>
          </Card>
        ))}
      
      </Col>
      <Col lg={6}></Col>
    </Row>
  );
};

export default BookedHotel;
