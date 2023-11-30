import React, { useEffect, useState, useContext } from "react";
import {
  Button,
  Card,
  CardContent,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
// import { hotelData } from "../const/HotelData";
import { useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { BudgetContext } from "../context/budgetContext";

const HotelPage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCompareOpen, setCompareOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(0);
  const [dishNames, setDishNames] = useState([]);
  const [hotelData, setHotelData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { budget } = useContext(BudgetContext);

  useEffect(() => {
    if (hotelData.length > 0) {
      let newArr = [...hotelData[0].menu, ...hotelData[1].menu];
      let myArray = newArr?.map((item) => item.name);
      myArray = [...new Set(myArray)];
      setDishNames(myArray);
    }
  }, [hotelData]);

  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://crud-template-nodejs.vercel.app/hotel/getHotels?status=${budget}`
        );
        const data = await response.json();
        setHotelData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching hotels:", error);
        setLoading(false);
      }
    };

    fetchHotels();
  }, [budget]);

  const toggleMenu = (hotel) => {
    setSelectedHotel(hotel);
    setMenuOpen(true);
  };

  console.log(dishNames, "dishnames");
  const toggleCompare = () => {
    setCompareOpen(true);
  };

  return (
    <div>
      <Backdrop sx={{ color: "#fff", zIndex: 10 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box marginTop={5} display={"flex"} justifyContent={"center"}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "black" }}
          onClick={toggleCompare}
        >
          Compare Menu
        </Button>
      </Box>
      <Dialog open={isCompareOpen} onClose={() => setCompareOpen(false)}>
        <DialogTitle>Compare Menu</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ backgroundColor: "lavender" }}>
                    Dish name
                  </TableCell>
                  <TableCell>{hotelData[0]?.name}</TableCell>
                  <TableCell>{hotelData[1]?.name}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dishNames?.map((dish, dishIndex) => (
                  <TableRow key={dishIndex}>
                    <TableCell
                      sx={{
                        backgroundColor: "lavender",
                        borderTop: "1px solid white",
                      }}
                    >
                      {dish}
                    </TableCell>
                    <TableCell>
                      {hotelData[0]?.menu?.find((item) => item.name === dish)
                        ?.price ?? "X"}
                    </TableCell>
                    <TableCell>
                      {hotelData[1]?.menu?.find((item) => item.name === dish)
                        ?.price ?? "X"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>
      {hotelData?.map((hotel, index) => (
        <Card key={index} sx={{ margin: "10px 0", backgroundColor: "#f0f0f0" }}>
          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              <img
                style={{
                  height: "160px",
                  width: "160px",
                }}
                src="https://images.pexels.com/photos/4916537/pexels-photo-4916537.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <img
                style={{
                  height: "160px",
                  width: "160px",
                }}
                src="https://images.pexels.com/photos/6636252/pexels-photo-6636252.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <img
                style={{
                  height: "160px",
                  width: "160px",
                }}
                src="https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4">{hotel?.name}</Typography>
              <Typography variant="h6">Rating: {hotel?.rating}</Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ backgroundColor: "#151515" }}
                  onClick={() => toggleMenu(index)}
                >
                  View Menu
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ backgroundColor: "#151515" }}
                  onClick={() =>
                    navigate("/details", {
                      state: {
                        i: index,
                      },
                    })
                  }
                >
                  View Details
                </Button>
              </Box>
            </Box>
            <Box></Box>
          </CardContent>
        </Card>
      ))}
      <Dialog open={isMenuOpen} onClose={() => setMenuOpen(false)}>
        <DialogTitle>
          Menu for {selectedHotel ? selectedHotel.name : ""}
        </DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ backgroundColor: "lavender" }}>
                    Dish name
                  </TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Taste</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {hotelData[selectedHotel]?.menu?.map((dish, dishIndex) => (
                  <TableRow key={dishIndex}>
                    <TableCell
                      sx={{
                        backgroundColor: "lavender",
                        borderTop: "1px solid white",
                      }}
                    >
                      {dish?.name}
                    </TableCell>
                    <TableCell>{dish?.price}</TableCell>
                    <TableCell>{dish?.taste}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HotelPage;
