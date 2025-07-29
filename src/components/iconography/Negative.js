import React from "react";
import { Box, Text } from "@radix-ui/themes";

import "./Iconography.css";

export default () => {
  return (
    <Box>
      <Text className="IconographyTextDark">
        noun | /ˈnɛɡ.ə.tɪv pəˈlær.ə.ti/
      </Text>
      <div className="IconographyBreak"></div>
      <Text className="IconographyTextDarkBold">Definition:</Text>
      <Text className="IconographyTextDark">
        Negative polarity refers to the energetic movement linked with absence,
        disruption, resistance, and reflection. It is the force that
        deconstructs, questions, and interrupts the established pattern. In
        symbolic systems, it does not equate to moral “evil,” but instead
        functions as the generative force of contradiction, critique, and
        transformation. It reveals what is missing, unseen, or distorted, acting
        as the initiator of change, introspection, and mythic tension.
      </Text>
      <div className="IconographyBreak"></div>
      <Text className="IconographyTextDarkBold">Philosophical Note:</Text>
      <Text className="IconographyTextDark">
        Rather than destroying, negative polarity dissolves rigidity, exposes
        the limits of systems, and opens potential. Its absence creates
        hollowness; its presence generates depth. When over-isolated, it may
        spiral into nihilism or stagnation, but when integrated, it facilitates
        multidimensional thought, emotional truth, and mythic evolution.
      </Text>
    </Box>
  );
};
