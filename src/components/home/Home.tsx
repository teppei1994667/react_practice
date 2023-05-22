import { useState } from "react";
import { Typography, Button, Box } from "@mui/material";

export const Home = () => {
  const [count, setCount] = useState(0);
	const countUp = () => {
		setCount(prev => prev + 1)
	}
	const countReset = () => {
		setCount(prev => prev = 0)
	}
  return (
    <Box sx={{textAlign: "center"}}>
      <Button variant="outlined" onClick={countUp}>カウントアップ</Button>
			<Button variant="outlined" sx={{ marginLeft: "10px" }} onClick={countReset}>リセット</Button>
      <Typography variant="h6">{count}</Typography>
    </Box>
  );
};
