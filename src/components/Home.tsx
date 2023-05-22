import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { ReactHookForm } from "./ReactHookForm";
import { AgGrid } from "./AgGrid";

export const Home = () => {
  return (
		<Typography variant="h6">
		このページはHome画面です
	</Typography>
  );
};
