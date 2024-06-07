"use client";
import {
  AppBar,
  Box,
  Grid,
  ImageList,
  ImageListItem,
  Link,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import {
  setCloseNavMenu,
  setOpenNavMenu,
} from "@/features/Header/appHeaderSlice";
import { RootState } from "@/rtk/store";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { Button } from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";

const pages = ["Events", "Instructions", "AboutUs", "FAQ"];

export default function AppHeader() {
  const dispatch = useAppDispatch();
  const { anchorElNav } = useAppSelector((state: RootState) => state.appHeader);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(setOpenNavMenu(event.currentTarget));
  };

  const handleCloseNavMenu = () => {
    dispatch(setCloseNavMenu());
  };

  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Grid
          container
          sx={{
            display: { md: "flex", sm: "none", xs: "none" },
            justifyContent: "space-between",
            backgroundColor: "#EFF7FE",
            alignItems: "center",
            paddingX: 2,
          }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Stack direction="row" spacing={2} sx={{ paddingLeft: "2rem" }}>
              <Link sx={{ textDecoration: "none" }} href="/">
                <Image
                  src={"/assets/images/trek-blazers.png"}
                  width={80}
                  height={80}
                  alt=""
                />
              </Link>
            </Stack>
            <Link sx={{ textDecoration: "none" }} href="/">
              <Typography
                sx={{
                  paddingLeft: 2,
                  fontFamily: "cursive",
                  color: "black",
                }}
                variant="h4"
              >
                Trek Blazers
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "space-between",
                gap: 3,
              }}
            >
              <Link
                href="/events"
                sx={{
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  color: "#000000",
                  cursor: "pointer",
                  "&:hover": { color: "#1976d2" },
                  "&:active": { color: "#0a2f54" },
                }}
              >
                EVENTS
              </Link>
              <Link
                href="/instructions"
                sx={{
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  color: "#000000",
                  cursor: "pointer",
                  "&:hover": { color: "#1976d2" },
                  "&:active": { color: "#0a2f54" },
                }}
              >
                INSTRUCTIONS
              </Link>
              <Link
                href="/about"
                sx={{
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  color: "#000000",
                  cursor: "pointer",
                  "&:hover": { color: "#1976d2" },
                  "&:active": { color: "#0a2f54" },
                }}
              >
                ABOUT US
              </Link>
              <Link
                href="/faq"
                sx={{
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  color: "#000000",
                  cursor: "pointer",
                  "&:hover": { color: "#1976d2" },
                  "&:active": { color: "#0a2f54" },
                }}
              >
                FAQ
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Grid container sx={{ display: { md: "none" } }}>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <ImageList>
              <ImageListItem sx={{ display: { md: "none" } }}>
                <Image
                  src={"/assets/images/trek-blazers.png"}
                  width={30}
                  height={30}
                  alt=""
                />
              </ImageListItem>
            </ImageList>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Box>
              <Button
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </Button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Events</Typography>
                  <Typography textAlign="center">INSTRUCTIONS</Typography>
                  <Typography textAlign="center">ABOUT US</Typography>
                  <Typography textAlign="center">FAQ</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
