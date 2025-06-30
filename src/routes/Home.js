import React from "react";
import { Container, Flex, Section, Text } from "@radix-ui/themes";

import Starfield from "react-starfield";
import Navigation from "../components/Navigation";

export default () => (
  <div>
    <Starfield starCount={3000} speedFactor={0.03} />
    <Container>
      <Flex align="center" justify="between" style={{ marginTop: "30px" }}>
        <Text size="4" weight="bold">
          Preston Harris
        </Text>
        <Navigation />
      </Flex>
      <Section mt="20vh">
        <Text as="div" size="9" align="center" weight="light">
          I'm{" "}
          <Text as="span" weight="bold">
            Preston Harris
          </Text>
          . Welcome to my online portfolio, where myths and dreams intersect.
        </Text>
      </Section>
    </Container>
  </div>
);
