import { useEffect, useReducer, useState } from "react";
import { Typography, Button, Box } from "@mui/material";
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
	const [reducerColor, setReducerColor] = useState("black")

	useEffect(() => {
		if (state.reducerCount % 2 === 0 && state.reducerCount !== 0) {
			setReducerColor((prev) => prev = "blue")
		} else if (state.reducerCount % 2 === 1) {
			setReducerColor((prev) => prev = "red")
		} 
	}, [state.reducerCount])

  return (
    <>
      <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
        これはuseStateを使って実装しました
      </Typography>
      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <Button variant="outlined" onClick={countDown}>
          ➖
        </Button>
        <Button
          variant="outlined"
          onClick={countUp}
          sx={{ marginLeft: "10px" }}
        >
          ➕
        </Button>
        <Button
          variant="outlined"
          sx={{ marginLeft: "10px" }}
          onClick={countReset}
        >
          リセット
        </Button>
        <Typography variant="h6" sx={{ color: counterColor }}>
          {count}
        </Typography>
      </Box>

      <Typography
        variant="subtitle1"
        sx={{ textAlign: "center", marginTop: "50px" }}
      >
        これはuseReducerを使って実装しました
      </Typography>
      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <Button
          variant="outlined"
          onClick={() => dispatch({ type: "decrement" })}
        >
          ➖
        </Button>
        <Button
          variant="outlined"
          onClick={() => dispatch({ type: "increment" })}
          sx={{ marginLeft: "10px" }}
        >
          ➕
        </Button>
        <Button
          variant="outlined"
          sx={{ marginLeft: "10px" }}
          onClick={() => dispatch({ type: "reset" })}
        >
          リセット
        </Button>
        <Typography variant="h6" sx={{color: reducerColor}}>
          {state.reducerCount}
        </Typography>
      </Box>
    </>
  );
};
