import React from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import "./ArtworkCategoryTile.css";

export default ({ title, backgroundImage }) => {
  return (
    <Box className="ArtworkCategoryTile">
      <Box
        className="ArtworkCategoryTileBackground"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <Box className="ArtworkCategoryTileOverlay" />
      <Flex
        className="ArtworkCategoryTileContent"
        align="center"
        justify="center"
      >
        <Text
          className="ArtworkCategoryTileTitleText"
          size="5"
          weight="bold"
          align="center"
        >
          {title}
        </Text>
      </Flex>
    </Box>
  );
};
