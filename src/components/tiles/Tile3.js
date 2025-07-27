import React from "react";
import { Box, Text } from "@radix-ui/themes";

import "./Tile.css";

export default () => {
  return (
    <Box className="TileContent">
      <Text className="TileText">
        I never thought that Black folks were less than anything. That’s not my
        experience.
      </Text>
      <Text className="TileText">
        I never thought that I was less than or white people better than me.
      </Text>
      <Text className="TileText">
        I grew up with both parents. My Black experience, being Black, ain’t
        what a lot of Black folks will say.
      </Text>
      <Text className="TileText">
        When people start talking about Black people as a whole, I don’t even
        fit in it.
      </Text>
      <Text className="TileText">
        I can’t defend a lie. I never thought Black folks were less.
      </Text>
    </Box>
  );
};
