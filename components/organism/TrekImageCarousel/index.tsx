"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

export const TrekImageCarousel = () => {
  const trekkingImages = [
   {url:"/assets/images/homepage/Image1.jpg",caption:"Explore the Peaks"},
   {url:"/assets/images/homepage/Image2.jpg",caption:"Adventure Awaits"},
   {url:"/assets/images/homepage/Image3.jpg",caption:"Into the Wild"},
   {url:"/assets/images/homepage/Image4.jpg",caption:"Nature's Beauty"},
  ];

  return (
    <Box sx={{position:"relative"}}>
      <Carousel autoPlay={false} interval={3000} navButtonsAlwaysVisible={true} animation="fade" indicators={false}>
        {trekkingImages.map((image, index) => (
          <Box key={index} sx={{position:"relative"}}>
            <Image
              src={image.url}
              alt={`Trekking Image ${index + 1}`}
              width={1200}
              height={600}
              style={{
                width: "100%",
                height: "30rem",
                objectFit: "cover",
              }}
            />
            <Typography
            variant="h4"
            sx={{
              position:"absolute",bottom:"10%",left:"5%",color:"white",backgroundColor:"rgba(0,0,0,0.5)",padding:"10px 20px",borderRadius:"8px",
            }}
            >
              {image.caption}
            </Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};
