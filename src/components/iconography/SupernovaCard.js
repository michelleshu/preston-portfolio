import React from "react";
import { Box, Text } from "@radix-ui/themes";

import "./Iconography.css";

export default () => {
  return (
    <Box>
      <Text size="4" weight="bold" className="IconographyTitle">
        Core Heats, Fusion Nears
      </Text>
      <Text className="IconographySubtitle">Phase of a Star (Science):</Text>
      <Text className="IconographyText">
        Temperature rises. Pressure builds. Chaos and movement. Fusion begins.
      </Text>
      <div className="IconographyBreak" />
      <Text className="IconographySubtitle">Archetype (Cloud / Emotion):</Text>
      <Text className="IconographyText">
        Emotion rising. Memory, feeling, instinct. Undefined but saturated.
      </Text>
      <div className="IconographyBreak" />
      <Text className="IconographySubtitle">Human Experience:</Text>
      <Text className="IconographyText">
        Emotional fluctuation, memory, self-shaping.
      </Text>
    </Box>
  );
};
