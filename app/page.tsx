import { Button } from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import Typography from "@/components/atoms/Typography";
import { TrekImageCarousel } from "@/components/organism/TrekImageCarousel";
import { Box, CardContent, CardMedia } from "@mui/material";

export default function Home() {
  return (
    <>
      <TrekImageCarousel />
      <Box sx={{ display: "flex", justifyContent: "center", minWidth: 275 }}>
        <Card>
          <CardMedia
            sx={{ height: 140, width: 160 }}
            image="/assets/images/homepage/Image1.jpg"
            title="blue water hiking"
          />
          <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Typography gutterBottom variant="h6" component="div">
              Tikona Fort
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
              Grade:Easy
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div">
              Trek Fee:$850
            </Typography>
            <Button
              sx={{ backgroundColor: "blue", color: "white", borderRadius: "3rem", fontSize: "0.6rem" }}
              size="medium"
            >
              More Details
            </Button>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
