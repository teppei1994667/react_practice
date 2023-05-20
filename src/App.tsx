import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";

const App = () => {
  return (
    <Box sx={{ width: "100vw", height: "100vh", background: "#fffaf0" }}>
      <Typography variant="h4" sx={{ textAlign: "center", paddingTop: "20px" }}>
        Reactの学習用スペース
      </Typography>
      <Home />
    </Box>
  );
};

export default App;
