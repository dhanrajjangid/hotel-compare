import React, { useState, useEffect, useContext } from "react";
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
import { useLocation } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { BudgetContext } from "../context/budgetContext";

const HotelDetails = () => {
  const { budget } = useContext(BudgetContext);

  const { state } = useLocation();
  const [hotelData, setHotelData] = useState({});
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://crud-template-nodejs.vercel.app/hotel/getHotels?status=${budget}`
        );
        const data = await response.json();
        setHotelData(data[state?.i]);
        setMenuItems(data[state?.i].menu);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching hotels:", error);
        setLoading(false);
      }
    };

    fetchHotels();
  }, [budget]);
  // Dummy data for the hotel and menu
  const hotelData1 = {
    name: "Sample Hotel",
    rating: 4.5,
    address: "123 Main Street, City, Country",
  };

  const menuItems1 = [
    { name: "Dish 1", price: "$10" },
    { name: "Dish 2", price: "$15" },
    { name: "Dish 3", price: "$12" },
  ];

  return (
    <>
      <Backdrop sx={{ color: "#fff", zIndex: 10 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
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
            {hotelData?.name}
          </Typography>
          <Typography variant="subtitle1">
            Cleanliness: {hotelData?.cleanliness}
          </Typography>
          <Typography variant="subtitle1">
            Service: {hotelData?.service}
          </Typography>
          <Typography variant="subtitle1">Taste: {hotelData?.taste}</Typography>
          <Typography variant="subtitle1">
            Budget: {hotelData?.status}
          </Typography>
          {/* <Typography variant="subtitle1">
            Address: {hotelData?.address}
          </Typography> */}
          <hr />
          <br />
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
                {menuItems?.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item?.name}</TableCell>
                    <TableCell>{item?.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </>
  );
};

export default HotelDetails;
