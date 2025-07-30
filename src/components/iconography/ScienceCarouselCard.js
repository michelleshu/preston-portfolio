import React from "react";
import { Box, Text } from "@radix-ui/themes";

import "./ScienceCarouselCard.css";

export default ({ children, image }) => {
  return (
    <Box className="ScienceCarouselCard">
      <div
        className="ScienceCarouselCardOverlay"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="ScienceCarouselBlackOverlay" />
      <div className="ScienceCarouselCardContent">{children}</div>
    </Box>
  );
};
