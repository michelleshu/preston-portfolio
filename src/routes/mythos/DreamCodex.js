import React from "react";
import { Box, Container, Grid, Heading, Section, Text } from "@radix-ui/themes";

import Starfield from "react-starfield";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

import "../../style/Main.css";
import DreamCodexTile from "../../components/DreamCodexTile";

export default () => (
  <Box>
    <Starfield starCount={3000} speedFactor={0.03} backgroundColor="black" />
    <Box className="ScrollContainer">
      <Container className="ContentContainer">
        <Navigation />
        <Heading mt="9" mb="3">
          Dream Codex
        </Heading>

        <Section>
          <Grid
            columns={{ initial: "2", sm: "3", md: "6" }}
            gap="5"
            width="auto"
          >
            <DreamCodexTile color="#EC8E7B" title="FALL" />
            <DreamCodexTile color="#BE93E4" title="VOID" />
            <DreamCodexTile color="#5EB1EF" title="CLOUD" />
            <DreamCodexTile color="#E2A336" title="LIGHTNING" />
            <DreamCodexTile color="#EC9455" title="STAR" />
            <DreamCodexTile color="#5BB98B" title="COSMOS" />
          </Grid>
        </Section>
        <Footer />
      </Container>
    </Box>
  </Box>
);
