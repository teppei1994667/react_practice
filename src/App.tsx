import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Typography, Box } from "@mui/material";

const App = () => {
  return (
    <Box sx={{ width: "100vw", height: "100vh", background: "#fffaf0" }}>
      <Typography variant="h4" sx={{ textAlign: "center", paddingTop: "20px" }}>
        Reactの学習用スペース
      </Typography>
    </Box>
  );
};

export default App;
