import React, { useState } from "react";
import { Card, CardContent, Typography, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const cardStyles = {
  width: "100%",
  marginBottom: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  WebkitBackdropFilter: "blur(10px)", // Safari 9+
  backdropFilter: "blur(40px)", // Chrome and Opera
  boxShadow: "0px 10px 15px 10px rgba(0, 0, 0, 0.15)",
  backgroundColor: "rgba(228, 228, 228, 0.15)",
};

const BudgetCard = ({ title }) => {
  const navigate = useNavigate();
  const handleBudgetClick = (budget) => {
    navigate("/hotel-page");
  };
  return (
    <Card
      style={{
        ...cardStyles,
        cursor: "pointer",
        borderRadius: "10px",
        height: "100px",
      }}
      onClick={() => handleBudgetClick()}
    >
      <CardActionArea>
        <CardContent>
          <Typography variant="h6" component="div" align="center">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const Status = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 50,
        textAlign: "left",
      }}
    >
      <Typography variant="h3">Select Your Budget</Typography>

      <BudgetCard title="High Budget" />
      <BudgetCard title="Medium Budget" />
      <BudgetCard title="Low Budget" />
    </div>
  );
};

export default Status;
