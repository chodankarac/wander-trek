"use client";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Container from "@/components/atoms/Container";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useCallback, useEffect, useState } from "react";
import Typography from "@/components/atoms/Typography";
import axios from "axios";
import { AccordionDetails } from "@mui/material";
import { setFaqs } from "./faqSlice";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";

const FaqPage = () => {
  const dispatch = useAppDispatch();
  const { faqs } = useAppSelector((state) => state.faqPage);

  const fetchFaqs = useCallback(async () => {
    try {
      const response = await axios.get(`/api/faqs`);
      dispatch(setFaqs(response.data.faqs));
    } catch (error) {
      console.error("Failed to fetch faqs:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchFaqs();
  }, [fetchFaqs]);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        component="h1"
        align="center"
        sx={{ marginBottom: 3 }}
      >
        FAQ
      </Typography>
      {faqs &&
        faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1" textAlign="left">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </Container>
  );
};

export default FaqPage;
