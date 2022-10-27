import React from "react";
import { useLoaderData } from "react-router-dom";
import Category from "../category/Category";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import Framework from "../Frameworks/Framework/Framework";

const Home = () => {
  const data = useLoaderData();
  return (
    <div className="mb-4">
      <Container>
        <Row>
          <Col md="3">
            <h2>
              <Framework></Framework>
            </h2>
          </Col>
          <Col md="9" className="home">
            {data.map((category) => (
              <Category key={category.id} category={category}></Category>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
