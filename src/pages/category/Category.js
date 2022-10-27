import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { name, img_url, details, id } = category;
  return (
    <div className="mt-3">
      <Card style={{ width: "18rem", height: "20rem" }}>
        <Card.Img variant="top" src={img_url} style={{ height: "8rem" }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {details.length > 100 ? (
              <p>
                {details.slice(0, 50) + "..."}
                <Link className="text-decoration-none" to={`/framework/${id}`}>
                  Read more
                </Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
          <Button variant="primary">
            <Link
              to={`/details/${id}`}
              className="text-white text-decoration-none"
            >
              All Info
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Category;
