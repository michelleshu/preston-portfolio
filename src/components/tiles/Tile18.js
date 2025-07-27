import React from "react";
import { Box, Text } from "@radix-ui/themes";

import "./Tile.css";

export default () => {
  return (
    <Box className="TileContent">
      <Text className="TileText">
        Dialectics: two things happening, and they are both true.
      </Text>
      <Text className="TileText">
        That’s different from positive and negative fighting against each other.
      </Text>
      <Text className="TileText">
        Good or evil fighting against each other.
      </Text>
      <Text className="TileText">That’s the balance.</Text>
      <Text className="TileText">
        There are things going in two different directions.
      </Text>
      <Text className="TileText">Dialects are both equal.</Text>
      <Text className="TileText">
        They go in two different directions, but they are both valid.
      </Text>
      <Text className="TileText">That’s a way to bring order to disorder.</Text>
      <Text className="TileText">
        Positives and negatives are not a good or bad thing
      </Text>
      <Text className="TileText">they just go in different directions.</Text>
      <Text className="TileText">Why do these two different things exist?</Text>
      <Text className="TileText">Maybe balance is what we think it is</Text>
      <Text className="TileText">but it’s not what we created.</Text>
    </Box>
  );
};
