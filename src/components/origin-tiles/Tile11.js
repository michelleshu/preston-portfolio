import React from "react";
import { Box, Text } from "@radix-ui/themes";

import "./Tile.css";

export default () => {
  return (
    <Box className="TileContent">
      <Text className="TileText">
        Your art can be whatever it’s going to be.
      </Text>
      <Text className="TileText">
        You can be talking about this, I’m talking about that, they’re talking
        about this.
      </Text>
      <Text className="TileText">It’s unnerving to white folks.</Text>
      <Text className="TileText">And it might be unnerving to Black folks</Text>
      <Text className="TileText">because I’m not playing by the rules.</Text>
      <Text className="TileText">How dare we play by the rules?</Text>
      <Text className="TileText">
        How dare I do something that you can’t put inside a box and say “this is
        like that” or “that is like this.”
      </Text>
      <Text className="TileText">That’s threatening.</Text>
    </Box>
  );
};
