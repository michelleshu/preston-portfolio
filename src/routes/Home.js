import React from "react";
import { Container, Flex, Section, Text } from "@radix-ui/themes";

import Starfield from "react-starfield";
import Navigation from "../components/Navigation";

import "./Home.css";

export default () => (
  <div>
    <Starfield starCount={3000} speedFactor={0.03} />
    <Container>
      <Flex align="center" justify="between" style={{ marginTop: "30px" }}>
        <Text size="4" weight="bold">
          落ちる天 ALTENSIEN SKYBREAKER
        </Text>
        <Navigation />
      </Flex>
      <Section mt="25vh">
        <Text as="div" className="blink" size="8" align="center" weight="bold">
          WHAT DO YOU SEE WHEN YOU CLOSE YOUR EYES?
        </Text>
      </Section>
    </Container>
  </div>
);
