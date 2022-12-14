import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const { createUser, handleProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  const handleProfileInfo = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    handleProfile(profile)
      .then((result) => {})
      .catch((e) => console.error(e));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handleProfileInfo(name, photoURL);
        setError();
        form.reset();
        navigate("/login");
      })
      .catch((e) => {
        console.log(e);
        setError(e.message);
      });
  };

  return (
    <div className="w-75 m-auto bg-light p-5 mt-4 rounded">
      <Form className="my-4 w-75 m-auto" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>User Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhotoURL">
          <Form.Label>photoURL</Form.Label>
          <Form.Control name="photoURL" type="text" placeholder="photoURL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            label="Check me out"
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accepted}>
          Submit
        </Button>
        <Form.Text className="text-danger">
          {/* comment added */}
          <p>{error}</p>
        </Form.Text>
      </Form>
    </div>
  );
};

export default Register;
