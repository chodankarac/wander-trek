"use client";
import Container from "@/components/atoms/Container";
import Typography from "@/components/atoms/Typography";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
} from "@mui/material";
import { RootState } from "@reduxjs/toolkit/query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { setRules } from "./instructionSlice";

const Instructions = () => {
  // const [rules, setRules] = useState<Rule[]>([]);
  const dispatch = useAppDispatch();
  const rules = useAppSelector(
    (state: RootState) => state.instructionPage.rules
  );

  const fetchRules = async () => {
    try {
      const response = await axios.get(`/api/rules`);
      dispatch(setRules(response.data.rules));
    } catch (error) {
      console.error("Failed to fetch rules:", error);
    }
  };

  useEffect(() => {
    fetchRules();
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Rules and Regulations
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <List>
        {rules.map((rule) => (
          <ListItem
            key={rule.id}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card variant="outlined" sx={{ width: "100%", mb: 2 }}>
              <CardHeader
                title={
                  <Typography variant="h6" component="div">
                    {rule.title}
                  </Typography>
                }
              />
              <CardContent>
                <Typography variant="body1" color="textSecondary">
                  {rule.description}
                </Typography>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Instructions;
