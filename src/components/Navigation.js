import React from "react";
import { NavigationMenu } from "radix-ui";
import classNames from "classnames";
import {
  CaretDownIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import "./Navigation.css";

const Navigation = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Personal Mythos <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List">
              <NavigationMenu.Link asChild>
                <a className="ListItemLink" href="">
                  Origin
                </a>
              </NavigationMenu.Link>
              <NavigationMenu.Link asChild>
                <a className="ListItemLink" href="">
                  Path of the Infinite Dream
                </a>
              </NavigationMenu.Link>
              <NavigationMenu.Link asChild>
                <a className="ListItemLink" href="">
                  The Infinity Planes
                </a>
              </NavigationMenu.Link>
              <NavigationMenu.Link asChild>
                <a className="ListItemLink" href="">
                  Soul Map
                </a>
              </NavigationMenu.Link>
              <NavigationMenu.Link asChild>
                <a className="ListItemLink" href="">
                  Archetypes
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
  );
};

export default Navigation;
