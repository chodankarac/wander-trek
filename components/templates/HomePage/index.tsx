import { Box } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url('/assets/images/hiking.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default HomePage;
