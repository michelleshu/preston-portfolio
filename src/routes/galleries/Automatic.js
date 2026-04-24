import React, { useState } from "react";
import { Link } from "react-router";
import { Box, Button, Container, Heading, Section } from "@radix-ui/themes";
import { CaretLeftIcon } from "@radix-ui/react-icons";

import Starfield from "react-starfield";
import ArtworkPhotoAlbum from "../../components/ArtworkPhotoAlbum";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

export default () => {
  return (
    <Box>
      <Starfield starCount={3000} speedFactor={0.03} backgroundColor="black" />
      <Box className="ScrollContainer">
        <Container className="ContentContainer">
          <Navigation />
          <Link to="/artwork">
            <Button
              variant="outline"
              color="gold"
              size="2"
              mt="9"
              style={{ cursor: "pointer" }}
            >
              <CaretLeftIcon />
              Back to all artwork
            </Button>
          </Link>
          <Heading mt="5">Automatic</Heading>
          <Section>
            <ArtworkPhotoAlbum gallery="automatic" targetRowHeight={300} />
          </Section>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};
