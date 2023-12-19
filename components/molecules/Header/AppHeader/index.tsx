import { AppBar, Box, Container, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

export default function AppHeader() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={"/assets/images/man-in-hike.svg"} width={30} height={30} alt="" />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
