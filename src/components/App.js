import React from "react";
import { Container, Flex } from "@radix-ui/themes";
import Starfield from "react-starfield";

export default () => (
  <div>
    <Starfield starCount={3000} speedFactor={0.02} />
    <Container>
      <Flex>
        <h2>Preston Harris</h2>
      </Flex>
    </Container>
  </div>
);
