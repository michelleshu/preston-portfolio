import React from "react";
import { NavigationMenu } from "radix-ui";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import "./Navigation.css";

const Navigation = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink" href="">
            Artist Bio
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink" href="">
            Artist Statement
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Mythology <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List">
              <NavigationMenu.Link asChild>
                <a className="ListItemLink" href="">
                  Creation Story
                </a>
              </NavigationMenu.Link>
              <NavigationMenu.Link asChild>
                <a className="ListItemLink" href="">
                  Dreams
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
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Artwork <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List">
              <NavigationMenu.Link asChild>
                <a className="ListItemLink" href="">
                  Automatic Drawings
                </a>
              </NavigationMenu.Link>
              <NavigationMenu.Link asChild>
                <a className="ListItemLink" href="">
                  Infinity Cards
                </a>
              </NavigationMenu.Link>
              <NavigationMenu.Link asChild>
                <a className="ListItemLink" href="">
                  Sketchbook
                </a>
              </NavigationMenu.Link>
            </ul>
          </NavigationMenu.Content>
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
