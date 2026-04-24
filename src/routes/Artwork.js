import React from "react";
import { Link } from "react-router";
import { Box, Container, Flex, Grid, Heading, Section, Text } from "@radix-ui/themes";

import "../style/Artwork.css";

import Starfield from "react-starfield";
import ArtworkCategoryTile from "../components/ArtworkCategoryTile";
import ArtworkPhotoAlbum from "../components/ArtworkPhotoAlbum";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

import { loadGallery } from "../utils/loadGallery";

export default () => { 
  return (
    <Box>
      <Starfield starCount={3000} speedFactor={0.03} backgroundColor="black" />
      <Box className="ScrollContainer">
        <Container className="ContentContainer">
          <Navigation />
          <Heading mt="9" mb="6">Collections</Heading>
          <Grid
            columns={{ initial: "3", sm: "3", md: "6" }}
            gap="5"
            width="auto"
          >
            <Link to="/artwork-current" className="ArtworkCategoryLink">
              <Flex className="ArtworkCategoryContainer" align="center" justify="center">
                <Text className="ArtworkCategoryText">Current</Text>
              </Flex>
            </Link>
            <Link to="/artwork-automatic" className="ArtworkCategoryLink">
              <Flex className="ArtworkCategoryContainer" align="center" justify="center">
                <Text className="ArtworkCategoryText">Automatic</Text>
              </Flex>
            </Link>
            <Link
              to="/artwork-abstraction"
              className="ArtworkCategoryLink"
            >
              <Flex className="ArtworkCategoryContainer" align="center" justify="center">
                <Text className="ArtworkCategoryText">Abstraction</Text>
              </Flex>
            </Link>
            <Link to="/artwork-collages" className="ArtworkCategoryLink">
              <Flex className="ArtworkCategoryContainer" align="center" justify="center">
                <Text className="ArtworkCategoryText">Collages</Text>
              </Flex>
            </Link>
            <Link to="/artwork-printmaking" className="ArtworkCategoryLink">
              <Flex className="ArtworkCategoryContainer" align="center" justify="center">
                <Text className="ArtworkCategoryText">Printmaking</Text>
              </Flex>
            </Link>
            <Link to="/artwork-older-work" className="ArtworkCategoryLink">
              <Flex className="ArtworkCategoryContainer" align="center" justify="center">
                <Text className="ArtworkCategoryText">Older Work</Text>
              </Flex>
            </Link>
          </Grid>
          <Heading mt="6" mb="6">Works in Progress</Heading>
          <Box mb="9">
            <ArtworkPhotoAlbum gallery="main" targetRowHeight={300} />
          </Box>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
}
