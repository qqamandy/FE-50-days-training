import { Paper, Typography } from "@mui/material";

const Question = () => {
  return (
    <Paper elevation={3} sx={{ backgroundColor: "#e6e6e8", p: "25px" }}>
      <Typography variant="h5" fontWeight={700} sx={{ mb: "15px" }}>
        題目
      </Typography>
      <Typography>
        你正在開發一個處理數值資料的系統。請寫一個名為 `clamp`
        的函式，它需要三個參數：
        <Typography>- 一個數值 `number`</Typography>
        <Typography>- 一個最小值 `lower`</Typography>
        <Typography>- 一個最大值 `upper`</Typography> 此函式應確保輸出的
        `number` 始終落在指定的範圍内，包括最小值和最大值本身。你會如何實作這個
        `clamp` 呢?
      </Typography>
    </Paper>
  );
};

export default Question;
