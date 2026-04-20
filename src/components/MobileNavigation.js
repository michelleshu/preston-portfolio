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
            <Link to="/mythology-defined" className="MobileNavMenuItemLink">
              Mythology Defined
            </Link>
            <Link to="/origin" className="MobileNavMenuItemLink">
              Origin: The Infinity Planes
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

          <Link
            to="/path-of-the-infinite-dream"
            className="MobileNavMenuItemLink"
          >
            Path of the Infinite Dream
          </Link>

          <Link to="/artwork" className="MobileNavMenuItemLink">
            Artwork
          </Link>

          <Link to="/artist-statement" className="MobileNavMenuItemLink">
            Artist Statement
          </Link>

          <Link to="/bio" className="MobileNavMenuItemLink">
            Artist Bio
          </Link>

          <Link to="/contact" className="MobileNavMenuItemLink">
            Contact
          </Link>
        </Collapsible.Root>
      </Box>
    </Box>
  );
};
