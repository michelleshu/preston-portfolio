import React, { useState } from "react";
import { Link } from "react-router";
import { Box, Button, Container, Heading, Section } from "@radix-ui/themes";
import { CaretLeftIcon } from "@radix-ui/react-icons";
import { RowsPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { Captions, Zoom } from "yet-another-react-lightbox/plugins";

import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import Starfield from "react-starfield";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

import Art1 from "../../images/artwork/art1.jpg";
import Art2 from "../../images/artwork/art2.jpg";
import Art3 from "../../images/artwork/art3.jpg";
import Art4 from "../../images/artwork/art4.jpg";
import Art5 from "../../images/artwork/art5.jpg";
import Art6 from "../../images/artwork/art6.jpg";
import Art7 from "../../images/artwork/art7.jpg";
import Art8 from "../../images/artwork/art8.jpg";
import Art9 from "../../images/artwork/art9.jpg";

const photos = [
  {
    src: Art1,
    width: 800,
    height: 800,
    title: "Artwork 1",
    description: "Artwork 1 Description",
  },
  {
    src: Art2,
    width: 800,
    height: 800,
    title: "Artwork 2",
    description: "Artwork 2 Description",
  },
  {
    src: Art3,
    width: 800,
    height: 800,
    title: "Artwork 3",
    description: "Artwork 3 Description",
  },
  {
    src: Art4,
    width: 800,
    height: 800,
    title: "Artwork 4",
    description: "Artwork 4 Description",
  },
  {
    src: Art5,
    width: 800,
    height: 1000,
    title: "Artwork 5",
    description: "Artwork 5 Description",
  },
  {
    src: Art6,
    width: 800,
    height: 1000,
    title: "Artwork 6",
    description: "Artwork 6 Description",
  },
  {
    src: Art7,
    width: 800,
    height: 800,
    title: "Artwork 7",
    description: "Artwork 7 Description",
  },
  {
    src: Art8,
    width: 800,
    height: 800,
    title: "Artwork 8",
    description: "Artwork 8 Description",
  },
  {
    src: Art9,
    width: 800,
    height: 800,
    title: "Artwork 9",
    description: "Artwork 9 Description",
  },
];

export default () => {
  const [index, setIndex] = useState(-1);

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
          <Heading mt="5">Current (Ongoing)</Heading>
          <Section>
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
          </Section>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};
