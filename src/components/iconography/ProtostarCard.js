import React from "react";
import { Box, Text } from "@radix-ui/themes";

import "./Iconography.css";

export default () => {
  return (
    <Box>
      <Text size="4" weight="bold" className="IconographyTitle">
        Protostar Stage
      </Text>
      <Text className="IconographySubtitle">Phase of a Star (Science):</Text>
      <Text className="IconographyText">
        A dense, hot core forms, charged with potential but not yet a star.
      </Text>
      <div className="IconographyBreak" />
      <Text className="IconographySubtitle">Archetype (Void / Mind):</Text>
      <Text className="IconographyText">
        Identity suspended. Illusion and reflection. Mind is potential
        self-awareness.
      </Text>
      <div className="IconographyBreak" />
      <Text className="IconographySubtitle">Human Experience:</Text>
      <Text className="IconographyText">
        Questioning identity, mental spiraling.
      </Text>
    </Box>
  );
};
