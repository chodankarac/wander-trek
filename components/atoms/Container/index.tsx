import React, { ReactNode } from "react";
import { Container as MuiContainer, SxProps } from "@mui/material";

type ContainerProps = {
  sx?: SxProps;
  children: ReactNode;
};
const Container = (props: ContainerProps) => {
  return <MuiContainer>{props.children}</MuiContainer>;
};

export default Container;
