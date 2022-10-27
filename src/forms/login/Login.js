import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const { providerLogin, signIn, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider();

  const handleGIthub = () => {
    githubLogin(githubProvider)
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((e) => console.error(e.message));
  };

  const handleGoogleLogIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError();
        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.log(e);
        setError(e.message);
      });
  };

  return (
    <div className="w-75 m-auto bg-light p-5 mt-4 rounded">
      <Form className="my-4" onSubmit={handleSubmit}>
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
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Form.Text className="text-danger">
          <p>{error}</p>
        </Form.Text>
      </Form>
      <div>
        <ButtonGroup vertical>
          <Button
            className="bg-dark border border-0 mb-2"
            onClick={handleGoogleLogIn}
          >
            <FaGoogle className="me-2"></FaGoogle>LogIn with Google
          </Button>
          <Button className="bg-dark border border-0" onClick={handleGIthub}>
            <FaGithub className="me-2"></FaGithub>LogIn with Github
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Login;
