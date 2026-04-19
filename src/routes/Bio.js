import React from "react";
import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";

import Starfield from "react-starfield";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

import "../style/Main.css";
import "../style/Home.css";

import Preston from "../images/preston.jpg";

export default () => (
  <Box>
    <Starfield starCount={3000} speedFactor={0.03} backgroundColor="black" />
    <Box className="ScrollContainer">
      <Container className="ContentContainer">
        <Navigation />
        <Box>
          <Box mt="6">
            <img src={Preston} style={{ height: "auto", width: "100%" }} />
          </Box>
          <Heading mt="6" mb="4">
            About the Artist
          </Heading>
          <Heading mb="4" style={{ fontSize: 20 }}>
            Constructing Personal Myth Through Dreams and Process
          </Heading>
          <Box mb="9">
            <Flex direction="column" gap="4">
              <Text as="p">
                What do you see when you close your eyes? For Preston Owens
                Harris, that question is not rhetorical. It is a method, a
                mythology, and the origin of everything he makes.
              </Text>
              <Text as="p">
                Harris is a practicing mixed-media artist holding an MFA from
                Colorado State University, working primarily in watercolor, ink,
                and layered materials on wood. Born in Urasoe, Okinawa, Japan,
                he came to visual art through an unlikely path: from college
                basketball courts in Florida to the University of Florida, where
                he completed a BFA with a specialization in drawing. Moving
                between cultures from an early age shaped a fluid, relational
                sense of self, one not fixed by expectation but formed through
                experience. When he returned to the United States at eighteen,
                he encountered a different reality: systems that prescribed how
                he was supposed to exist, what he was allowed to make, and what
                kinds of expression were considered legible. That tension became
                a point of departure. Rather than working to meet those
                expectations, he began to question them, turning inward toward
                the only space no external system could define.
              </Text>
              <Text as="p">
                That space is the <em>Infinity Planes</em>: an internal field
                accessed through dreams, sustained darkness, and intuitive
                process, where imagery, symbols, and archetypal forms both exist
                and are generated. Harris treats dreams as real experiences,
                lived events that demonstrate the mind's capacity to create
                worlds. By closing his eyes, sometimes for minutes, sometimes
                through sleep, he accesses ideas, scenarios, and compositions
                that become the material basis for everything he makes. Through
                sustained engagement with this space, six archetypal states
                emerged over time, not as concepts but as sensations:{" "}
                <em>The Fall</em>,<em>The Void</em>, <em>The Cloud</em>,{" "}
                <em>The Lightning</em>, <em>The Star</em>, and{" "}
                <em>The Cosmos</em>. Together they form{" "}
                <em>The Path of the Infinite Dream</em>, a cyclical framework of
                transformation modeled after the life cycle of a star, grounded
                in the belief that humans are akin to stars: bodies shaped
                through pressure, collapse, ignition, and expansion. Each state
                corresponds to a core aspect of the self, desire, mind, emotion,
                body, spirit, and soul, and is experienced viscerally through
                dreams before it is ever rendered visually.
              </Text>
              <Text as="p">
                Moving through this path is Altensien Skybreaker, the alter ego
                and working state through whom the <em>Infinity Planes</em> are
                entered, navigated, and received. Altensien did not emerge
                through invention. The figure materialized through repetition:
                across drawings, dreams, and sustained engagement with the
                closed-eye space, recurring forms including wings, cubes, and
                shifting structures accumulated over time until they stabilized
                into something recognizable. Altensien is both Harris and not
                Harris simultaneously: an extension of perception, a functional
                state of being that allows him to move through the{" "}
                <em>Infinity Planes</em> from shifting positions, as observer,
                participant, and instigator. When Harris returns from that
                state, he carries fragments of what was found there, dream
                images, myth symbols, and visual language that could not have
                been accessed any other way. As Altensien has written:
                "Sometimes I close my eyes and by the time I open them, I am
                somewhere else entirely." That is the experience the work is
                built from.
              </Text>
              <Text as="p">
                Harris approaches his studio practice the way a scientist
                approaches a lab. Each piece, and often each series, functions
                as an experiment. Rather than refining a single method, he
                deliberately alters his approach from work to work: working in
                complete darkness on one day, restricting himself to a single
                color on another, rotating between multiple pieces in timed
                sessions. Discoveries made in one piece are carried into the
                next. Through automatism, collage, blind drawing, pareidolia,
                and non-erasure, images surface before they are fully
                understood, and the work evolves through accumulation rather
                than correction. This experimental rigor is not separate from
                the mythology. It is how the mythology is discovered.
              </Text>
              <Text as="p">
                In this work, Blackness functions as a thematic and metaphorical
                condition, not as a category imposed from outside but as a
                generative space Harris works from within. Darkness in the
                <em>Infinity Planes</em> is not absence but origin: the field
                from which galaxies form, bodies become fluid, and the cosmos
                remains open. Everything in the myth begins in blackness. This
                is personal, not theoretical. It comes from Harris's own
                experience of moving through a world that tried to fix his
                identity in place, and from the realization that his Blackness
                was already present in everything he made, not because he
                performed it, but because he is it. That realization freed him.
                In this sense his practice is in conversation with artists who
                made similar moves: Jack Whitten, who wrote "HOW I PERCEIVE THE
                WORLD CONSTITUTES MY PERSONAL IDENTITY. MY PERSONAL IDENTITY IS
                THE TEMPLATE FOR WORLDVIEW," and whose abstraction was never an
                escape from identity but a refusal to let identity dictate form;
                and Trenton Doyle Hancock, who built an entire evolving
                cosmology without asking permission for it to be legible within
                prescribed expectations of Black art and "being a Black artist
                is inevitable. It bleeds through no matter what story I tell."
                Harris also draws from William Blake, Leonora Carrington, Hilma
                af Klint, Adrian Ghenie, Hieronymus Bosch, Francis Bacon, and
                Mariusz Lewandowski, each of whom built coherent symbolic worlds
                from inner vision and refused external validation as the measure
                of their reality.
              </Text>
              <Text as="p">
                The myth Harris is building is not finished. It builds as he
                builds. It grows as he grows. Altensien asks the question that
                underlies all of it: "How can there be anything interesting
                about a being that never transforms? There is no meaning to an
                existence with no beginning and no end." The Path of the
                Infinite Dream is Harris's answer. Not an escape from the world,
                but a way of reshaping how it can be perceived. What do you see
                when you close your eyes? The answer, when pursued with
                discipline and sustained attention, can generate coherent
                worlds.
              </Text>
            </Flex>
          </Box>
        </Box>
        <Footer />
      </Container>
    </Box>
  </Box>
);
