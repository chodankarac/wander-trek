import { Box, Card as MuiCard, SxProps } from "@mui/material";
import React, { ReactNode } from "react";
type CardProps = {
  sx?: SxProps;
  children: ReactNode;
};
const Card = (props: CardProps) => {
  return (
    <Box {...props}>
      <MuiCard variant="outlined">{props.children}</MuiCard>
    </Box>
  );
};

export default Card;
