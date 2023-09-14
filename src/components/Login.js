import React, { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmitBtn = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await logIn(email, password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <h2 className="text-center">Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
          </Card.Title>
          <Form onSubmit={handleSubmitBtn}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Button className="w-100 mt-4" type="submit">
              Login
            </Button>
            <h6 className="text-center mt-2">
              <Link to="/reset">Forget password</Link>
            </h6>
          </Form>

          <hr />
          <div>
            <GoogleButton
              onClick={handleGoogleSignIn}
              type="dark"
              className="mt-4 w-100"
            />
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-3 ">
        Already have an account?
        <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
};

export default Login;
