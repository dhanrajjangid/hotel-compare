import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function CustomAppBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#121212" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
            flexGrow: 1, // Pushes buttons to the right
          }}
        >
          Hotel Wala
        </Typography>
        <Button component={Link} to="/" color="inherit">
          City
        </Button>
        <Button component={Link} to="/status" color="inherit">
          Status
        </Button>
        <Button component={Link} to="/hotel-page" color="inherit">
          Hotel Page
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;
