import { Button, Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CustomCard from "./CustomCard";
import "./Home.css"
import { useState } from "react";
import image1 from '../../assets/bg-2.jpg'

const Home = () => {
    const [selectedCard,setSelectedCard]=useState(null)
    const [backgroundImage,setBackgroundImage]=useState('')
    const destinationData=useLoaderData()
    const handleCardClick=(dataClicked)=>{
      setSelectedCard(dataClicked);
      setBackgroundImage(dataClicked.image)
      console.log("this one =>",selectedCard);
    }
    

    return (
      <Row
        style={{
          height: "95vh",
          width: "100%",
          backgroundImage: `url(${selectedCard ? backgroundImage : image1})`,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}>
        <Col lg={5} className=' h-100 text-center center-div text-white'>
          {selectedCard ? (
            <>
              <h2>{selectedCard.destination}</h2>
              <p>{selectedCard.description}</p>
            </>
          ) : (
            <>
              <h2>Cox's Bazar</h2>
              <p>
                "Relax on the world's longest natural sea beach and enjoy scenic
                beauty. Cox's Bazar offers miles of sandy beaches, Himchari
                National Park, St. Martin's Island, and Adinath Temple."
              </p>
            </>
          )}
          <Button variant='warning' >Book Now</Button>
        </Col>
        <Col
          lg={7}
          className='d-flex gap-2 justify-content-center align-items-center h-100 '>
          {destinationData.map((data) => (
            <CustomCard key={data.id} data={data} onClick={handleCardClick}>
              {data.id}
            </CustomCard>
          ))}
        </Col>
      </Row>
    );
  };



 


export default Home