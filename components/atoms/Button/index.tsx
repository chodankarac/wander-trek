import React, { ReactEventHandler, ReactNode } from "react";
import { Button as MuiButton, SxProps } from "@mui/material";
type ButtonProps = {
  sx?: SxProps;
  children: ReactNode;
  size?: "small" | "medium" | "large";
  onClick?: ReactEventHandler;
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
};
export const Button = (props: ButtonProps) => {
  return <MuiButton {...props}>{props.children}</MuiButton>;
};
