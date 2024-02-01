import { SxProps } from "@mui/material";
import React, { ReactEventHandler, ReactNode } from "react";
import { Menu as MuiMenu } from "@mui/icons-material";

type MenuProps = {
  id?: string;
  anchorEl?: HTMLElement | null;
  anchorOrigin?: { [k: string]: string };
  keepMounted?: boolean;
  transformOrigin?: { [k: string]: string };
  open?: boolean;
  onClose?: ReactEventHandler;
  sx?: SxProps;
  children: ReactNode;
};
export const Menu = (props: MenuProps) => {
  return <MuiMenu {...props}>{props.children}</MuiMenu>;
};
