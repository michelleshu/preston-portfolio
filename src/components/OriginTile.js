import React from "react";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Box, Text } from "@radix-ui/themes";
import "./OriginTile.css";

export default ({ children, number, title }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Box className="OriginTileBorderBox">
          <Box className="OriginTileBackground">
            <Box className="OriginTileContainer">
              <Text className="NumberText" size="4">
                {number}
              </Text>
              <Text className="FullText" size="4">
                {number} {title}
              </Text>
            </Box>
          </Box>
        </Box>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="OriginDialogTitle">
            {number} {title}
          </Dialog.Title>
          {children}
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
