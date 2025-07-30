import React from "react";
import { Box, Text } from "@radix-ui/themes";

import "./Iconography.css";

export default () => {
  return (
    <Box>
      <Text size="4" weight="bold" className="IconographyTitle">
        Collapse of a Molecular Cloud
      </Text>
      <Text className="IconographySubtitle">Phase of a Star (Science):</Text>
      <Text className="IconographyText">
        A region of gas and dust becomes unstable and begins collapsing under
        gravity.
      </Text>
      <div className="IconographyBreak" />
      <Text className="IconographySubtitle">Archetype (Fall / Desire):</Text>
      <Text className="IconographyText">
        The inward pull. Collapse. Hunger to exist: the beginning of becoming.
        Desire initiates ascension or descension.
      </Text>
      <div className="IconographyBreak" />
      <Text className="IconographySubtitle">Human Experience:</Text>
      <Text className="IconographyText">Surrender to desire and undoing.</Text>
    </Box>
  );
};
