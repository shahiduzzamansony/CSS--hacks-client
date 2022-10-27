import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Details.css";

const Details = () => {
  const data = useLoaderData();
  const { name, img_url, price, classes, details, id } = data;
  return (
    <div className="my-4">
      <Card className="m-auto w-75 d-flex flex-sm-column flex-lg-row">
        <Card.Img variant="top" src={img_url} id="details" />
        <Card.Body className="bg-info">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <div className="d-flex justify-content-between">
            <Card.Text>
              <p>Price:$ {price}</p>
            </Card.Text>
            <Card.Text>
              <p>Classes: {classes}</p>
            </Card.Text>
          </div>

          <div className="d-flex justify-content-between">
            <Button variant="secondary">
              <Link className="text-decoration-none text-white">
                Download PDF
              </Link>
            </Button>
            <Button variant="secondary">
              <Link
                to={`/checkout/${id}`}
                className="text-decoration-none text-white"
              >
                Get premium access
              </Link>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;
