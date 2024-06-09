import React, { ReactNode } from "react";
import {
  Container as MuiContainer,
  ContainerProps as MuiContainerProps,
  SxProps,
} from "@mui/material";

type ContainerProps = MuiContainerProps & {
  sx?: SxProps;
  children: ReactNode;
};
const Container = (props: ContainerProps) => {
  return <MuiContainer {...props}>{props.children}</MuiContainer>;
};

export default Container;
