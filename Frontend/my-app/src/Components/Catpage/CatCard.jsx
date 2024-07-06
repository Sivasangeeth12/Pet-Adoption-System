import React, { useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import "../Dogpage/dogStyle.css";
import PetModal from "../Modal/PetModal";

const CatCard = ({ cats }) => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="cards">
      <Card>
        <div className="details">
          <Row>
            <Col>
              <Card.Title style={{ fontSize: "30px", marginLeft: "180px" }}>
                {cats.petName}
              </Card.Title>
              <Card.Body>
                <ul id={cats.id}>
                  <li>Breed: {cats.breed}</li>
                  <li>Age: {cats.age}</li>
                  <li>Gender: {cats.gender}</li>
                  <li>Species: {cats.species}</li>
                  <li>Special Characteristics: {cats.specialCharacteristics}</li>
                </ul>
              </Card.Body>
            </Col>
            <Col>
              <Card.Img
                src={cats.image}
                style={{ height: "250px", width: "250px" }}
              ></Card.Img>
            </Col>
          </Row>
        </div>
        <div className="buttons">
          <Row>
            <Col>
              <Button className="adopt-btn">Adopt me</Button>
              <Button className="about-btn" onClick={handleShow}>
                About me
              </Button>
              <PetModal show={showModal} onHide={handleClose} Pets={cats} />
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
};

export default CatCard;
