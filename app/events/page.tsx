import UpcomingEvents from "@/components/organism/UpcominEvents";
import { Box } from "@mui/material";
import React from "react";

const Events = () => {
  return (
    <Box
      sx={{
        marginTop: "15rem",
        // backgroundImage: "url('images/event-background.jpg)",
      }}
    >
      <UpcomingEvents />
    </Box>
  );
};

export default Events;
