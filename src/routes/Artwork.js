import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Box, Container, Flex, Grid, Heading, Section, Text } from "@radix-ui/themes";
import { RowsPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { Captions, Zoom } from "yet-another-react-lightbox/plugins";

import "../style/Artwork.css";
import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import Starfield from "react-starfield";
import ArtworkCategoryTile from "../components/ArtworkCategoryTile";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

import Art1 from "../images/artwork/art1.jpg";
import Art2 from "../images/artwork/art2.jpg";
import Art3 from "../images/artwork/art3.jpg";
import Art4 from "../images/artwork/art4.jpg";
import Art5 from "../images/artwork/art5.jpg";

export default () => { 
  const [photos, setPhotos] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    fetch(`/content/galleries/main.json`)
      .then((res) => res.json())
      .then((data) => {
        debugger;
        const formatted = (data.items || []).map((item) => ({
          src: item.image,
          width: item.width || 1200,
          height: item.height || 900,
          alt: item.alt || item.title || "",
          title: item.title,
          description: item.description,
          year: item.year,
          medium: item.medium,
          dimensions: item.dimensions,
        }));

        console.log(formatted);

        setPhotos(formatted);
      })
      .catch((err) => console.error(`Failed to load gallery:`, err));
  });

  return (
    <Box>
      <Starfield starCount={3000} speedFactor={0.03} backgroundColor="black" />
      <Box className="ScrollContainer">
        <Container className="ContentContainer">
          <Navigation />
          <Heading mt="9" mb="6">Collections</Heading>
          <Grid
            columns={{ initial: "6", sm: "3", md: "6" }}
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
              to="/artwork-delegated-abstraction"
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
            <Link to="/artwork-older-work" className="ArtworkCategoryLink">
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
          <Heading mt="6" mb="6">Feed</Heading>
          <RowsPhotoAlbum
                photos={photos}
                targetRowHeight={400}
                onClick={({ index: current }) => setIndex(current)}
              />
              <Lightbox
                index={index}
                slides={photos}
                open={index >= 0}
                plugins={[Captions, Zoom]}
                close={() => setIndex(-1)}
                carousel={{ padding: "64px 16px" }}
                styles={{ slide: { maxHeight: "calc(100% - 120px" } }}
              />
          <Footer />
        </Container>
      </Box>
    </Box>
  );
}
