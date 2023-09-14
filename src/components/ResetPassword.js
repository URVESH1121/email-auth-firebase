import React, { useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async () => {
    try {
      setError("");
      setMessage("");
      await resetPassword(email);
      setMessage("Password reset email sent. Check your inbox.");
      //   setEmail("")
    } catch (error) {
      setError("Failed to send reset email. Please check the email address.");
    }
  };

  const handleGoBack = () => {};

  return (
    <div>
      <h2>Reset Password</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {message && <Alert variant="success">{message}</Alert>}
      <Form>
        <Form.Group id="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Container className="">
          <Button className="m-4" onClick={handleResetPassword}>
            Reset Password
          </Button>
          <Button onClick={handleGoBack}>
            <Link className="text-light text-decoration-none" to="/">
              Go Back
            </Link>
          </Button>
        </Container>
      </Form>
    </div>
  );
};

export default ResetPassword;
