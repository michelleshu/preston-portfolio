import React from "react";
import { Box, Container, Grid, Heading, Section, Text } from "@radix-ui/themes";

import Starfield from "react-starfield";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import OriginTile from "../../components/OriginTile";
import Tile1 from "../../components/tiles/Tile1";
import Tile2 from "../../components/tiles/Tile2";
import Tile3 from "../../components/tiles/Tile3";
import Tile4 from "../../components/tiles/Tile4";
import Tile5 from "../../components/tiles/Tile5";
import Tile6 from "../../components/tiles/Tile6";
import Tile7 from "../../components/tiles/Tile7";
import Tile8 from "../../components/tiles/Tile8";
import Tile9 from "../../components/tiles/Tile9";
import Tile10 from "../../components/tiles/Tile10";
import Tile11 from "../../components/tiles/Tile11";
import Tile12 from "../../components/tiles/Tile12";
import Tile13 from "../../components/tiles/Tile13";
import Tile14 from "../../components/tiles/Tile14";
import Tile15 from "../../components/tiles/Tile15";
import Tile16 from "../../components/tiles/Tile16";
import Tile17 from "../../components/tiles/Tile17";
import Tile18 from "../../components/tiles/Tile18";
import Tile19 from "../../components/tiles/Tile19";
import Tile20 from "../../components/tiles/Tile20";

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
          <Grid
            columns={{ initial: "2", sm: "4", md: "5" }}
            gap="5"
            width="auto"
          >
            <OriginTile number="I." title="Origin">
              <Tile1 />
            </OriginTile>
            <OriginTile number="II." title="Overexplaining to the Myth">
              <Tile2 />
            </OriginTile>
            <OriginTile number="III." title="My Blackness Is Not a Box">
              <Tile3 />
            </OriginTile>
            <OriginTile number="IV." title="The Problem of Their View">
              <Tile4 />
            </OriginTile>
            <OriginTile
              number="V."
              title="Language Doesn't Have to Be Understood to Be Heard"
            >
              <Tile5 />
            </OriginTile>
            <OriginTile number="VI." title="Intuition and Imperfection">
              <Tile6 />
            </OriginTile>
            <OriginTile
              number="VII."
              title="On Hatred, Fear, and Institutionalization"
            >
              <Tile7 />
            </OriginTile>
            <OriginTile number="VIII." title="Inclusion as War, Myth as Fear">
              <Tile8 />
            </OriginTile>
            <OriginTile number="IX." title="The Culture We Rally Around">
              <Tile9 />
            </OriginTile>
            <OriginTile number="X." title="No More Rehab">
              <Tile10 />
            </OriginTile>
            <OriginTile number="XI." title="The Rules Are Not For Us">
              <Tile11 />
            </OriginTile>
            <OriginTile number="XII." title="Should Art Speak for Itself?">
              <Tile12 />
            </OriginTile>
            <OriginTile number="XIII." title="Creation Over the Box">
              <Tile13 />
            </OriginTile>
            <OriginTile number="XIV." title="Myth, Not Competition">
              <Tile14 />
            </OriginTile>
            <OriginTile number="XV." title="The Point of Reference Is the Myth">
              <Tile15 />
            </OriginTile>
            <OriginTile number="XVI." title="The Myth in the Myth">
              <Tile16 />
            </OriginTile>
            <OriginTile number="XVII." title="Myth as Living Integrity">
              <Tile17 />
            </OriginTile>
            <OriginTile number="XVIII." title="The Balance Isn't a Fight">
              <Tile18 />
            </OriginTile>
            <OriginTile
              number="XIX."
              title="The Unknown and the Right to Create"
            >
              <Tile19 />
            </OriginTile>
            <OriginTile number="XX." title="The Myth I Choose">
              <Tile20 />
            </OriginTile>
          </Grid>
        </Section>
        <Footer />
      </Container>
    </Box>
  </Box>
);
