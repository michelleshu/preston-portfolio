import React from "react";
import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";

import Starfield from "react-starfield";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

import "../style/Main.css";
import "../style/Home.css";

export default () => (
  <Box>
    <Starfield starCount={3000} speedFactor={0.03} backgroundColor="black" />
    <Box className="ScrollContainer">
      <Container className="ContentContainer">
        <Navigation />
        <Box>
          <Heading mt="9" mb="4">
            Artist Statement
          </Heading>
          <Box>
            <Flex direction="column" gap="4">
              <Text as="p">
                Have you ever wondered what the first dream was? How was it
                interpreted? How myths began, and how they shaped the ways we
                see ourselves today? What are the myths we are currently living
                in and what would it mean if a new one emerged, not inherited,
                but made?
              </Text>
              <Text as="p">
                My work comes from what I see when I close my eyes. I build a
                personal mythology from dreams that exists before language or
                interpretation.
              </Text>
              <Text as="p">
                This mythology is constructed in the <em>Infinity Planes</em>,
                an internal realm where thought, imagination, dreams, and lived
                experience converge. It is a space where recurring figures,
                symbols, and forms appear, repeat, and begin to organize
                themselves over time. Through accumulation, these fragments
                connect, forming a language that is both personal and
                open-ended.
              </Text>
              <Text as="p">
                Within this space, Altensien Skybreaker materialized through
                repetition across drawings, dreams, and the closed-eye space,
                not as something I constructed but as something that emerged.
                Altensien is both myself and not myself simultaneously: an alter
                ego, an altered state, a working condition through which the
                <em>Infinity Planes</em> are entered, navigated, and received.
                Through Skybreaker, I move through The Path of the Infinite
                Dream, a cyclical framework of six archetypal states:{" "}
                <em>The Fall</em>, <em>The Void</em>,<em>The Cloud</em>,{" "}
                <em>The Lightning</em>, <em>The Star</em>, and{" "}
                <em>The Cosmos</em>. Each one a transformation of body, mind,
                emotion, and spirit. I return from each cycle carrying fragments
                of what was found there, and those fragments become the work.
              </Text>
              <Text as="p">
                My practice treats the studio the way a scientist treats a lab.
                I work through automatism, collage, blind drawing, pareidolia,
                and intuitive mark-making, deliberately altering my approach
                from piece to piece, imposing restrictions, testing what feels
                authentic and what resists. Images surface before they are fully
                understood. Nothing is erased. The work evolves through
                accumulation rather than correction, and each discovery is
                carried into whatever comes next.
              </Text>
              <Text as="p">
                Watercolor and layered materials allow me to construct fluid,
                shifting environments where bodies and forms exist beyond fixed
                boundaries. Through color, composition, and repetition, dreams
                become visual language: mythology made visible.
              </Text>
              <Text as="p">
                I am interested in how storytelling, symbols, and human thought
                connect us. Art becomes a space where these internal experiences
                can be shared, questioned, and reinterpreted. The work invites
                viewers to encounter it as an extension of the mind. It is an
                open system where meaning is not fixed, but formed through
                engagement.
              </Text>
              <Text as="p">
                This mythology is not fixed. It builds as I build. It grows as I
                grow, extending across materials, forms, and time. Viewers are
                invited to enter the work and consider their own and to ask, now
                with different eyes: What do you see when you close your eyes?
              </Text>
            </Flex>
          </Box>
          <Heading mt="9" mb="4">
            Condensed Artist Statement
          </Heading>
          <Box mb="9">
            <em>
              My work comes from what I see when I close my eyes. I build a
              personal mythology from dreams, constructing an internal realm I
              call the Infinity Planes, where recurring figures, symbols, and
              archetypal forms emerge through repetition and organize themselves
              over time. Through this space I channel Altensien Skybreaker, an
              alter ego and working state through whom the Infinity Planes are
              entered and received. Working through automatism, collage, blind
              drawing, and intuitive mark-making, I translate what is found
              there into watercolor and mixed media, allowing dreams to become
              visual language. The work is an open system, one that invites
              viewers to encounter it as an extension of the mind and to ask:
              What do you see when you close your eyes?
            </em>
          </Box>
        </Box>
        <Footer />
      </Container>
    </Box>
  </Box>
);
