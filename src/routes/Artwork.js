import React from "react";
import { Link } from "react-router";
import { Box, Container, Grid, Heading, Section, Text } from "@radix-ui/themes";

import "../style/Artwork.css";

import Starfield from "react-starfield";
import ArtworkCategoryTile from "../components/ArtworkCategoryTile";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

import Art1 from "../images/artwork/art1.jpg";
import Art2 from "../images/artwork/art2.jpg";
import Art3 from "../images/artwork/art3.jpg";
import Art4 from "../images/artwork/art4.jpg";
import Art5 from "../images/artwork/art5.jpg";

export default () => (
  <Box>
    <Starfield starCount={3000} speedFactor={0.03} backgroundColor="black" />
    <Box className="ScrollContainer">
      <Container className="ContentContainer">
        <Navigation />
        <Heading mt="9">Artwork</Heading>
        <Section>
          <Grid
            columns={{ initial: "2", sm: "2", md: "3" }}
            gap="5"
            width="auto"
          >
            <Link to="/artwork-current" className="ArtworkCategoryLink">
              <ArtworkCategoryTile
                backgroundImage={Art1}
                title="Current (Ongoing)"
              />
            </Link>
            <Link to="/artwork-automatic" className="ArtworkCategoryLink">
              <ArtworkCategoryTile backgroundImage={Art2} title="Automatic" />
            </Link>
            <Link
              to="/artwork-delegated-abstraction"
              className="ArtworkCategoryLink"
            >
              <ArtworkCategoryTile
                backgroundImage={Art3}
                title="Delegated Abstraction"
              />
            </Link>
            <Link to="/artwork-collages" className="ArtworkCategoryLink">
              <ArtworkCategoryTile backgroundImage={Art4} title="Collages" />
            </Link>
            <Link to="/artwork-older-work" className="ArtworkCategoryLink">
              <ArtworkCategoryTile backgroundImage={Art5} title="Older Work" />
            </Link>
          </Grid>
        </Section>
        <Footer />
      </Container>
    </Box>
  </Box>
);
