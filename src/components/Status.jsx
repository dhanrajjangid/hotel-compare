import React, { useState } from "react";
import { Card, CardContent, Typography, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const cardStyles = {
  width: "300px",
  marginBottom: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const BudgetCard = ({ title, selected, to }) => {
  const navigate = useNavigate();
  const handleBudgetClick = (budget) => {
    navigate("/hotel-page");
  };
  return (
    <Card
      style={{
        ...cardStyles,
        cursor: "pointer",
        backgroundColor: "#F0F0F0",
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
      }}
    >
      <BudgetCard title="High Budget" />
      <BudgetCard title="Medium Budget" />
      <BudgetCard title="Low Budget" />
    </div>
  );
};

export default Status;
