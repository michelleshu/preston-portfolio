import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  TextField,
  TextArea,
} from "@radix-ui/themes";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

import Starfield from "react-starfield";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

import "../style/Main.css";
import "../style/Home.css";

export default () => (
  <Box>
    <Starfield starCount={3000} speedFactor={0.03} backgroundColor="black" />
    <Box className="ScrollContainer">
      <Container className="ContentContainer">
        <Navigation />
        <Flex align="center" justify="center" mt="6" mb="9">
          <Box
            p="5"
            style={{
              background: "var(--gray-3)",
              border: "1px solid var(--gray-a4)",
              borderRadius: "var(--radius-4)",
              width: 600,
            }}
          >
            <form method="POST" action="https://formspree.io/f/mbdqkyoa">
              <Flex direction="column" gap="4">
                <TextField.Root name="name" placeholder="Your name" size="3">
                  <TextField.Slot>
                    <Text size="3" color="gray" style={{ width: 52 }}>
                      Name
                    </Text>
                  </TextField.Slot>
                </TextField.Root>

                <TextField.Root
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  size="3"
                >
                  <TextField.Slot>
                    <Text size="3" color="gray" style={{ width: 52 }}>
                      Email
                    </Text>
                  </TextField.Slot>
                </TextField.Root>

                <TextArea
                  name="message"
                  placeholder="Write your message..."
                  size="3"
                  rows={7}
                  style={{ resize: "none" }}
                />

                <Flex justify="end">
                  <Button
                    type="submit"
                    size="3"
                    variant="solid"
                    highContrast
                    style={{ cursor: "pointer" }}
                  >
                    <PaperPlaneIcon />
                    Send
                  </Button>
                </Flex>
              </Flex>
            </form>
          </Box>
        </Flex>
        <Footer />
      </Container>
    </Box>
  </Box>
);
