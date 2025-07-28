import React from "react";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button, Text } from "@radix-ui/themes";

import "./IconographyButtonWhite.css";

export default ({ children, title, buttonVariant, dialogTitle }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          className="IconographyButton"
          color="gray"
          variant={buttonVariant}
          highContrast
          size="3"
        >
          {title}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContentDark">
          <Dialog.Title className="DialogTitleDark">{dialogTitle}</Dialog.Title>
          {children}
          <Dialog.Close asChild>
            <button className="IconographyCloseButtonDark" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
