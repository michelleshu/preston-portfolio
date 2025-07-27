import React from "react";
import { NavigationMenu } from "radix-ui";
import { Flex, Text } from "@radix-ui/themes";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router";

import MobileNavigation from "./MobileNavigation";

import "./Navigation.css";

export default () => {
  return (
    <Flex
      className="NavigationContainer"
      justify="between"
      style={{ marginTop: "30px" }}
    >
      <Flex direction="column">
        <Link to="/" className="HomeLink">
          <Text className="NameText" weight="bold">
            落ちる天 ALTENSIEN SKYBREAKER
          </Text>
        </Link>
        <Flex
          className="SocialIconContainer"
          align="center"
          gap="2"
          style={{ height: 44 }}
        >
          <SocialIcon
            className="SocialIcon"
            network="instagram"
            url="https://www.instagram.com/theinfinityplanes/"
            borderRadius="0"
            target="_blank"
          />
          <SocialIcon
            className="SocialIcon"
            network="x"
            url="https://x.com/ALTENSIEN"
            borderRadius="0"
            target="_blank"
          />
          <SocialIcon
            className="SocialIcon"
            network="tiktok"
            url="https://www.tiktok.com/@theinfinityplanes"
            borderRadius="0"
            target="_blank"
          />
          <SocialIcon
            className="SocialIcon"
            network="twitch"
            url="https://www.twitch.tv/altensienskybreaker"
            borderRadius="0"
            target="_blank"
          />
          <SocialIcon
            className="SocialIcon"
            network="youtube"
            url="https://youtube.com/@altensienskybreaker"
            borderRadius="0"
            target="_blank"
          />
        </Flex>
      </Flex>
      <NavigationMenu.Root className="NavigationMenuRoot">
        <NavigationMenu.List className="NavigationMenuList">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              Personal Mythos
              <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List">
                <NavigationMenu.Link asChild>
                  <a className="ListItemLink" href="">
                    Mythology Defined
                  </a>
                </NavigationMenu.Link>
                <NavigationMenu.Link asChild>
                  <Link to="/origin" className="ListItemLink">
                    Origin: The Infinity Planes
                  </Link>
                </NavigationMenu.Link>
                <NavigationMenu.Link asChild>
                  <a className="ListItemLink" href="">
                    Path of the Infinite Dream
                  </a>
                </NavigationMenu.Link>
                <NavigationMenu.Link asChild>
                  <a className="ListItemLink" href="">
                    Oneiryn Frame
                  </a>
                </NavigationMenu.Link>
                <NavigationMenu.Link asChild>
                  <a className="ListItemLink" href="">
                    Tensien Cards
                  </a>
                </NavigationMenu.Link>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink" href="">
              Dream Stories
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink" href="">
              Artwork
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink" href="">
              Artist Statement
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink" href="">
              Artist Bio
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink" href="">
              Contact
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="NavigationMenuIndicator">
            <div className="Arrow" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="ViewportPosition">
          <NavigationMenu.Viewport className="NavigationMenuViewport" />
        </div>
      </NavigationMenu.Root>

      <MobileNavigation className="MobileNavigation" />
    </Flex>
  );
};
