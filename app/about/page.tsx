"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import TerrainIcon from "@mui/icons-material/Terrain";
import PersonIcon from "@mui/icons-material/Person";
import { HealthAndSafety } from "@mui/icons-material";

const About = () => {
  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          mt: 4,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom align="center">
          ABOUT US
        </Typography>
        <Image
          src={"/assets/images/homepage/guy-trek.jpg"}
          alt="image"
          height={300}
          width={300}
          style={{ width: "100%", height: "14 rem" }}
        ></Image>
        <div>
          <h2>About us</h2>
          <p style={{ fontSize: "1rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eius
            distinctio expedita fuga praesentium incidunt perspiciatis magnam
            velit in at repellat, ex enim necessitatibus omnis quos. Tempora
            numquam soluta repudiandae?
          </p>
        </div>
        <div>
          <h2>Why trek with us?</h2>
          <p style={{ fontSize: "1rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eius
            distinctio expedita fuga praesentium incidunt perspiciatis magnam
            velit in at repellat, ex enim necessitatibus omnis quos. Tempora
            numquam soluta repudiandae?
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <TerrainIcon style={{ color: "red" }} />
            &nbsp;
            <div>
              <h3>Varied Terrain and Scenic Routes</h3>
              <p style={{ fontSize: "1rem" }}>
                We are offering a wide variety of trekking routes, ranging from
                easy, scenic paths to challenging alpine terrains. You will
                experience breathtaking landscapes, forests, waterfalls, and
                iconic landmarks along the way.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <PersonIcon style={{ color: "red" }} />
            &nbsp;
            <div>
              <h3>Experienced Guides</h3>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1 rem",
                }}
              >
                We are providing highly experienced and certified trekking
                guides with extensive local knowledge to ensure your trek is
                safe, informative, and enjoyable. Our guides share insights into
                the culture, nature, and wildlife of the region.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <HealthAndSafety style={{ color: "red" }} />
            &nbsp;
            <div>
              <h3>Safety and First Aid Preparedness</h3>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1 rem",
                }}
              >
                We are ensuring your safety on every trek with our well-trained
                staff who are equipped with first aid knowledge and emergency
                gear. Our team conducts thorough safety briefings and has
                contingency plans in place for all treks.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <HealthAndSafety style={{ color: "red" }} />
            &nbsp;
            <div>
              <h3>Trek for All Seasons</h3>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1 rem",
                }}
              >
                We are offering year-round trekking experiences, with routes and
                itineraries tailored to the unique conditions of each season.
                Whether its summer, winter, or the monsoon, we have treks suited
                to every time of year.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
