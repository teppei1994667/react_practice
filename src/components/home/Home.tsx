import { useEffect, useReducer, useState } from "react";
import { Typography, Button, Box, Grid } from "@mui/material";
import { initialState, countReducer } from "./Reducer";

//useStateで更新する
export const Home = () => {
  const [count, setCount] = useState(0);
  const [counterColor, setCounterColor] = useState("black");

  const countUp = () => {
    setCount((prev) => prev + 1);
  };

  const countDown = () => {
    setCount((prev) => prev - 1);
  };

  const countReset = () => {
    setCount((prev) => (prev = 0));
    setCounterColor((prev) => (prev = "black"))
  };

  useEffect(() => {
    if (count % 2 === 0 && count !== 0) {
      setCounterColor((prev) => (prev = "blue"));
    } else if (count % 2 === 1) {
      setCounterColor((prev) => (prev = "red"));
    }
  }, [count]);

  //useReducerで更新する
  const [state, dispatch] = useReducer(countReducer, initialState);
  const [reducerColor, setReducerColor] = useState("black");

  useEffect(() => {
    if (state.reducerCount === 0){
      setReducerColor((prev) => (prev = "black"));
    } else if (state.reducerCount % 2 === 0) {
      setReducerColor((prev) => (prev = "blue"));
    } else if (state.reducerCount % 2 === 1) {
      setReducerColor((prev) => (prev = "red"));
    }
  }, [state.reducerCount]);

  return (
    <>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item>
          <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
            これはuseStateを使って実装しました
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        sx={{ justifyContent: "center", marginTop: "10px" }}
      >
        <Grid item>
          <Button variant="outlined" onClick={countDown}>
            ➖
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={countUp}>
            ➕
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={countReset}>
            リセット
          </Button>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: "center", marginTop: "10px" }}>
        <Grid item>
          <Typography variant="h6" sx={{ color: counterColor, fontSize: `${count}px` }}>
            {count}
          </Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ justifyContent: "center", marginTop: "10px" }}>
        <Grid item>
          <Typography
            variant="subtitle1"
            sx={{ textAlign: "center", marginTop: "50px" }}
          >
            これはuseReducerを使って実装しました
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: "center", marginTop: "10px" }}>
        <Grid item>
          <Button
            variant="outlined"
            onClick={() => dispatch({ type: "decrement" })}
          >
            ➖
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            onClick={() => dispatch({ type: "increment" })}
            sx={{ marginLeft: "10px" }}
          >
            ➕
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            sx={{ marginLeft: "10px" }}
            onClick={() => dispatch({ type: "reset" })}
          >
            リセット
          </Button>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: "center", marginTop: "10px" }}>
        <Grid item>
          <Typography variant="h6" sx={{ color: reducerColor, fontSize: `${state.reducerCount}px` }}>
            {state.reducerCount}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
