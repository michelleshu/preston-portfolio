import React from "react";
import { Box, Text } from "@radix-ui/themes";

import "./DreamCodexTile.css";

export default ({ children, color, title }) => {
  return (
    <Box className="DreamCodexTile" style={{ borderColor: color }}>
      <Text className="DreamCodexTitle" size="4" weight="bold">
        {title}
      </Text>
    </Box>
  );
};
