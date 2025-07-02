import React from "react";
import { Container, Section, Text } from "@radix-ui/themes";

import Starfield from "react-starfield";
import Navigation from "../components/Navigation";

import "./Home.css";

export default () => (
  <div>
    <Starfield starCount={3000} speedFactor={0.03} />
    <Container className="ContentContainer">
      <Navigation />
      <Section className="CenteredSection">
        <Text
          as="div"
          className="MainText Blink"
          size="8"
          align="center"
          weight="bold"
        >
          WHAT DO YOU SEE WHEN YOU CLOSE YOUR EYES?
        </Text>
      </Section>
    </Container>
  </div>
);
