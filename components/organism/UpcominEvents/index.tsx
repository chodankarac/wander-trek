import { Button } from "@/components/atoms/Button";
import { response } from "@/jsonFiles/TourismCards";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const UpcomingEvents = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained">Upcoming Event</Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            minWidth: 275,
            gap: 5,
            paddingTop: 5,
          }}
        >
          {response.result.map((value, index) => (
            <Card key={index}>
              <CardMedia
                sx={{ height: 140, width: 160 }}
                image={`/assets/images/homepage/${value.image}.jpg`}
                title="blue water hiking"
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography gutterBottom variant="h6" component="div">
                  {value.touristPlace}
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Grade:{value.grade}
                </Typography>
                <Typography gutterBottom variant="subtitle2" component="div">
                  Trek Fee:{value.fee}
                </Typography>
                <Button
                  sx={{
                    backgroundColor: "blue",
                    color: "white",
                    borderRadius: "3rem",
                    fontSize: "0.6rem",
                  }}
                  size="medium"
                >
                  More Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default UpcomingEvents;
