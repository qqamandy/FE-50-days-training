import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ArrowIcon = () => {
  const nanigate = useNavigate();
  return (
    <Box sx={{ my: "10px" }}>
      <IconButton onClick={() => nanigate("/")}>
        <i className="fa-solid fa-arrow-left"></i>
      </IconButton>
    </Box>
  );
};

export default ArrowIcon;
