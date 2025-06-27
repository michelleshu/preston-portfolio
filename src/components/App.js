import React from "react";
import { Container, Flex } from "@radix-ui/themes";
import { NavigationMenu } from "radix-ui";
import Starfield from "react-starfield";

export default () => (
  <div>
    <Starfield starCount={3000} speedFactor={0.03} />
    <Container>
      <Flex>
        <h2>Preston Harris</h2>
        <NavigationMenu.Root>
          <NavigationMenu.List>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger />
              <NavigationMenu.Content>
                <NavigationMenu.Link />
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link />
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger />
              <NavigationMenu.Content>
                <NavigationMenu.Sub>
                  <NavigationMenu.List />
                  <NavigationMenu.Viewport />
                </NavigationMenu.Sub>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Indicator />
          </NavigationMenu.List>

          <NavigationMenu.Viewport />
        </NavigationMenu.Root>
      </Flex>
    </Container>
  </div>
);
