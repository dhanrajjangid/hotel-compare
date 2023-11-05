import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Container,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import HotelCard from "./HotelCard";

const City = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const cities = [
    "Ranchi",
    "Indore",
    "Kolkata",
    "Chennai",
    "Delhi",
    "Jaipur",
    "Mumbai",
  ];
  const navigate = useNavigate();

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleNext = () => {
    navigate("/status"); // Redirect to the "Status" page
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Set the height to 100% of the viewport height
      }}
    >
      <Box
        className="city-select"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Select a City
        </Typography>
        <FormControl variant="outlined" style={{ minWidth: 500 }}>
          <InputLabel id="city-label">City</InputLabel>
          <Select
            labelId="city-label"
            id="city-select"
            value={selectedCity}
            onChange={handleCityChange}
            label="City"
          >
            {cities.map((city, index) => (
              <MenuItem key={index} value={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box mt={4} textAlign="center">
          <Button
            disabled={!selectedCity}
            variant="contained"
            color="primary"
            sx={{ width: 200 }}
            onClick={handleNext}
          >
            Next
          </Button>
        </Box>
      </Box>
      <Box
        className="city-cards-home"
        sx={{
          width: "115%",
          display: "flex",
          justifyContent: "center",
          gap: 2,
          marginTop: 4,
          padding: "20px 20px",
          overflowX: "auto",
        }}
      >
        <HotelCard
          name="Radisson Blu"
          backgroundImg="https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=600"
          address="Vijay Nagar, Indore"
        />
        <HotelCard
          name="Hotel Sayaji"
          backgroundImg="https://images.pexels.com/photos/18861773/pexels-photo-18861773/free-photo-of-hotel-logo-on-building-wall.jpeg?auto=compress&cs=tinysrgb&w=600"
          address="Palasia, Indore"
        />
        <HotelCard
          name="Marriot Bonvoy"
          backgroundImg="https://images.pexels.com/photos/18838165/pexels-photo-18838165/free-photo-of-luxury-hotel-in-denmark.jpeg?auto=compress&cs=tinysrgb&w=600"
          address="Saket, Indore"
        />
        <HotelCard
          name="Taj Hotel"
          backgroundImg="https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&w=600"
          address="Sukhlia, Indore"
        />
        <HotelCard
          name="Shreemaya"
          backgroundImg="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=600"
          address="Scheme No. 78, Indore"
        />
        <HotelCard
          name="Effotel Hotel"
          backgroundImg="https://images.pexels.com/photos/2670273/pexels-photo-2670273.jpeg?auto=compress&cs=tinysrgb&w=600"
          address="Satya Sai, Indore"
        />
      </Box>
    </Container>
  );
};

export default City;
