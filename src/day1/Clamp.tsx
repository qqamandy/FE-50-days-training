import { useState } from "react";
import ArrowIcon from "../ArrowIcon";
import Question from "./Question";
import { Stack, TextField, Typography } from "@mui/material";

const Clamp = () => {
  const [upper, setUpper] = useState(0);
  const [number, setNumber] = useState(0);
  const [lower, setLower] = useState(0);

  const clamp = (number: number, lower: number, upper: number) => {
    if (number < lower) {
      return lower;
    } else if (number > upper) {
      return upper;
    } else {
      return number;
    }
  };

  const showResultHandler = () => clamp(number, lower, upper);
  return (
    <>
      <ArrowIcon />
      <Question />
      <Stack sx={{ width: "50%", mt: "30px" }} spacing={2}>
        <TextField
          label="upper"
          value={upper}
          type="number"
          onChange={(e) => setUpper(parseInt(e.target.value))}
        />
        <TextField
          label="number"
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <TextField
          label="lower"
          type="number"
          value={lower}
          onChange={(e) => setLower(parseInt(e.target.value))}
        />

        <Typography>Result</Typography>
        <Typography>{showResultHandler()}</Typography>
      </Stack>
    </>
  );
};

export default Clamp;
