import { useEffect, useState } from "react";
import { Typography, Button, Box } from "@mui/material";

export const Home = () => {
  const [count, setCount] = useState(0);
	const [counterColor, setCounterColor] = useState("black")
	
  const countUp = () => {
    setCount((prev) => prev + 1);
  };

  const countReset = () => {
    setCount((prev) => (prev = 0));
  };

	useEffect(() => {
		if (count % 2 === 0 && count !== 0) {
			setCounterColor((prev) => prev = "blue")
		} else if (count % 2 === 1) {
			setCounterColor((prev) => prev = "red")
		} 
	}, [count])

  return (
    <>
      <Typography variant="subtitle1" sx={{ textAlign: "center"}}>これはuseStateを使って実装しました</Typography>
      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <Button variant="outlined" onClick={countUp}>
          カウントアップ
        </Button>
        <Button
          variant="outlined"
          sx={{ marginLeft: "10px" }}
          onClick={countReset}
        >
          リセット
        </Button>
        <Typography variant="h6" sx={{ color: counterColor}}>{count}</Typography>
      </Box>

			<Typography variant="subtitle1" sx={{ textAlign: "center", marginTop: "50px"}}>これはReduxを使って実装しました</Typography>
			
    </>
  );
};
