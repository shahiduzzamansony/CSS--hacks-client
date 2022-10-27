import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Checkout = () => {
  const data = useLoaderData();
  const { name, price, classes } = data;
  return (
    <div>
      <div className="mt-5">
        <Card className="text-center w-50 m-auto bg-secondary text-white">
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <p>Price: ${price}</p>
            </Card.Text>
            <Card.Text>
              <p>Classes: {classes}</p>
            </Card.Text>
            <div className="d-flex justify-content-center">
              <Button variant="primary" className="me-3">
                Procced
              </Button>
              <Button variant="primary">
                <Link
                  to="/framework"
                  className="text-decoration-none text-white"
                >
                  Go Back
                </Link>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Checkout;
