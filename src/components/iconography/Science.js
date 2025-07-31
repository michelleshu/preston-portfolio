import React, { useState } from "react";
import { Box, Button, Text } from "@radix-ui/themes";
import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";

import "./Iconography.css";

export default () => {
  const [scienceExpanded, setScienceExpanded] = useState(false);

  return (
    <Box className="IconographyScrollContainer">
      <Text as="p" className="IconographyParagraph">
        I was reading how stars or galaxies are formed, and for some reason, it
        felt similar to how I constructed the Starborn Path. Just like stars, we
        go through collapse, ignition, clarity, death, and rebirth. I did some
        research and tried to connect my archetypes to the different variables
        that make up the formation or birth of a star; using the science as a
        metaphor to reflect the dream path I created.
      </Text>
      <div className="IconographyBreak"></div>

      <Button
        variant="outline"
        color="gold"
        size="2"
        onClick={() => setScienceExpanded(!scienceExpanded)}
      >
        {scienceExpanded ? <TriangleUpIcon /> : <TriangleDownIcon />}
        {scienceExpanded ? "Hide detail" : "Show more detail"}
      </Button>

      <Box
        className="ScienceMoreDetail"
        style={{ display: scienceExpanded ? "block" : "none" }}
      >
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          The process of star formation begins in darkness; inside cold, dense
          clouds of dust and gas called nebulae. These clouds collapse under
          their own gravity, and over time, pressure builds. The core heats up,
          particles collide, fusion begins and eventually, light is born.
        </Text>
        <Text as="p" className="IconographyParagraph">
          The Starborn Path is about collapse, ignition, transformation, and
          return.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          A star really does begin in collapse.
        </Text>
        <Text as="p" className="IconographyParagraph">
          It does go through turbulence and uncertainty before stabilizing.
        </Text>
        <Text as="p" className="IconographyParagraph">
          It does ignite when pressure hits a threshold.
        </Text>
        <Text as="p" className="IconographyParagraph">
          Its light does radiate for billions of years.
        </Text>
        <Text as="p" className="IconographyParagraph">
          Its remnants do seed the next generation of stars and planets.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          “You are made of the same stuff stars are. Your transformation follows
          the same pattern. What does that tell you about your pain? Your
          growth? Your dreams?”
        </Text>
      </Box>
    </Box>
  );
};
