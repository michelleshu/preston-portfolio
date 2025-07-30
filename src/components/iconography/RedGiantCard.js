import React from "react";
import { Box, Text } from "@radix-ui/themes";

import "./Iconography.css";

export default () => {
  return (
    <Box>
      <Text size="4" weight="bold" className="IconographyTitle">
        Nuclear Fusion Ignites
      </Text>
      <Text className="IconographySubtitle">Phase of a Star (Science):</Text>
      <Text className="IconographyText">
        Hydrogen atoms fuse. Massive energy released. A star is born.
      </Text>
      <div className="IconographyBreak" />
      <Text className="IconographySubtitle">Archetype (Lightning / Body):</Text>
      <Text className="IconographyText">
        Ignition. Action. Embodiment of transformation.
      </Text>
      <div className="IconographyBreak" />
      <Text className="IconographySubtitle">Human Experience:</Text>
      <Text className="IconographyText">
        Activation, embodiment, raw change.
      </Text>
    </Box>
  );
};
