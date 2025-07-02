import React, { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Box } from "@radix-ui/themes";
import {
  Cross1Icon,
  ChevronDownIcon,
  ChevronUpIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";

import "./MobileNavigation.css";

export default ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMythosExpanded, setIsMythosExpanded] = useState(false);

  const navMenuIcon = isOpen ? (
    <Cross1Icon width={20} height={20} aria-hidden />
  ) : (
    <HamburgerMenuIcon width={20} height={20} aria-hidden />
  );

  const handleOpenChange = (open) => {
    setIsOpen(open);
  };

  const mythosChevron = isMythosExpanded ? (
    <ChevronUpIcon
      className="MobileNavMenuExpandIcon"
      width={24}
      height={24}
      aria-hidden
    />
  ) : (
    <ChevronDownIcon
      className="MobileNavMenuExpandIcon"
      width={24}
      height={24}
      aria-hidden
    />
  );

  return (
    <Box className={className}>
      <DropdownMenu.Root modal={false} onOpenChange={handleOpenChange}>
        <DropdownMenu.Trigger asChild>
          <button
            className="NavigationMenuIcon"
            aria-label="Toggle navigation menu"
          >
            {navMenuIcon}
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="MobileNavMenuContent"
            side="bottom"
            sideOffset={18}
          >
            <Collapsible.Root
              open={isMythosExpanded}
              onOpenChange={setIsMythosExpanded}
            >
              <Collapsible.Trigger className="MobileNavMenuCollapsibleTrigger">
                Personal Mythos
                {mythosChevron}
              </Collapsible.Trigger>
              <Collapsible.Content className="MobileNavMenuCollapsibleContent">
                <DropdownMenu.Item className="MobileNavMenuSubItem">
                  <a className="MobileNavMenuItemLink" href="">
                    Origin
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="MobileNavMenuSubItem">
                  Path of the Infinite Dream
                </DropdownMenu.Item>
                <DropdownMenu.Item className="MobileNavMenuSubItem">
                  The Infinity Planes
                </DropdownMenu.Item>
                <DropdownMenu.Item className="MobileNavMenuSubItem">
                  Soul Map
                </DropdownMenu.Item>
                <DropdownMenu.Item className="MobileNavMenuSubItem">
                  Archetypes
                </DropdownMenu.Item>
              </Collapsible.Content>
            </Collapsible.Root>

            <DropdownMenu.Item className="MobileNavMenuItem">
              <a className="MobileNavMenuItemLink" href="">
                Dream Stories
              </a>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="MobileNavMenuItem">
              <a className="MobileNavMenuItemLink" href="">
                Artwork
              </a>
            </DropdownMenu.Item>

            <DropdownMenu.Item className="MobileNavMenuItem">
              <a className="MobileNavMenuItemLink" href="">
                Artist Statement
              </a>
            </DropdownMenu.Item>

            <DropdownMenu.Item className="MobileNavMenuItem">
              <a className="MobileNavMenuItemLink" href="">
                Artist Bio
              </a>
            </DropdownMenu.Item>

            <DropdownMenu.Item className="MobileNavMenuItem">
              <a className="MobileNavMenuItemLink" href="">
                Contact
              </a>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </Box>
  );
};
