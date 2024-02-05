import React from "react";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";

export const TrekImageCarousel = () => {
  const trekkingImages = [
    require("/public/assets/images/homepage/Image1.jpg"),
    require("/public/assets/images/homepage/Image2.jpg"),
    require("/public/assets/images/homepage/Image3.jpg"),
    require("/public/assets/images/homepage/Image4.jpg"),
  ];

  return (
    <Carousel autoPlay={false} navButtonsAlwaysVisible={true}>
      {trekkingImages.map((imageUrl, index) => (
        <div key={index}>
          <Image
            src={imageUrl}
            alt={`Trekking Image ${index + 1}`}
            style={{ width: "100%", height: "27rem", objectFit: "cover" }}
          />
        </div>
      ))}
    </Carousel>
  );
};
