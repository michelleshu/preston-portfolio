import React from "react";
import { Box, Text } from "@radix-ui/themes";

import "./Iconography.css";

export default () => {
  return (
    <Box>
      <Text size="4" weight="bold" className="IconographyTitle">
        Star’s Light Joins the Universe
      </Text>
      <Text className="IconographySubtitle">Phase of a Star (Science):</Text>
      <Text className="IconographyText">
        Star dies or transforms, scattering elements.
      </Text>
      <div className="IconographyBreak" />
      <Text className="IconographySubtitle">Archetype (Cosmos / Soul):</Text>
      <Text className="IconographyText">
        Return to the whole. Legacy, belonging.
      </Text>
      <div className="IconographyBreak" />
      <Text className="IconographySubtitle">Human Experience:</Text>
      <Text className="IconographyText">Interbeing, legacy, soul memory.</Text>
    </Box>
  );
};
