import React from "react";
import { useAuth } from "../context/AuthContext";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Hello,Welcome</Card.Title>
          {user && user.email}
          <Button onClick={handleLogout} className="w-100 mt-4" type="submit">
            Log Out
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Home;
