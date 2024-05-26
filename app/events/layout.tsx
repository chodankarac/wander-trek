import { Box } from "@mui/material";
import React from "react";

type EventLayoutProps = { children: React.ReactNode };

const EventLayout = ({ children }: EventLayoutProps) => {
  return <Box>{children}</Box>;
};

export default EventLayout;
