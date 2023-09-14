import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import ResetPassword from "./components/ResetPassword";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/reset" element={<ResetPassword />} />
            </Routes>
          </div>
        </Container>
      </AuthProvider>
    </>
  );
};

export default App;
