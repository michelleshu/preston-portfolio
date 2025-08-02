import React, { use, useState } from "react";
import { Box, Button, Container, Heading, Text } from "@radix-ui/themes";
import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";

import Starfield from "react-starfield";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

import "../../style/Main.css";

export default () => {
  const [detailsExpanded, setDetailsExpanded] = useState(false);
  return (
    <Box>
      <Starfield starCount={3000} speedFactor={0.03} backgroundColor="black" />
      <Box className="ScrollContainer">
        <Container className="ContentContainer">
          <Navigation />
          <Heading mt="9" mb="1">
            Mythology
          </Heading>
          <Text as="div" mb="4">
            noun | my·thol·o·gy | /mi-ˈthä-lə-jē/
          </Text>
          <Text as="div" mb="4">
            1. A symbolic system of meaning composed of stories, archetypes,
            rituals, and imagery that explain existence, identity, and
            transformation. Myths function as cultural technologies, passed
            through oral, visual, and embodied traditions, that help individuals
            and communities make sense of their origin, purpose, and connection
            to forces beyond themselves.
          </Text>
          <Text as="div" mb="4">
            2. A dynamic, evolving framework of belief, imagination, and
            interpretation that expresses the inner life of human beings through
            metaphor, dream logic, and emotional resonance. Mythology is not
            confined to the past or to ancient civilizations; it emerges
            continuously in contemporary forms, through art, media, technology,
            and personal narrative.
          </Text>
          <Text as="div" mb="4">
            3. A language of the soul that bridges the seen and unseen, offering
            a container for chaos, contradiction, and spiritual inquiry. It is a
            creative and existential practice: not limited to religion or
            folklore, but inclusive of new belief systems born from individual
            consciousness, memory, and experience.
          </Text>

          <Heading mb="3">My Definition:</Heading>
          <Text as="div" mb="3"></Text>
          <Button
            variant="outline"
            color="gold"
            size="2"
            onClick={() => setDetailsExpanded(!detailsExpanded)}
          >
            {detailsExpanded ? <TriangleUpIcon /> : <TriangleDownIcon />}
            {detailsExpanded ? "Hide details" : "Show more"}
          </Button>
          <Box
            className="MoreDetail"
            style={{ display: detailsExpanded ? "block" : "none" }}
          >
            <Text as="div" mt="4" mb="4">
              I ask the question: Can new myths be formed in today’s day and
              age?
            </Text>

            <Text weight="bold" as="div" mb="4">
              Of course they can, they are always being formed.
            </Text>

            <Text as="div" mb="4">
              When religion, and the people behind it, claim their gods and
              beliefs are more powerful, more just, more right, more legitimate
              than others… is there still space for a new myth to rise?
            </Text>

            <Text as="div" mb="4">
              Are myths purely imaginative? Or is there room for new belief
              systems to take hold in this world we’re actively shaping,
              forming, becoming, and breaking?
            </Text>

            <Text as="div" mb="1">
              What do we call video games, books, movies, TV shows? Are they not
              mythic in their own way?
            </Text>
            <Text as="div" mb="4">
              What stimulates a story into becoming a mythology?
            </Text>

            <Text as="div" mb="1">
              Mythologies have roots. They hold principles, meaning, forms of
              existence, and forms of becoming.
            </Text>
            <Text as="div" mb="4">
              So what is the line between belief and imagination?
            </Text>

            <Text as="div" mb="1">
              “You can’t predict what a myth is gonna be any more than you can
              predict what your dream will be tonight. Myths and dreams come
              from the same place, realizations from the same time, that find
              expression in symbolic form.”
            </Text>
            <Text as="div" mb="4">
              — Joseph Campbell, The Power of Myth
            </Text>

            <Text as="div" mb="4">
              Are humans not gods themselves, if God is a creator and humans
              create?
            </Text>

            <Text as="div" mb="1">
              I don't invalidate anyone's beliefs. But I do question where those
              beliefs come from and why they cling to them.
            </Text>
            <Text as="div" mb="4">
              Who told the first story? What was the first dream?
            </Text>

            <Text as="div" mb="1">
              I ask these questions because I want to know. Because I am
              influenced by so much: distorted dreams, inherited images, static,
              memory, algorithm, blood.
            </Text>
            <Text as="div" mb="1">
              But the first humans? They imagined from a vacuum.
            </Text>
            <Text as="div" mb="1">
              A vacuum of present, past, and futures we don’t yet understand.
            </Text>
            <Text as="div" mb="1">
              They told stories before they could write.
            </Text>
            <Text as="div" mb="4">
              Oral traditions. Songs. Praise. Worship. Attempts to explain the
              natural phenomena around them.
            </Text>

            <Text as="div" mb="1">
              What do humans always seek to do?
            </Text>
            <Text as="div" mb="1">
              To understand.
            </Text>
            <Text as="div" mb="1">
              To name.
            </Text>
            <Text as="div" mb="4">
              To make sense of what is and what is not.
            </Text>

            <Text as="div" mb="4">
              So if I believe that everything ever created by a human was
              created by a human, then yes, even God is a construct of human
              belief.
            </Text>

            <Text as="div" mb="1">
              So why can’t I, being human, create my own beliefs?
            </Text>
            <Text as="div" mb="1">
              My own system?
            </Text>
            <Text as="div" mb="4">
              Why can’t I create myth?
            </Text>

            <Text as="div" mb="1">
              Meaning is made, not given.
            </Text>
            <Text as="div" mb="1">
              Humans seek an experience of being alive.
            </Text>
            <Text as="div" mb="4">
              Myths are stories of that search. Men and women, across ages,
              seeking meaning.
            </Text>

            <Text as="div" mb="1">
              “Myths are clues to the spiritual potentiality of human life. They
              speak to the resonance of the innermost being.”
            </Text>
            <Text as="div" mb="4">
              — Joseph Campbell
            </Text>

            <Text as="div" mb="4">
              If I am to understand my influences, my dreams, my contradictions,
              and I take the time to invent rituals, write stories, make art,
              and imagine new symbols, why can others do this and not me?
            </Text>

            <Text as="div" mb="1">
              Why is it hubris to build a world out of meaning?
            </Text>
            <Text as="div" mb="1">
              Why is my ego targeted?
            </Text>
            <Text as="div" mb="4">
              Why do you claim I can’t take on the role of a god with ideas,
              thoughts, and opinions when the very idea of god was constructed
              by human beings?
            </Text>

            <Text as="div" mb="1">
              I am not seeking to be a god.
            </Text>
            <Text as="div" mb="1">
              My goal is not domination.
            </Text>
            <Text as="div" mb="1">
              It is creation.
            </Text>
            <Text as="div" mb="4">
              To open a symbolic system that holds who I am, in chaos and
              coherence.
            </Text>

            <Text as="div" mb="4">
              My mythology is not less valid than a religion that cannot
              question itself.
            </Text>

            <Text as="div" mb="1">
              “God is a thought. A name. An idea. A reference to something that
              transcends all thinking.
            </Text>
            <Text as="div" mb="1">
              The best things can’t be told because they transcend thought.
            </Text>
            <Text as="div" mb="1">
              The second best are misunderstood because they try to refer to
              what can’t be thought about.
            </Text>
            <Text as="div" mb="1">
              The third best are what we talk about.
            </Text>
            <Text as="div" mb="1">
              Myths live in that space, metaphors pointing to what cannot be
              named, except by our attempt to clothe it in language.”
            </Text>
            <Text as="div" mb="4">
              — Joseph Campbell
            </Text>

            <Text as="div" mb="4">
              Are some myths more real than others?
            </Text>

            <Text as="div" mb="1">
              I cannot deny the existence of someone else’s gods.
            </Text>
            <Text as="div" mb="1">
              And they cannot deny the existence of mine.
            </Text>
            <Text as="div" mb="4">
              If they do, then where does that put them?
            </Text>

            <Text as="div" mb="4">
              Religion is mythology. But mythology and religion are two
              completely different things.
            </Text>

            <Text as="div" mb="1">
              Mythology becomes religion once enough people believe.
            </Text>
            <Text as="div" mb="1">
              So is religion not a social construct?
            </Text>
            <Text as="div" mb="4">
              A system of myth codified by time, power, memory, and collective
              fear?
            </Text>

            <Text as="div" mb="1">
              Mythology and religion are true in different instances.
            </Text>
            <Text as="div" mb="1">
              But belief alone does not equal moral authority.
            </Text>
            <Text as="div" mb="4">
              Belief alone has fueled hierarchy, violence, and silence.
            </Text>

            <Text as="div" mb="1">
              You fight to define life. To impose meaning.
            </Text>
            <Text as="div" mb="4">
              But what have your beliefs actually done for human existence?
            </Text>
            <Text as="div" mb="4">
              If a belief is strong enough, how does it affect the individual?
            </Text>

            <Text as="div" mb="1">
              My belief, if you're open to it, is built on equality.
            </Text>
            <Text as="div" mb="1">
              On the understanding that everything operates in duality.
            </Text>
            <Text as="div" mb="4">
              That all things are connected by balance and contradiction.
            </Text>

            <Text as="div" mb="1">
              So I will break down what has been inherited.
            </Text>
            <Text as="div" mb="1">
              And I will build something of my own.
            </Text>
            <Text as="div" mb="1">
              A mythology inside my head.
            </Text>
            <Text as="div" mb="4">
              A sacred structure for true humanity.
            </Text>

            <Text as="div" mb="4">
              Can you embrace the closed-eye space?
            </Text>

            <Text as="div" mb="4">
              What do you see when you close your eyes?
            </Text>

            <Text as="div" mb="1">
              Some may see nothing.
            </Text>
            <Text as="div" mb="1">
              Some see color.
            </Text>
            <Text as="div" mb="4">
              Some see worlds they’ve never known before.
            </Text>

            <Text as="div" mb="1">
              But when you close your eyes, you become connected.
            </Text>
            <Text as="div" mb="1">
              You sleep, just as all other lifeforms do.
            </Text>
            <Text as="div" mb="1">
              You may not dream.
            </Text>
            <Text as="div" mb="1">
              But you enter the closed-eye space.
            </Text>
            <Text as="div" mb="4">
              And that is where we are one.
            </Text>

            <Text as="div" mb="1">
              That is why I believe human beings are infinite.
            </Text>
            <Text as="div" mb="1">
              As infinite as space itself.
            </Text>
            <Text as="div" mb="1">
              As bright as stars.
            </Text>
            <Text as="div" mb="4">
              As powerful as energy.
            </Text>

            <Text as="div" mb="1">
              “Everything is within us. Dreams are manifestations of the
              energies of the body, in conflict with each other.
            </Text>
            <Text as="div" mb="1">
              This organ wants this, that organ wants that, the brain tries to
              make sense.
            </Text>
            <Text as="div" mb="1">
              Myth is a symbolic image of that conflict. That life.”
            </Text>
            <Text as="div" mb="4">
              — Joseph Campbell
            </Text>

            <Text as="div" mb="4">
              So, what is a myth?
            </Text>

            <Text as="div" mb="1">
              At its core, a myth is a story that explains existence: origin,
              purpose, transformation, fate.
            </Text>
            <Text as="div" mb="1">
              It is a system of meaning that connects people to something
              larger: cosmos, nature, gods, ancestors, self.
            </Text>
            <Text as="div" mb="1">
              A symbolic language made of recurring images, patterns, and
              archetypes.
            </Text>
            <Text as="div" mb="1">
              A ritual technology.
            </Text>
            <Text as="div" mb="4">
              Myths were told, sung, danced, carved, worn, reenacted.
            </Text>

            <Text as="div" mb="1">
              What makes it feel real is its emotional resonance.
            </Text>
            <Text as="div" mb="1">
              It speaks to collective human experience: death, love, exile,
              rebirth.
            </Text>
            <Text as="div" mb="1">
              It follows the logic of a dream.
            </Text>
            <Text as="div" mb="4">
              It takes on form through material presence: objects, rituals,
              garments, architecture.
            </Text>

            <Text as="div" mb="1">
              “The basis of all mythology is this: there is an invisible world
              supporting the visible one.”
            </Text>
            <Text as="div" mb="4">
              — Joseph Campbell
            </Text>

            <Text as="div" mb="4">
              Myth is a language.
            </Text>

            <Text as="div" mb="1">
              “Myth is a type of speech chosen by history. It cannot possibly
              evolve from the ‘nature’ of things.”
            </Text>
            <Text as="div" mb="4">
              — Roland Barthes
            </Text>

            <Text as="div" mb="1">
              Myth isn’t fiction.
            </Text>
            <Text as="div" mb="1">
              It is structure.
            </Text>
            <Text as="div" mb="1">
              A cultural construction.
            </Text>
            <Text as="div" mb="1">
              An insight into not how people worshiped, but the way they chose
              to see the world around them
            </Text>
            <Text as="div" mb="1">
              A survival strategy
            </Text>
            <Text as="div" mb="1">
              An incorporation of cosmology and projections of contemporary
              social values in narrative forms.
            </Text>
            <Text as="div" mb="4">
              A system for processing trauma, contradiction, memory, and dream.
            </Text>

            <Text as="div" mb="1">
              It is not about clarity.
            </Text>
            <Text as="div" mb="4">
              It is not even about truth.
            </Text>

            <Text as="div" mb="1">
              It is a container.
            </Text>
            <Text as="div" mb="1">
              For chaos.
            </Text>
            <Text as="div" mb="1">
              For identity.
            </Text>
            <Text as="div" mb="4">
              For grief.
            </Text>

            <Text as="div" mb="1">
              It is how artists invent reality on their own terms.
            </Text>
            <Text as="div" mb="4">
              It is how we speak across time: past, present, and future, all at
              once.
            </Text>

            <Text as="div" mb="1">
              Myth is the soul.
            </Text>
            <Text as="div" mb="1">
              The flight of imagination.
            </Text>
            <Text as="div" mb="4">
              Inspired by the energy of the body, and the mystery of life.
            </Text>

            <Text as="div" mb="1">
              And in the end, myth helps the individual realize the mystery and
              awe of the universe.
            </Text>
            <Text as="div" mb="1">
              And that, maybe, they are part of its awesomeness.
            </Text>
          </Box>
          <Box mb="9"></Box>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};
