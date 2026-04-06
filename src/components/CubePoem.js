import React from "react";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Text } from "@radix-ui/themes";

import "./CubePoem.css";

export default ({ children, imgSrc, dialogTitle }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <img
          className="CubePoemTrigger"
          src={imgSrc}
          width="100%"
          height="auto"
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content
          className="DialogContent"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        >
          {children}
          <Dialog.Close asChild>
            <button className="CubePoemCloseButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
