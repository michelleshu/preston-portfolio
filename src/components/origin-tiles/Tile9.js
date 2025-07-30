import React from "react";
import { Box, Text } from "@radix-ui/themes";

import "./Tile.css";

export default () => {
  return (
    <Box className="TileContent">
      <Text className="TileText">
        What really is the culture that Black Americans rally around?
      </Text>
      <Text className="TileText">It’s an American story: to assimilate.</Text>
      <Text className="TileText">Black folks came on slave ships.</Text>
      <Text className="TileText">
        My ancestors and people that looked like me were chained.
      </Text>
      <Text className="TileText">My story is not the same.</Text>
      <Text className="TileText">It’s different for Black Americans.</Text>
      <Text className="TileText">
        It’s not the same as people whose ancestors were here.
      </Text>
      <Text className="TileText">They are different than us.</Text>
      <Text className="TileText">
        But they are not bound by the way we look at ourselves.
      </Text>
    </Box>
  );
};
