import { Button } from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import { response } from "@/jsonFiles/TourismCards";
import { Box, Card, CardContent, CardMedia } from "@mui/material";
import React from "react";

const UpcomingEvents = () => {
  return (
      <Box sx={{ textAlign:"center",padding:"20px"}}>
          <Typography variant="h4" sx={{fontWeight:"bold",marginBottom:3}}>Upcoming Treks</Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap:"wrap",
            justifyContent: "center",
            gap:"4"
          }}
        >
          {response.result.map((value, index) => (
            <Card key={index} sx={{width:300,boxShadow:3,borderradius:"10px","&:hover":{transform:"scale(1.05)",transition:"0.3s"}}}>
              <CardMedia
                sx={{ height: 180 }}
                image={`/assets/images/homepage/${value.image}.jpg`}
                title={value.touristPlace}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{ fontWeight: "bold",textAlign:"center" }}
                >
                  {value.touristPlace}
                </Typography>
                <Typography gutterBottom variant="body1">
                  Grade:<b>{value.grade}</b>
                </Typography>
                <Typography gutterBottom variant="body1">
                  Trek Fee:<b>{value.fee}</b>
                </Typography>
                <Box sx={{textAlign:"center",marginTop:2}}>
                <Button
                  variant="contained"
                  size="medium"
                  sx={{ borderRadius: "3rem" }}
                >
                  More Details
                </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
      </Box>
  );
};

export default UpcomingEvents;
