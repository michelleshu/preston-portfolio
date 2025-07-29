import React from "react";
import { Box, Text } from "@radix-ui/themes";

import "./Iconography.css";

export default () => {
  return (
    <Box>
      <Text className="IconographyTextDark">
        noun | /ˈpɒz.ə.tɪv pəˈlær.ə.ti/
      </Text>
      <div className="IconographyBreak"></div>
      <Text className="IconographyTextDarkBold">Definition:</Text>
      <Text className="IconographyTextDark">
        Positive polarity denotes the energetic movement associated with
        presence, form, coherence, and alignment. It is the current of
        stabilization, visibility, and affirmation. In the context of symbolic
        or dream-based systems, it is not synonymous with moral “good,” but
        rather refers to the generative force that gives shape, direction, and
        structure to thought, spirit, and perception. It builds and affirms
        identity and reality through clarity, intention, and anchoring.
      </Text>
      <div className="IconographyBreak"></div>
      <Text className="IconographyTextDarkBold">Philosophical Note:</Text>
      <Text className="IconographyTextDark">
        Positive polarity reflects the tendency toward manifestation and order,
        it is the rhythm of becoming solid. In social systems, this polarity is
        often favored or overvalued, conflated with optimism, morality, or
        health, though its excess without negation leads to artificial harmony
        or stagnation.
      </Text>
    </Box>
  );
};
