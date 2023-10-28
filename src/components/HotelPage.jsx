import React, { useEffect, useState } from "react";
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
import { hotelData } from "../const/HotelData";

const HotelPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCompareOpen, setCompareOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(0);
  const [dishNames, setDishNames] = useState([]);

  useEffect(() => {
    let newArr = [...hotelData[0].menu, ...hotelData[1].menu];
    let myArray = newArr?.map((item) => item.name);
    myArray = [...new Set(myArray)];
    setDishNames(myArray);
  }, [hotelData]);

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
      {hotelData.map((hotel, index) => (
        <Card key={index} sx={{ margin: "10px 0", backgroundColor: "#f7f7f7" }}>
          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box>
              <Typography variant="h4">{hotel.name}</Typography>
              <Typography variant="h6">Rating: {hotel.rating}</Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                color="primary"
                onClick={() => toggleMenu(index)}
              >
                View Menu
              </Button>
            </Box>
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
