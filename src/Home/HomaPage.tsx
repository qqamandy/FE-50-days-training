import React from "react";
import DashBoard from "./DashBoard";
import { Link, Typography } from "@mui/material";

const HomaPage = () => {
  return (
    <>
      <DashBoard />
      <Typography sx={{ my: "20px" }}>reference</Typography>

      <a
        href="https://explainthisio.notion.site/50-ebf0d22c9bc848cda26bc455bebffafc"
        target="_blank"
        rel="noreferrer"
        style={{display:'block'}}
      >
        50 題前端程式題大補帖 (上)
      </a>
      <a
        href="https://explainthisio.notion.site/50-e6a37b1b70e548bdb169acc93704e299"
        target="_blank"
        rel="noreferrer"
      >
        50 題前端程式題大補帖 (下)
      </a>
    </>
  );
};

export default HomaPage;
