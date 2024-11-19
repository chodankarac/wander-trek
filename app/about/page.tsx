"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { staffData, trekWithUs } from "@/jsonFiles/aboutUs";

const About = () => {
  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          gap: 4,
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="center"
          sx={{ marginTop: 2 }}
        >
          ABOUT US
        </Typography>
        <Image
          src={"/assets/images/homepage/guy-trek.jpg"}
          alt="image"
          height={300}
          width={300}
          style={{ width: "100%", height: "14 rem" }}
        ></Image>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            About us
          </Typography>
          <Typography style={{ fontSize: "1rem" }}>
            At Trek blazers, we’re dedicated to crafting unforgettable trekking
            experiences for adventurers of all levels. Founded by passionate
            trekkers, we specialize in guiding you through stunning landscapes
            while ensuring safety, sustainability, and authentic cultural
            immersion.
            <br />
            Whether you’re a beginner or a seasoned hiker, we promise a journey
            that’s memorable, meaningful, and full of breathtaking moments.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Why trek with us?
          </Typography>
          <Grid container spacing={3} sx={{ marginTop: 1 }}>
            {trekWithUs.map(({ id, icon: Icon, title, description }) => {
              return (
                <Box key={id} sx={{ display: "flex", gap: 2 }}>
                  <Icon style={{ color: "red" }} />
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
                    <Typography variant="h6">{title}</Typography>
                    <Typography component={"p"} style={{ fontSize: "1rem" }}>
                      {description}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Grid>
        </Box>
        <Box>
          <Typography variant="h5">Staff and Instructors</Typography>
          {staffData.map(({ id, src, alt, name, designation, description }) => {
            return (
              <Box
                style={{ display: "flex", gap: 30, alignItems: "center" }}
                key={id}
              >
                <Image
                  src={src}
                  alt={alt}
                  height={80}
                  width={80}
                  style={{ borderRadius: "50%" }}
                />
                <Box
                  style={{ display: "flex", flexDirection: "column", gap: "1" }}
                >
                  <em style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                    {designation}
                  </em>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </>
  );
};

export default About;
