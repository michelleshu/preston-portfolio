import React from "react";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button, Text } from "@radix-ui/themes";

import "./IconographyButton.css";

export default ({ children, title, buttonColor, dialogColor, dialogTitle }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          className="IconographyButton"
          color={buttonColor}
          variant="soft"
          highContrast
          size="3"
        >
          {title}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content
          className="DialogContent"
          style={{ backgroundColor: dialogColor }}
        >
          <Dialog.Title className="DialogTitle">{dialogTitle}</Dialog.Title>
          {children}
          <Dialog.Close asChild>
            <button className="IconographyCloseButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
