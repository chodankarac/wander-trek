"use client";

import { Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { staffData, trekWithUs } from "@/jsonFiles/aboutUs";

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
            At Trek blazers, we’re dedicated to crafting unforgettable trekking
            experiences for adventurers of all levels. Founded by passionate
            trekkers, we specialize in guiding you through stunning landscapes
            while ensuring safety, sustainability, and authentic cultural
            immersion.
            <br />
            Whether you’re a beginner or a seasoned hiker, we promise a journey
            that’s memorable, meaningful, and full of breathtaking moments.
          </p>
        </div>
        <div>
          <h2>Why trek with us?</h2>
          {trekWithUs.map(({ id, icon: Icon, title, description }) => {
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
                key={id}
              >
                <Icon style={{ color: "red" }} />
                &nbsp;
                <div>
                  <h3>{title}</h3>
                  <p style={{ fontSize: "1rem" }}>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <h2>Staff and Instructors</h2>
          {staffData.map(({ id, src, alt, name, designation, description }) => {
            return (
              <div
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
                <div
                  style={{ display: "flex", flexDirection: "column", gap: "1" }}
                >
                  <em style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                    {designation}
                  </em>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default About;
