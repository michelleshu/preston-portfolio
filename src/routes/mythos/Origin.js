import React from "react";
import { Box, Container, Grid, Heading, Section, Text } from "@radix-ui/themes";

import Starfield from "react-starfield";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import OriginTile from "../../components/OriginTile";
import Tile1 from "../../components/tiles/Tile1";

import "../../style/Main.css";

export default () => (
  <Box>
    <Starfield starCount={3000} speedFactor={0.03} backgroundColor="black" />
    <Box className="ScrollContainer">
      <Container className="ContentContainer">
        <Navigation />
        <Heading mt="9" mb="3">
          The White Myth That Birthed the Myth
        </Heading>
        <Text as="div" mb="3">
          by Preston Harris
        </Text>
        <Text as="div" mb="3">
          These writings are just a part of the reasoning for why I’m creating
          my own mythology.
        </Text>
        <Text as="div" mb="3">
          They’re made up of the thoughts and questions that have been weighing
          on me; about identity, race, language, and creativity. Writing them
          helped me realize that I don’t need to follow the systems or myths
          that weren’t made for me. I can build something that’s fully my own.
        </Text>
        <Text as="div" mb="3">
          The “White Myth” is the belief system that centers “whiteness” as the
          default, superior, or most “civilized” way of being. It’s a set of
          ideas that frames white culture, values, and experiences as the
          standard that everyone else should measure up to. This myth erases or
          diminishes other perspectives and treats anything outside of whiteness
          as “other” or “less than.”
        </Text>
        <Text as="div" mb="3">
          It’s not just about racism: it’s deeper. It’s the myth that white ways
          of thinking, creating, and existing are inherently more valid, while
          anything different is either threatening, exotic, or lesser. It’s a
          story that white people have told themselves and others for centuries,
          and it’s so ingrained that a lot of people don’t even realize it’s
          just one version of reality; not the truth.
        </Text>
        <Text as="div" mb="3">
          Creating my own mythology gives me the freedom to explore both my
          inner world and the world around me, using dreams, emotion, memory,
          and imagination. And by doing that: by making this work as a Black
          man. I’m already showcasing Blackness, not by trying to explain it,
          but by being it.
        </Text>
        <Text as="div" mb="3">
          Myth can be seen as a way to survive, imagine, and reshape how black
          artists could be seen. I’m asking what happens when we stop explaining
          ourselves and start creating our own worlds.
        </Text>
        <Text as="div" mb="3">
          Mythology creates space for Black artists like me to imagine freely.
          I’m exploring how myth making challenges what Black art is allowed to
          be.
        </Text>
        <Section>
          <Grid columns="5" gap="6" width="auto">
            <OriginTile text="I." title="I. Origin">
              <Tile1 />
            </OriginTile>
            <OriginTile text="II." />
            <OriginTile text="III." />
            <OriginTile text="IV." />
            <OriginTile text="V." />
            <OriginTile text="VI." />
            <OriginTile text="VII." />
            <OriginTile text="VIII." />
            <OriginTile text="IX." />
            <OriginTile text="X." />
            <OriginTile text="XI." />
            <OriginTile text="XII." />
            <OriginTile text="XIII." />
            <OriginTile text="XIV." />
            <OriginTile text="XV." />
            <OriginTile text="XVI." />
            <OriginTile text="XVII." />
            <OriginTile text="XVIII." />
            <OriginTile text="XIX." />
            <OriginTile text="XX." />
          </Grid>
        </Section>
        <Footer />
      </Container>
    </Box>
  </Box>
);
