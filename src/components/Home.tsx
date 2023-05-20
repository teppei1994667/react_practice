import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { ReactHookForm } from "./ReactHookForm";
import { AgGrid } from "./AgGrid";

export const Home = () => {
	return (
		<BrowserRouter>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ textAlign: "center" }}>
            <Link to="/components/ReactHookForm">ReactHookForm</Link>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Link to="/components/AgGrid">AgGrid</Link>
          </Box>
        </Box>
        <Switch>
          <Route path="/components/ReactHookForm">
            <ReactHookForm />
          </Route>
          <Route path="/components/AgGrid">
            <AgGrid />
          </Route>
        </Switch>
      </BrowserRouter>
	)
}