import { TrekImageCarousel } from "@/components/organism/TrekImageCarousel";

const Images = [
  { src: "/public/assets/images/homepage/Image1.jpg", alt: "Image1", width: 1200, height: 600 },
  { src: "/public/assets/images/homepage/Image2.jpg", alt: "Image2", width: 1200, height: 600 },
  { src: "/public/assets/images/homepage/Image3.jpg", alt: "Image3", width: 1200, height: 600 },
  { src: "/public/assets/images/homepage/Image4.jpg", alt: "Image4", width: 1200, height: 600 },
];
const HomePage = () => {
  return (
    <>
      <TrekImageCarousel />
    </>
  );
};

export default HomePage;
