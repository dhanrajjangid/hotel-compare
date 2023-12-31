import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import City from "./components/City";
import Status from "./components/Status";
import HotelPage from "./components/HotelPage";
import CustomAppBar from "./components/AppBar";
import Footer from "./components/Footer";
import HotelDetails from "./components/DetailsPage";

function App() {
  return (
    <Router>
      <CustomAppBar />
      <Container>
        <Routes>
          <Route path="/" element={<City />} />
          <Route path="/status" element={<Status />} />
          <Route path="/hotel-page" element={<HotelPage />} />
          <Route path="/details" element={<HotelDetails />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
