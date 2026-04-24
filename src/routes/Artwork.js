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
import "../style/LightboxOverrides.css";

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

  function getImageDimensions(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.onload = () => {
        resolve({
          width: img.naturalWidth,
          height: img.naturalHeight,
        });
      };

      img.onerror = reject;

      img.src = src;
    });
  }

  useEffect(() => {
    async function loadGallery() {
      const res = await fetch("/content/galleries/main.json");
      const data = await res.json();

      const photoData = await Promise.all(
        (data.items || []).map(async (item) => {
          const dimensions = await getImageDimensions(item.image);

          return {
            src: item.image,
            width: dimensions.width,
            height: dimensions.height,
            alt: item.alt || item.title || "",
            title: item.title,
            description: "Test line\n "+item.description,
          };
        })
      );

      setPhotos(photoData);
    }

    loadGallery().catch(console.error);
  });

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
          <Heading mt="6" mb="6">Works in Progress</Heading>
          <Box mb="6">
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
            </Box>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
}
