"use client";
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import { Padding } from "@mui/icons-material";

export const TrekImageCarousel = () => {
  const trekkingImages = [
    "/assets/images/homepage/Image1.jpg",
    "/assets/images/homepage/Image2.jpg",
    "/assets/images/homepage/Image3.jpg",
    "/assets/images/homepage/Image4.jpg",
  ];

  return (
    <>
      <Carousel autoPlay={false} navButtonsAlwaysVisible={true}>
        {trekkingImages.map((imageUrl, index) => (
          <div key={index}>
            <Image
              src={imageUrl}
              alt={`Trekking Image ${index + 1}`}
              width={300}
              height={500}
              style={{
                width: "100%",
                height: "21rem",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};
