import React from "react";
import { Box, Text } from "@radix-ui/themes";

import "./Tile.css";

export default () => {
  return (
    <Box className="TileContent">
      <Text className="TileText">
        Why am I overexplaining to a white audience?
      </Text>
      <Text className="TileText">
        I have been influenced by stuff that I don’t want to be defined by.
      </Text>
      <Text className="TileText">
        That’s something common to Black folks: we have been influenced by
        stuff.
      </Text>
      <Text className="TileText">
        I am privileged in a sense where I grew up outside my culture, inside
        another myth.
      </Text>
      <Text className="TileText">
        Around others speaking another language, being around other people,
      </Text>
      <Text className="TileText">
        they translate other words, and nuances in other languages.
      </Text>
      <Text className="TileText">
        How do I define white influence or non-Black influence?
      </Text>
      <Text className="TileText">
        I was influenced, but that’s not what I’m trying to do.
      </Text>
      <Text className="TileText">
        When you can’t really explain it, it traps you.
      </Text>
    </Box>
  );
};
