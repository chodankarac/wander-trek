import { Typography as MuiTypography } from "@mui/material";
import React, { ReactNode } from "react";

type TypographyProps = {
  children: ReactNode;
  textAlign?: "center" | "inherit" | "justify" | "left" | "right";
};
const Typography = (props: TypographyProps) => {
  return <MuiTypography textAlign={props.textAlign ?? "center"}>{props.children}</MuiTypography>;
};

export default Typography;
