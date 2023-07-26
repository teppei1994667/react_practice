import { useState } from "react";
import { Typography, Box, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { TypeScriptPractice } from "./pages/typeScript/TypeScriptPractice";
import { ReactHookForm } from "./pages/reactHookForm/ReactHookForm";
import { AgGrid } from "./pages/agGrid/AgGrid";

const App = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <Box sx={{ width: "100vw", height: "100vh", background: "#fffaf0" }}>
      <Typography variant="h4" sx={{ textAlign: "center", paddingTop: "20px" }}>
        Reactの学習用スペース
      </Typography>
      <MenuIcon onClick={() => setDrawerOpened(true)} sx={{ cursor: "pointer"}} />
      <BrowserRouter>
        <Drawer
          anchor={"left"}
          open={drawerOpened}
          onClick={() => setDrawerOpened(false)}
        >
          <Box sx={{ textAlign: "center", width: "300px", height: "100%", background: '#fffaf0', paddingTop: "50px" }}>
            <Box sx={{ textAlign: "center" }}>
              <Link to="/pages/Home">Home</Link>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Link to="/pages/TypeScriptPractice">TypeScriptPractice</Link>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Link to="/pages/ReactHookForm">ReactHookForm</Link>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Link to="/pages/AgGrid">AgGrid</Link>
            </Box>
          </Box>
        </Drawer>
        <Switch>
          <Route path="/pages/Home">
            <Home />
          </Route>
          <Route path="/pages/TypeScriptPractice">
            <TypeScriptPractice />
          </Route>
          <Route path="/pages/ReactHookForm">
            <ReactHookForm />
          </Route>
          <Route path="/pages/AgGrid">
            <AgGrid />
          </Route>
        </Switch>
      </BrowserRouter>
    </Box>
  );
};

export default App;
