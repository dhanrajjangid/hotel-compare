import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";

const HotelDetails = () => {
  // Dummy data for the hotel and menu
  const hotelData = {
    name: "Sample Hotel",
    rating: 4.5,
    address: "123 Main Street, City, Country",
  };

  const menuItems = [
    { name: "Dish 1", price: "$10" },
    { name: "Dish 2", price: "$15" },
    { name: "Dish 3", price: "$12" },
  ];

  return (
    <Card
      sx={{
        marginTop: 5,
        padding: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
          width: "100%",
          height: "400px",
          overflowX: "auto",
        }}
      >
        <img
          alt="Hotel"
          src="https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <img
          alt="Hotel"
          src="https://images.pexels.com/photos/7061068/pexels-photo-7061068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <img
          alt="Hotel"
          src="https://images.pexels.com/photos/6903157/pexels-photo-6903157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </Box>
      <CardContent>
        <Typography variant="h5" component="div">
          {hotelData.name}
        </Typography>
        <Typography variant="subtitle1">Rating: {hotelData.rating}</Typography>
        <Typography variant="subtitle1">
          Address: {hotelData.address}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Menu
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {menuItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default HotelDetails;
