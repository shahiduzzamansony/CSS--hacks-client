import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Details.css";

import ReactToPdf from "react-to-pdf";
import { useRef } from "react";

const Details = () => {
  const ref = useRef();
  const data = useLoaderData();
  const { name, img_url, price, classes, details, id } = data;
  return (
    <div className="my-4">
      <Card className="m-auto w-75 d-flex flex-sm-column flex-lg-row" ref={ref}>
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
            <div>
              <ReactToPdf targetRef={ref} filename="course.pdf">
                {({ toPdf }) => (
                  <button
                    className="btn btn-ghost rounded-b-none"
                    onClick={toPdf}
                  >
                    Download PDF
                  </button>
                )}
              </ReactToPdf>
            </div>
            <Button>
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
