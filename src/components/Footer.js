import React from "react";
import { Flex, Text } from "@radix-ui/themes";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

export default () => {
  return (
    <Flex align="center" justify="between" style={{ paddingBottom: "60px" }}>
      <Text size="2">© 2025 Preston Owens Harris</Text>
      <a href="mailto:theinfinityplanes@gmail.com">
        <EnvelopeClosedIcon />
      </a>
    </Flex>
  );
};
