"use client";
import { Typography as MuiTypography } from "@mui/material";
import React, { ReactNode } from "react";

type TypographyProps = {
  children: ReactNode;
  textAlign?: "center" | "inherit" | "justify" | "left" | "right";
  variant?:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2";
  gutterBottom?: boolean;
  component?: string;
};
const Typography = (props: TypographyProps) => {
  return (
    <MuiTypography textAlign={props.textAlign ?? "center"} variant={props.variant ?? "body1"} {...props}>
      {props.children}
    </MuiTypography>
  );
};

export default Typography;
