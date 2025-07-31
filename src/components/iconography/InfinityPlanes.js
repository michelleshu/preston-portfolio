import React, { useState } from "react";
import { Box, Button, Text } from "@radix-ui/themes";
import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";

import "./Iconography.css";

export default () => {
  const [infinityPlanesExpanded, setInfinityPlanesExpanded] = useState(false);

  return (
    <Box className="IconographyScrollContainer">
      <Text as="p" className="IconographyParagraph">
        If someone asked me, “What are the Infinity Planes?”: I’d say it’s both
        real and imagined. It’s not just a concept. It’s a place. It’s a space
        that holds all my thoughts, memories, contradictions, visions, and
        variations of self. It’s the root of my being, a dream archive, a
        thought cage, a creation well. It’s the inside of my mind, but bigger
        than me. It’s where I build and destroy. It’s where I go when I close my
        eyes. And sometimes, it feels like I never wake up from it.
      </Text>
      <div className="IconographyBreak"></div>

      <Button
        variant="outline"
        color="gold"
        size="2"
        onClick={() => setInfinityPlanesExpanded(!infinityPlanesExpanded)}
      >
        {infinityPlanesExpanded ? <TriangleUpIcon /> : <TriangleDownIcon />}
        {infinityPlanesExpanded ? "Hide detail" : "Show more detail"}
      </Button>

      <Box
        className="InfinityPlanesMoreDetail"
        style={{ display: infinityPlanesExpanded ? "block" : "none" }}
      >
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          I’ve struggled with making art, not because I didn’t want to create,
          but because overthinking killed the joy. Art came in bursts, broken by
          academic deadlines, societal pressure, financial anxiety. I kept
          looking for a “right” way to make work. A consistent style. A brand. A
          formula. But truthfully? That isn’t me. I don’t care about the art
          market or the scene. I care about expression. I care about
          world-building. I care about dreaming out loud.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          I don’t want to perform blackness for others. I want to explore what
          blackness feels like inside. My art is inherently Black, not because
          it’s about race in a political way, but because I am Black, and
          everything I dream comes through that lens. If I were born white, my
          art would be different. But I wasn’t. My experiences are soaked in
          Blackness. Even when I close my eyes, it’s black. Blackness is the
          canvas. It’s what allows color to exist. The closed-eye space, the
          void, the absence, that’s where my Infinity Planes live.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          The Infinity Planes is the name I give to this mythic inner universe,
          a world of symbols, archetypes, emotions, spiritual energy, and
          contradiction. It’s where my alter ego, Altensien Skybreaker, was
          born, a dream-walker, a story-keeper, a collector of fragments from
          every version of me across time.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          This is the space I return to again and again to make sense of who I
          am, not through logic, but through myth. Through ritual. Through
          collage. Through intuition. Through chaos. I don’t want to make art
          that fits neatly into the rules of identity or “the Black narrative.”
          I want to express Blackness as infinite, fragmented, cosmic, unstable,
          divine.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          Some people may say I’m playing god but I’m not trying to be god. I’m
          just imagining what kind of world I’d make if I could. And honestly?
          Isn’t that what mythology has always been about?
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          I grew up religious, so of course I question religion. I grew up
          reading dark fantasy and philosophy, so of course I’m drawn to the
          constructs of the human mind, body, and spirit.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          Mythology is where those questions converge. It’s where you can ask
          without answering. It’s where your fears, your beliefs, your dreams,
          and your identity can live side-by-side without being forced into a
          box.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          The Infinity Planes is my myth, my way of interpreting the chaos
          inside me and around me. It’s how I make sense of the world that
          shaped me, through art, imagination, and contradiction.
        </Text>
        <Text as="p" className="IconographyParagraph">
          The Infinity Planes aren’t just where stories are told, they are the
          stories. They’re shaped by my dreams, my culture, my nightmares, my
          influences, my race, my trauma, my joy, my questions. They pull from
          books, movies, memories, visions, religions, ghost feelings, old
          timelines, and unspoken pain.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          They are not always coherent because I am not always coherent.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          But that’s what makes them true.
        </Text>
      </Box>
      <div className="IconographyBreak"></div>
    </Box>
  );
};
