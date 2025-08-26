import React from "react";
import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";

import Starfield from "react-starfield";
import AudioPlayer from "../components/AudioPlayer";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

import "../style/Main.css";

export default () => {
  return (
    <Box>
      <Starfield starCount={3000} speedFactor={0.03} backgroundColor="black" />
      <Box className="ScrollContainer">
        <Container className="ContentContainer">
          <Navigation />
          <Heading mt="9" mb="4">
            Dream Stories
          </Heading>
          <Box>
            <Flex direction="column" gap="4">
              <Text as="p">
                Below are voice recordings of myself, either as Preston or
                Altensien Skybreaker, sharing an archive of my dreams. These are
                raw, unfiltered moments, captured either immediately upon waking
                or during closed-eye shifts. Each recording is labeled with the
                date it was made and uploaded, along with a title reflecting its
                events.
              </Text>
              <Text as="p">
                Over time, these stories may grow into pieces of the Infinity
                Planes, transforming into their own art forms and taking on new
                mediums to explore my inner world. I invite you into this space
                and am excited to share my imagination. A true glimpse into what
                my dreams and closed-eye space hold.
              </Text>
            </Flex>
            <AudioPlayer />
          </Box>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};
