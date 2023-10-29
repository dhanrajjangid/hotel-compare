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
        alignItems: "center",
        justifyContent: "center",
        height: "80vh", // Set the height to 100% of the viewport height
      }}
    >
      <Box
        className="city-select"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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
    </Container>
  );
};

export default City;
