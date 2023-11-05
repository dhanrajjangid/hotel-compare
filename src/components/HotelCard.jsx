import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function HotelCard({ name, address, backgroundImg }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ width: 345 }} onClick={() => navigate("/details")}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={backgroundImg}
      />
      <CardContent sx={{ backgroundColor: "#EEF0F0" }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ***** 1920, Reviews
        </Typography>
      </CardContent>
    </Card>
  );
}
