import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function HotelCard({ name, address, backgroundImg }) {
  return (
    <Card sx={{ width: 345 }}>
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