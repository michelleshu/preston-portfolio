import React from "react";
import { Box, Container, Section, Text } from "@radix-ui/themes";

import Starfield from "react-starfield";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

import IconographyAccordion from "../../components/IconographyAccordion";

import "../../style/Main.css";

export default () => (
  <Box>
    <Starfield starCount={3000} speedFactor={0.03} backgroundColor="black" />
    <Box className="ScrollContainer">
      <Container className="ContentContainer">
        <Navigation />
        <Section>
          <IconographyAccordion />
        </Section>
        <Footer />
      </Container>
    </Box>
  </Box>
);
