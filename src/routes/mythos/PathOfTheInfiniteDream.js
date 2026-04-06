import React from "react";
import { Accordion } from "radix-ui";
import { Dialog } from "radix-ui";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Box, Container, Grid, Section, Text } from "@radix-ui/themes";

import Starfield from "react-starfield";
import CubePoem from "../../components/CubePoem";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

import "../../style/Main.css";
import DreamCodexTile from "../../components/DreamCodexTile";

import Cube1 from "../../images/cube1.png";
import Cube2 from "../../images/cube2.png";
import Cube3 from "../../images/cube3.png";
import Cube4 from "../../images/cube4.png";

import "../../style/PathOfTheInfiniteDream.css";

const PathOfTheInfiniteDream = () => (
  <Box>
    <Starfield starCount={3000} speedFactor={0.03} backgroundColor="black" />
    <Box className="ScrollContainer">
      <Container className="ContentContainer">
        <Navigation />
        <Box mt="9" mb="9">
          <Grid
            columns={{ initial: "2", sm: "2", md: "4" }}
            gap="5"
            width="auto"
          >
            <CubePoem imgSrc={Cube1} dialogTitle="Cube 1">
              <Text className="CubePoemText">
                Fall through the glass of liminal space,
              </Text>
              <Text className="CubePoemText">
                The void opens, heavy yet frictionless.
              </Text>
              <Text className="CubePoemText">
                The void breathes its nothingness,
              </Text>
              <Text className="CubePoemText">
                Light and dark cease to hold meaning.
              </Text>
            </CubePoem>
            <CubePoem imgSrc={Cube2} dialogTitle="Cube 2">
              <Text className="CubePoemText">
                Clouds swirl, their edges vibrating,
              </Text>
              <Text className="CubePoemText">
                Thunder resonates in a language I almost understand.
              </Text>
              <Text className="CubePoemText">
                Lightning carves its mark, splitting the air,
              </Text>
              <Text className="CubePoemText">
                Flesh dissolves into shards of prismatic light.
              </Text>
            </CubePoem>
            <CubePoem imgSrc={Cube3} dialogTitle="Cube 3">
              <Text className="CubePoemText">
                A star erupts, scattering fragments of self,
              </Text>
              <Text className="CubePoemText">
                Eyes burn, twin stars igniting a forgotten path.
              </Text>
              <Text className="CubePoemText">
                The cosmos stretches infinitely,
              </Text>
              <Text className="CubePoemText">
                A realm of rippling energy and latent silence.
              </Text>
            </CubePoem>
            <CubePoem imgSrc={Cube4} dialogTitle="Cube 4">
              <Text className="CubePoemText">
                Positive and negative dissolve and reform,
              </Text>
              <Text className="CubePoemText">
                A scale tipping, yet never settling.
              </Text>
              <Text className="CubePoemText">
                To ascend is to unravel completely,
              </Text>
              <Text className="CubePoemText">
                The Infinity Plane pulls, infinite and ineffable.
              </Text>
            </CubePoem>
          </Grid>
        </Box>
        <Box mb="9">
          <Grid
            columns={{ initial: "2", sm: "3", md: "6" }}
            gap="5"
            width="auto"
          >
            <DreamCodexTile color="#EC8E7B" title="FALL" />
            <DreamCodexTile color="#BE93E4" title="VOID" />
            <DreamCodexTile color="#5EB1EF" title="CLOUD" />
            <DreamCodexTile color="#E2A336" title="LIGHTNING" />
            <DreamCodexTile color="#EC9455" title="STAR" />
            <DreamCodexTile color="#5BB98B" title="COSMOS" />
          </Grid>
        </Box>
        <Box mb="9">
          <Accordion.Root className="AccordionRoot" type="single" collapsible>
            <Accordion.Item className="AccordionItem" value="infinity-planes">
              <AccordionTrigger>The Infinity Planes</AccordionTrigger>
              <AccordionContent>
                <Text as="div" mb="4">
                  <em>The Path of the Infinite Dream</em> is not a concept that
                  arrived fully formed. It emerged the way dreams do: through
                  repetition, accumulation, and the slow recognition of patterns
                  that had been present since childhood. Falling. Suspension.
                  Rupture. Dissolution. These were not ideas but sensations,
                  experiences that returned in different forms across a lifetime
                  of dreaming. Over time, they organized themselves into a
                  system: six archetypal states that together form a cycle of
                  total transformation of body, mind, emotion, soul, and spirit.
                </Text>
                <Text as="div" mb="4">
                  The Path is structured as a circle, though it is shown
                  linearly. It does not begin at a fixed point or move toward a
                  final destination. It returns. Each cycle is a
                  reconfiguration: the self broken down and rebuilt through a
                  sequence of states that are both deeply interior and
                  cosmically scaled. The framework draws from the belief that
                  humans are akin to stars: bodies shaped through pressure,
                  collapse, ignition, and expansion. What the star undergoes
                  across millennia, Altensien Skybreaker undergoes in the space
                  of a dream.
                </Text>
                <Text as="div" mb="4">
                  Altensien Skybreaker is the alter ego and altered state of
                  self through whom this path is walked. To channel Altensien is
                  to enter the Infinity Planes, the internal realm where dream
                  fragments, mythic symbols, and lived experience converge, and
                  to move through what is there. Altensien does not observe the
                  transformation from outside. Altensien is the body that falls,
                  dissolves, breaks open, and reforms. The I and Altensien are
                  not separate. They undergo the reconfiguration together.
                </Text>
                <Text as="div" mb="4">
                  <strong>The Fall</strong> begins with a portal. Altensien's
                  body spirals through it, descending into an interior space
                  that is both cosmic and enclosed. In this space, multiple
                  cubes surround Skybreaker, each one containing something
                  different: stories, galaxies, dreams, fragments of other
                  realities and other lives. Altensien moves through them,
                  encountering each one, until a single cube approaches. There
                  is a moment of contact, of absorption and resistance at once,
                  the body pushing against what it is being pulled into. This
                  interaction is the trigger. The sensation is descent: the body
                  spiraling downward under pressure and gravity, flames erupting
                  from the flesh, darkness pulling endlessly below. This is not
                  a metaphor for failure. It is the necessary first movement of
                  any transformation: the release of what was held. The
                  associated color is red, the color of heat, blood, and the
                  interior of the body before it is opened. The Fall carries the
                  body toward its own collapse, and that collapse is the door.
                </Text>
                <Text as="div" mb="4">
                  <strong>The Void</strong> is what waits on the other side of
                  that contact. Once Altensien interacts with the cube, clouds
                  begin to seep in, consuming and changing Skybreaker from the
                  outside inward. It is a boxed-in black space, enclosed,
                  watching, still. Eyes observe from all sides. The walls are
                  translucent. There is no exit that is immediately visible.
                  This is the state of mental enclosure: the self confronted
                  with its own interior, unable to look away. The associated
                  color is purple, held and compressed. The Void is not
                  punishment. It is the necessary condition of stillness before
                  form can dissolve. The clouds do not stop. They keep coming.
                </Text>
                <Text as="div" mb="4">
                  <strong>The Cloud</strong> is where structure gives way
                  entirely. The clouds that seeped in now consume Skybreaker
                  completely, and in that consumption something unexpected
                  happens: the chest breaks open. A heart made of clouds emerges
                  from within the body and speaks. It does not speak in language
                  but in the way emotion speaks, directly, without translation.
                  Skybreaker must understand what the heart is saying before
                  anything can continue. Thought and emotion overtake the
                  physical. Understanding begins to form, but not in the way it
                  forms in waking life. It forms the way weather forms: diffuse,
                  environmental, surrounding rather than contained. The
                  associated color is blue, expansive and atmospheric. The body
                  is not lost here. It is being asked to feel what it has been
                  carrying.
                </Text>
                <Text as="div" mb="4">
                  <strong>The Lightning</strong> arrives the moment
                  understanding is reached. The strike is immediate and total.
                  The body is broken open and struck repeatedly, disintegrating
                  into black, electricity coursing through what remains of the
                  flesh. The structure of the body begins to resemble swirling
                  galaxies, matter reorganized by force rather than intention.
                  This is the most visceral state: exposed, fragmented, a core
                  emerging where the right hand would be. The associated color
                  is yellow, electric and sharp. The Lightning does not destroy.
                  It reforms. What comes through the rupture is not less than
                  what entered it. It is reconfigured. The disintegration is the
                  condition of becoming something new.
                </Text>
                <Text as="div" mb="4">
                  <strong>The Star</strong> is what emerges from that
                  disintegration. Altensien's body is absorbed within a galactic
                  nebula, light rays piercing through from every direction. When
                  Skybreaker comes through the other side, the body is fully
                  rendered but transformed: made entirely of black, of liquid
                  galaxy, stars forming from the feet upward. This is not
                  disintegration but expansion: the self recognized as energy
                  rather than matter, no longer bounded by the form it once
                  held. The associated color is orange, burning and radiant.
                  Altensien is now continuous with the cosmos it moves through.
                </Text>
                <Text as="div" mb="4">
                  <strong>The Cosmos</strong> is where the soul takes form. That
                  black body made of liquid galaxy begins to walk a path.
                  Movement slows. Footsteps shape energy. In the distance, two
                  hands hold a black cube, spiraling smoke and clouds pouring
                  from it. Skybreaker walks toward it, becoming more continuous
                  with the surrounding space with every step, the boundary
                  between body and cosmos dissolving further as the cube draws
                  closer. When Altensien reaches it and picks it up, there is no
                  resistance. The body is absorbed into the cube entirely, and
                  what opens on the other side is the Infinity Planes: a space
                  that houses the infinite, where all dreaming converges into a
                  single pool of souls. This pool is both the collective
                  unconscious of every human who has ever closed their eyes and
                  entered that space, and the source from which Altensien will
                  draw when the next cycle begins. The associated color is
                  green, slow and generative. The Cosmos is not an ending. It is
                  the gathering point.
                </Text>
                <Text as="div" mb="4">
                  This culmination is made visible in Reconfiguration, where
                  Altensien Skybreaker appears suspended within a luminous
                  sphere, the body divided into six cubic forms that hold the
                  presence of each archetypal state. Each cube dissolves outward
                  into liquid color: green and orange at the base, rising
                  through yellow and teal, deepening into violet and red at the
                  crown. The whole path is present simultaneously, the body no
                  longer moving through the states one at a time but containing
                  all of them at once. The geometric edges of each form hold
                  their shape just barely as the interior bleeds into the
                  surrounding cosmos. The boundary between body and space is
                  gone. This is what reconfiguration looks like: not
                  destruction, not arrival, but the self becoming continuous
                  with everything it has moved through.
                </Text>
                <Text as="div" mb="4">
                  From the pool of souls, the fragments are gathered: dream
                  images, myth symbols, visual language that could not have been
                  reached any other way. These fragments are brought back. They
                  become the work. Then the path returns to The Fall, and
                  Altensien descends again through the portal, and the cycle
                  begins once more.
                </Text>
                <Text as="div" mb="4">
                  The cycle does not close because dreaming does not close.
                  Every human who has ever closed their eyes and entered that
                  space has touched something infinite: an endless loop of
                  possibility, reality, imagination, and experience that exists
                  beyond the boundaries of the waking world. The Infinity Planes
                  are not a private universe. They are the space all dreaming
                  humans share without knowing it. The Path of the Infinite
                  Dream is one way of moving through what has always been there,
                  returning with what was found, and beginning again.
                </Text>
              </AccordionContent>
            </Accordion.Item>
          </Accordion.Root>
        </Box>

        <Footer />
      </Container>
    </Box>
  </Box>
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames("AccordionTrigger", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  ),
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  ),
);

export default PathOfTheInfiniteDream;
