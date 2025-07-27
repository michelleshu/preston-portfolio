import React, { useState } from "react";
import { Link } from "react-router";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Box, Flex } from "@radix-ui/themes";
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

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
    if (isMythosExpanded) {
      setIsMythosExpanded(false);
    }
  };

  const mythosChevron = isMythosExpanded ? (
    <ChevronUpIcon
      className="MobileNavMenuExpandIcon"
      width={20}
      height={20}
      aria-hidden
    />
  ) : (
    <ChevronDownIcon
      className="MobileNavMenuExpandIcon"
      width={20}
      height={20}
      aria-hidden
    />
  );

  return (
    <Box className={`${className} MobileNavigationContainer`}>
      <button
        className="NavigationMenuIcon"
        aria-label="Toggle navigation menu"
        onClick={toggleIsOpen}
      >
        {navMenuIcon}
      </button>

      <Box className="MobileNavMenuContent" display={isOpen ? "block" : "none"}>
        <Collapsible.Root
          open={isMythosExpanded}
          onOpenChange={setIsMythosExpanded}
        >
          <Link to="/" className="MobileNavMenuItemLink">
            Home
          </Link>

          <Collapsible.Trigger className="MobileNavMenuCollapsibleTrigger">
            <Flex
              align="center"
              justify="between"
              className="MobileNavMenuItem"
            >
              Personal Mythos
              {mythosChevron}
            </Flex>
          </Collapsible.Trigger>
          <Collapsible.Content className="MobileNavMenuCollapsibleContent">
            <a className="MobileNavMenuItemLink" href="">
              Mythology Defined
            </a>
            <Link to="/origin" className="MobileNavMenuItemLink">
              Origin: The Infinity Planes
            </Link>
            <Link to="/codex" className="MobileNavMenuItemLink">
              Dream Codex
            </Link>
            <Link to="/iconography" className="MobileNavMenuItemLink">
              Iconography
            </Link>
            <a className="MobileNavMenuItemLink" href="">
              Oneiryn Frame
            </a>
            <a className="MobileNavMenuItemLink" href="">
              Tensien Cards
            </a>
          </Collapsible.Content>

          <a className="MobileNavMenuItemLink" href="">
            Dream Stories
          </a>

          <a className="MobileNavMenuItemLink" href="">
            Artwork
          </a>

          <a className="MobileNavMenuItemLink" href="">
            Artist Statement
          </a>

          <a className="MobileNavMenuItemLink" href="">
            Artist Bio
          </a>

          <a className="MobileNavMenuItemLink" href="">
            Contact
          </a>
        </Collapsible.Root>
      </Box>
    </Box>
  );
};
