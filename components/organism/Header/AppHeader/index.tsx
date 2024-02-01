import { AppBar, Box, Container, Grid, ImageList, ImageListItem, Menu, MenuItem, Stack, Toolbar } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { setCloseNavMenu, setOpenNavMenu } from "@/features/Header/appHeaderSlice";
import { RootState } from "@/app/store";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
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
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid
            container
            sx={{
              display: { md: "flex", sm: "none", xs: "none" },
              justifyContent: "space-between",
            }}
            spacing={2}
          >
            <Grid item sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <Stack direction="row" spacing={2}>
                <ImageList variant="standard" cols={1}>
                  <ImageListItem>
                    <Image src={"/assets/images/man-in-hike.svg"} width={30} height={30} alt="" />
                  </ImageListItem>
                </ImageList>
              </Stack>
            </Grid>
            <Grid item>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "space-between" }}>
                {pages.map((page) => (
                  <Button key={page} sx={{ my: 2, display: "block", color: "white" }}>
                    {page}
                  </Button>
                ))}
              </Box>
            </Grid>
          </Grid>
          <Grid container sx={{ display: { md: "none" } }}>
            <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <ImageList>
                <ImageListItem sx={{ display: { md: "none" } }}>
                  <Image src={"/assets/images/man-in-hike.svg"} width={30} height={30} alt="" />
                </ImageListItem>
              </ImageList>
            </Grid>
            <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
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
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
