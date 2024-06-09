"use client";
import {
  Typography as MuiTypography,
  SxProps,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";
import React, { ReactNode } from "react";

type TypographyProps = MuiTypographyProps & {
  children: ReactNode;
  sx?: SxProps;
};
const Typography = (props: TypographyProps) => {
  return (
    <MuiTypography
      textAlign={props.textAlign ?? "center"}
      variant={props.variant ?? "body1"}
      {...props}
    >
      {props.children}
    </MuiTypography>
  );
};

export default Typography;
