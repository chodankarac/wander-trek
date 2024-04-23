import { TrekImageCarousel } from "@/components/organism/TrekImageCarousel";
import UpcomingEvents from "@/components/organism/UpcominEvents";
import { Padding } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <TrekImageCarousel />
      <UpcomingEvents />
    </Box>
  );
}
