import React from "react";
import { Box, Container, Flex, Section, Text } from "@radix-ui/themes";

import Starfield from "react-starfield";
import Navigation from "../components/Navigation";

import "./Home.css";

export default () => (
  <Box style={{ height: "200vh" }}>
    <Starfield starCount={3000} speedFactor={0.03} backgroundColor="black" />
    <Container className="ContentContainer">
      <Navigation />
      <Section className="FullPageSection">
        <Box className="CenteredSectionContent">
          <Text
            as="div"
            className="MainText Blink"
            size="8"
            align="center"
            weight="bold"
          >
            WHAT DO YOU SEE WHEN YOU CLOSE YOUR EYES?
          </Text>
        </Box>
      </Section>
      <Section className="FullPageSection">
        <Box className="CenteredSectionContent" style={{ maxWidth: "860px" }}>
          <Flex direction="column" gap="4">
            <Text as="p" size="15px" align="center" weight="bold">
              Creating with watercolors and mixed media, Preston Owens Harris
              introduces the visionary alter ego Altensien Skybreaker, crafting
              a personal mythology that blurs the line between dream and ritual,
              belief and imagination.
            </Text>
            <Text as="p" size="15px" align="center">
              This work explores the origins of stories, symbols, and spiritual
              meaning. Drawing from dreams and the “closed-eye space,” Preston
              invites viewers into a world shaped by intuitive practices:
              automatic drawing, blindfolded mark-making, pareidolia, collage,
              and spontaneous abstraction. The guiding question, “What do you
              see when you close your eyes?”, becomes a portal into an imagined
              universe built on inner vision rather than external form.
            </Text>
            <Text as="p" size="15px" align="center">
              Through the development of Altensien Skybreaker, a character
              within this mythic universe, Preston builds an evolving world that
              questions the power of mythology, iconography, and the rituals
              that shape belief.
            </Text>
          </Flex>
        </Box>
      </Section>
    </Container>
  </Box>
);
