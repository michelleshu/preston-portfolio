import React from "react";
import { Box, Text } from "@radix-ui/themes";

import "./Iconography.css";

export default () => {
  return (
    <Box>
      <Text size="4" weight="bold" className="IconographyTitle">
        Main Sequence Star
      </Text>
      <Text className="IconographySubtitle">Phase of a Star (Science):</Text>
      <Text className="IconographyText">
        Star stabilizes. Fusion sustains radiant life.
      </Text>
      <div className="IconographyBreak" />
      <Text className="IconographySubtitle">Archetype (Star / Spirit):</Text>
      <Text className="IconographyText">
        Inner alignment. Not perfection, but presence.
      </Text>
      <div className="IconographyBreak" />
      <Text className="IconographySubtitle">Human Experience:</Text>
      <Text className="IconographyText">Purpose, alignment, radiance.</Text>
    </Box>
  );
};
