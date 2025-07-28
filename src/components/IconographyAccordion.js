import * as React from "react";
import { Accordion } from "radix-ui";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Grid, Text } from "@radix-ui/themes";

import IconographyButton from "./IconographyButton";
import IconographyButtonWhite from "./IconographyButtonWhite";
import "./IconographyAccordion.css";
import Fall from "./iconography/Fall";
import Void from "./iconography/Void";
import Cloud from "./iconography/Cloud";
import Lightning from "./iconography/Lightning";
import Star from "./iconography/Star";
import Cosmos from "./iconography/Cosmos";
import Dream from "./iconography/Dream";
import Nightmare from "./iconography/Nightmare";

const IconographyAccordion = () => (
  <Accordion.Root className="AccordionRoot" type="single" collapsible>
    <Accordion.Item className="AccordionItem" value="infinity-planes">
      <AccordionTrigger>The Infinity Planes</AccordionTrigger>
      <AccordionContent>The Infinity Planes</AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="starborn-path">
      <AccordionTrigger>Starborn Path</AccordionTrigger>
      <AccordionContent>
        <Text as="p" className="IconographyParagraph">
          First you have to: Fall: humans transition into chaos and change, the
          descent or ascent into understanding, once you fall, you enter the;
        </Text>
        <Text as="p" className="IconographyParagraph">
          Void: a place where we can reflect, through the void you contemplate,
          you learn, you change, taking on different forms, becoming a;{" "}
        </Text>
        <Text as="p" className="IconographyParagraph">
          Cloud: the state of transformation and understanding emotions, in this
          cloud-state your heart moves, adjusts, listens, feels, molds, and when
          that balance finds charge, you are struck by;
        </Text>
        <Text as="p" className="IconographyParagraph">
          Lightning: reaching transcendence, the ability to reach the stars,
          potential, infused by ancestral energy, you reach the start, the
          beginning, a;
        </Text>
        <Text as="p" className="IconographyParagraph">
          Star: becoming one with the cosmos, a place where we all meet, all
          touched with infinite possibilities, realms and imagination; that
          place is called the;
        </Text>
        <Text as="p" className="IconographyParagraph">
          Cosmos: the empty sky, a place where closed eyes meet, through the
          dream, you walk the Infinite Planes, where everything is within us.{" "}
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          Honestly, this was like a collage.
        </Text>
        <Text as="p" className="IconographyParagraph">
          And collages are one of my favorite mediums, art styles, really.
        </Text>
        <Text as="p" className="IconographyParagraph">
          They sum up what it means to be a human, especially right now.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          Think about it, we don’t exist inside a vacuum.
        </Text>
        <Text as="p" className="IconographyParagraph">
          You and me, we weren’t the first to do anything.
        </Text>
        <Text as="p" className="IconographyParagraph">
          We’re influenced by so much.
        </Text>
        <Text as="p" className="IconographyParagraph">
          We experience so much.
        </Text>
        <Text as="p" className="IconographyParagraph">
          We see, hear, read, scroll, binge, absorb constantly.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          It’s insane how shaped we are by the things around us.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          And I always wonder, who would I be without those influences?
        </Text>
        <Text as="p" className="IconographyParagraph">
          What kind of art would I make?
        </Text>
        <Text as="p" className="IconographyParagraph">
          Where would I be?
        </Text>
        <Text as="p" className="IconographyParagraph">
          What would I believe in?
        </Text>
        <Text as="p" className="IconographyParagraph">
          To be completely devoid of what shaped me... it’s terrifying.
        </Text>
        <Text as="p" className="IconographyParagraph">
          But it’s fascinating too.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          That’s why I see collages as being on the same level as dreams.
        </Text>
        <Text as="p" className="IconographyParagraph">
          As humans, we’re creatures of habit, so does repetition and comfort
          shape that too?
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          I’ve been dreaming my whole life.
        </Text>
        <Text as="p" className="IconographyParagraph">
          As a kid, it was hard for me to sleep, but also easy.
        </Text>
        <Text as="p" className="IconographyParagraph">
          Because dreams were fascinating and terrifying all at once.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          To exist in a space you can’t always control?
        </Text>
        <Text as="p" className="IconographyParagraph">
          That kind of freedom is both a blessing and a curse.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          And I always say this:
        </Text>
        <Text as="p" className="IconographyParagraph">
          The blessing is in the vividness; the senses, the excitement, the
          realness of the dream.
        </Text>
        <Text as="p" className="IconographyParagraph">
          But the curse...
        </Text>
        <Text as="p" className="IconographyParagraph">
          The curse is knowing I’ll wake up and be confined to this so-called
          “real” world again.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          This back and forth between the dream and the waking has affected me
          at every stage of life.
        </Text>
        <Text as="p" className="IconographyParagraph">
          Which is why this entire six-path system I’ve built feels like a
          collage of that experience.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          I’ve always loved reading.
        </Text>
        <Text as="p" className="IconographyParagraph">
          The fact that a person, a human being, can come up with something
          entirely new blows my mind.
        </Text>
        <Text as="p" className="IconographyParagraph">
          (And yes, I always emphasize that: humans create stories.)
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          Sure, a cat in your dreams might talk, or a spirit might visit you in
          a trip,
        </Text>
        <Text as="p" className="IconographyParagraph">
          but it’s still us making meaning out of it.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          Our thoughts give birth to new worlds.
        </Text>
        <Text as="p" className="IconographyParagraph">
          That’s beautiful.
        </Text>
        <Text as="p" className="IconographyParagraph">
          That’s creation.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          I’ve always wanted to do that.
        </Text>
        <Text as="p" className="IconographyParagraph">
          But for a long time, I didn’t know how.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          I thought stories had to be entirely new, or that I had to do things
          the way others did.
        </Text>
        <Text as="p" className="IconographyParagraph">
          That I had to match someone else's style or system.
        </Text>
        <Text as="p" className="IconographyParagraph">
          But it didn’t feel right.
        </Text>
        <Text as="p" className="IconographyParagraph">
          It wasn’t coming from me.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          There were sparks, but no ignition.
        </Text>
        <Text as="p" className="IconographyParagraph">
          I needed a catalyst.
        </Text>
        <Text as="p" className="IconographyParagraph">
          A form.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          That’s when I realized: dreams were it.
        </Text>
        <Text as="p" className="IconographyParagraph">
          Dreams are the access point.
        </Text>
        <Text as="p" className="IconographyParagraph">
          The language.
        </Text>
        <Text as="p" className="IconographyParagraph">
          The way I could shape and collage everything I’ve felt, seen, and
          imagined into something real.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          When I looked at what showed up in my dreams over and over again
        </Text>
        <Text as="p" className="IconographyParagraph">
          I saw a pattern.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          I fall a lot in my dreams.
        </Text>
        <Text as="p" className="IconographyParagraph">
          And the space itself, the space I fall through, is a void.
        </Text>
        <Text as="p" className="IconographyParagraph">
          That closed-eye place.
        </Text>
        <Text as="p" className="IconographyParagraph">
          That vast, dark, quiet, infinite nothingness.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          I was also a cloud-watcher growing up.
        </Text>
        <Text as="p" className="IconographyParagraph">
          I used to stare for hours. Clouds felt like moving pictures, always
          shifting, always forming new things.
        </Text>
        <Text as="p" className="IconographyParagraph">
          I wanted to be up there.
        </Text>
        <Text as="p" className="IconographyParagraph">
          I wanted to be one.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          That found its way into my dreamstate.
        </Text>
        <Text as="p" className="IconographyParagraph">
          Clouds started infecting everything.
        </Text>
        <Text as="p" className="IconographyParagraph">
          They broke apart, reformed, and turned into new imagery, new meaning.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          Then I saw lightning erupt from them.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          And it changed everything.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          Thunder.
        </Text>
        <Text as="p" className="IconographyParagraph">
          Flashes of light.
        </Text>
        <Text as="p" className="IconographyParagraph">
          Power erupting from mist.
        </Text>
        <Text as="p" className="IconographyParagraph">
          It was transcendent.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          I read stories of gods, powers, divine energy.
        </Text>
        <Text as="p" className="IconographyParagraph">
          People struck by lightning.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          In the physical world, being struck means pain.
        </Text>
        <Text as="p" className="IconographyParagraph">
          But spiritually?
        </Text>
        <Text as="p" className="IconographyParagraph">
          Energetically?
        </Text>
        <Text as="p" className="IconographyParagraph">
          What if that was transformation?
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          That concept followed me, through dreams, stories, metaphors.
        </Text>
        <Text as="p" className="IconographyParagraph">
          Lightning became a symbol of change.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          And of course, as someone who stares into the void and the sky... I
          thought of stars.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          The real void.
        </Text>
        <Text as="p" className="IconographyParagraph">
          Space.
        </Text>
        <Text as="p" className="IconographyParagraph">
          Nebulas.
        </Text>
        <Text as="p" className="IconographyParagraph">
          Energy.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          Things I see when I close my eyes.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          So... they must be real.
        </Text>
        <Text as="p" className="IconographyParagraph">
          And if I can see them, am I not part of them?
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          Over time, an idea became a belief:
        </Text>
        <Text as="p" className="IconographyParagraph">
          We are stars.
        </Text>
        <Text as="p" className="IconographyParagraph">
          Fragments. Energy. Light. Dust. Memory.
        </Text>
        <Text as="p" className="IconographyParagraph">
          All connected; through the cosmos, through dreams, through myth.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          Each of these archetypal paths evokes something specific in me.
        </Text>
        <Text as="p" className="IconographyParagraph">
          They mirror my identity, my experiences, my beliefs, my dreams.
        </Text>
        <Text as="p" className="IconographyParagraph">
          And so I’ve shaped them into a creative, symbolic system:
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          The Starborn Path
        </Text>
        <Text as="p" className="IconographyParagraph">
          My Major Arcana
        </Text>
        <Text as="p" className="IconographyParagraph">
          A collage of experience and dreaming
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          Each archetype represents a part of the body.
        </Text>
        <Text as="p" className="IconographyParagraph">
          A part of the self.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          These archetypes are my starting point.
        </Text>
        <Text as="p" className="IconographyParagraph">
          They are how I understand myself.
        </Text>
        <Text as="p" className="IconographyParagraph">
          They are my collage.
        </Text>
        <Text as="p" className="IconographyParagraph">
          They are the space where dreams become mythology.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          I spent too long trying to copy others.
        </Text>
        <Text as="p" className="IconographyParagraph">
          Now I let myself become the “Other.”
        </Text>
        <Text as="p" className="IconographyParagraph">
          The version of me that dreams into form, even if it’s all been thought
          before.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          Because I believe that even if the idea has been imagined before; you
          haven’t.
        </Text>
        <Text as="p" className="IconographyParagraph">
          And what you bring to it will always be different.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          This is why I chose dreams as the catalyst for my mythology.
        </Text>
        <Text as="p" className="IconographyParagraph">
          Because what could be more authentic than the part of reality that’s
          made entirely of you?
        </Text>
        <div className="IconographyBreak"></div>

        <Grid
          className="StarbornButtonGrid"
          columns={{ initial: "2", sm: "3", md: "6" }}
          gap="4"
          mt="4"
          mb="2"
        >
          <IconographyButton
            title="FALL"
            buttonColor="tomato"
            dialogColor="rgba(98, 36, 30, 0.8)"
            dialogTitle="Core Aspect: Desire"
          >
            <Fall />
          </IconographyButton>
          <IconographyButton
            title="VOID"
            buttonColor="purple"
            dialogColor="rgba(76, 47, 99, 0.8)"
            dialogTitle="Core Aspect: Mind"
          >
            <Void />
          </IconographyButton>
          <IconographyButton
            title="CLOUD"
            buttonColor="blue"
            dialogColor="rgba(0, 68, 122, 0.8)"
            dialogTitle="Core Aspect: Emotion"
          >
            <Cloud />
          </IconographyButton>
          <IconographyButton
            title="LIGHTNING"
            buttonColor="amber"
            dialogColor="rgba(83, 53, 12, 0.8)"
            dialogTitle="Core Aspect: Body"
          >
            <Lightning />
          </IconographyButton>
          <IconographyButton
            title="STAR"
            buttonColor="orange"
            dialogColor="rgba(90, 47, 10, 0.8)"
            dialogTitle="Core Aspect: Spirit"
          >
            <Star />
          </IconographyButton>
          <IconographyButton
            title="COSMOS"
            buttonColor="green"
            dialogColor="rgba(30, 79, 59, 0.8)"
            dialogTitle="Core Aspect: Soul"
          >
            <Cosmos />
          </IconographyButton>
        </Grid>
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="metaphor">
      <AccordionTrigger>Metaphor</AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
          <Text as="p" className="IconographyParagraph">
            The metaphor is this:
          </Text>
          <Text as="p" className="IconographyParagraph">
            My dream path follows the formation of a star.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            I believe humans are all connected; through time, space, energy,
            dreams, and the void. That we came from stars themselves. That to
            explore creation, I need to follow the birth of a star.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            Stars are real. They exist. People say God exists too. And if a god
            exists, then other existences can’t be denied. That’s why so much is
            theory and not fact, because the possibility that something could be
            true is what gives it power.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            We don’t know.
          </Text>
          <Text as="p" className="IconographyParagraph">
            And in not knowing… we do know.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            We know we can’t deny another person’s belief. But belief is full of
            contradiction. One person’s immoral is another person’s moral. These
            are human laws. And human laws shift. They can be rewritten,
            consciously, subconsciously, spiritually. That’s what gives birth to
            theory, concept, belief, system, narrative.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            So what does my work say metaphorically about how I view my
            identity?
          </Text>
          <Text as="p" className="IconographyParagraph">
            It says: I want to express my experience creatively, outside the
            narratives that were placed on me by a society obsessed with boxes.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            Let’s go outside the box, while still being in the box.
          </Text>
          <Text as="p" className="IconographyParagraph">
            Let’s bend it. Warp it. Dream through it.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            I can express how it feels to live in this world my way.
          </Text>
          <Text as="p" className="IconographyParagraph">
            I can construct a world and a reality that I’ve dreamed about,
            fantasized about, believed in. And why couldn’t it exist? Why
            couldn’t it matter?
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            By being a Black artist, the art I make is inherently Black. It
            speaks to what it means to live in a body like mine. I speak on
            identity in a way that breathes life into it, not as a label but as
            a force. If I shape a universe with my own rules, beliefs, and
            construction and others find a way into it; could it
          </Text>
          change how they see the world?
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            Isn’t that what art is?
          </Text>
          <Text as="p" className="IconographyParagraph">
            To inspire. To provoke.
          </Text>
          <Text as="p" className="IconographyParagraph">
            To create something open enough for others to step inside, but
            specific enough that they know you made it.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            I won’t lie, maybe I do enjoy the idea of playing god.
          </Text>
          <Text as="p" className="IconographyParagraph">
            But I’d never want to be one.
          </Text>
          <Text as="p" className="IconographyParagraph">
            I just fantasize about the act of creating.
          </Text>
          <Text as="p" className="IconographyParagraph">
            And really, there is no god without humans.
          </Text>
          <Text as="p" className="IconographyParagraph">
            Maybe god was lonely and needed us.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            Because gods only exist because we dreamed of them.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            And I want to give birth to a world defined by me, my experiences,
            my dreams, my biases, my influences. All of it. All that shaped me
            into who I am. I want to build something real. Authentic.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            I envy the ancestors who came before me.
          </Text>
          <Text as="p" className="IconographyParagraph">
            They created beliefs that led entire generations down paths.
          </Text>
          <Text as="p" className="IconographyParagraph">
            That’s power.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            I believe religion is one of the most powerful forces in existence.
          </Text>
          <Text as="p" className="IconographyParagraph">
            It shapes perception. Identity. Imagination.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            So why wouldn’t I want to create my own?
          </Text>
          <Text as="p" className="IconographyParagraph">
            Maybe that sounds like ego. Maybe some will call it hubris.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            But if I want to build something that shapes, mends, molds,
            inspires, reconstructs, and deconstructs:
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            Then what else could hold all of that?
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            A myth.
          </Text>
        </div>
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="science">
      <AccordionTrigger>Science</AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">Science</div>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item className="AccordionItem" value="dreamscape">
      <AccordionTrigger>Dreamscape</AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
          <Text as="p" className="IconographyParagraph">
            Dreams.
          </Text>
          <Text as="p" className="IconographyParagraph">
            Something explainable and unexplainable. The definitions are vast.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            States of influence that overlay archetypes and meanings. They alter
            perception, enhance symbolism, and serve as entry points to
            alternate realities.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            But why are nightmares always seen in a condescending light?
          </Text>
          <Text as="p" className="IconographyParagraph">
            What if the nightmare reflects negativity, just as the dream
            reflects positivity?
          </Text>
          <Text as="p" className="IconographyParagraph">
            Then they’re subject to the law of balance.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            Two opposing forces, but to me, they’re not good or bad. Not even
            necessarily positive or negative. They just are.
          </Text>
          <Text as="p" className="IconographyParagraph">
            They can exist within those frameworks, sure, but they don’t have to
            be defined by them.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            An individual can see both dreams and nightmares as partners to
            different concepts. It’s about understanding them.
          </Text>
          <Text as="p" className="IconographyParagraph">
            What can you gain from the two?
          </Text>
          <Text as="p" className="IconographyParagraph">
            What makes you define one over the other?
          </Text>
          <Text as="p" className="IconographyParagraph">
            What gives them their categories?
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            What if I only dream and nightmares don’t exist for me?
          </Text>
          <Text as="p" className="IconographyParagraph">
            But then… what defines a nightmare? Is it fear? Is it confusion? Is
            it the emotional residue left behind?
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            As humans, we’re always trying to define how we feel. But how often
            do we actually understand those feelings?
          </Text>
          <Text as="p" className="IconographyParagraph">
            Some people let others define them.
          </Text>
          <Text as="p" className="IconographyParagraph">
            Some choose to define it themselves.
          </Text>
          <Text as="p" className="IconographyParagraph">
            Some pretend it doesn’t exist.
          </Text>
          <Text as="p" className="IconographyParagraph">
            And some have never dreamed at all.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            To me, dreams are a well.
          </Text>
          <Text as="p" className="IconographyParagraph">
            A pool of infinite memories.
          </Text>
          <Text as="p" className="IconographyParagraph">
            I call them memories because the dream creates a life, a story, it’s
            up to us to remember it.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            But think of a dream as a switch. You close your eyes and wake up
            inside another body, another consciousness, an object, anything. But
            you wake up. Anew.
          </Text>
          <Text as="p" className="IconographyParagraph">
            The same, or different?
          </Text>
          <Text as="p" className="IconographyParagraph">
            Changed, or unchanged?
          </Text>
          <Text as="p" className="IconographyParagraph">
            In-body or out-of-body?
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            There’s a word for that. Dissociation. That drifting. That floating.
          </Text>
          <Text as="p" className="IconographyParagraph">
            And dreams leave room for infinite possibility.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            Sometimes I feel conflicted in this world. Can I define something
            for myself? Or will someone else’s ego try to do it for me?
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            Dreams are simple yet complex.
          </Text>
          <Text as="p" className="IconographyParagraph">
            Surreal in nature.
          </Text>
          <Text as="p" className="IconographyParagraph">
            Humans are physical, but dreams are not.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            I believe dreams connect us.
          </Text>
          <Text as="p" className="IconographyParagraph">
            I believe some people share dreams.
          </Text>
          <Text as="p" className="IconographyParagraph">
            I believe people can enter each other’s dreamscapes.
          </Text>
          <Text as="p" className="IconographyParagraph">
            And because I’ve experienced this, I believe it’s possible.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            If someone says they’ve experienced something spiritual, is that not
            a kind of truth?
          </Text>
          <Text as="p" className="IconographyParagraph">
            The astral plane.
          </Text>
          <Text as="p" className="IconographyParagraph">
            The closed-eye space.
          </Text>
          <Text as="p" className="IconographyParagraph">
            The void.
          </Text>
          <Text as="p" className="IconographyParagraph">
            The infinite.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            Why can’t I share one of mine?
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            Maybe this is all a dream within a dream.
          </Text>
          <Text as="p" className="IconographyParagraph">
            Maybe the real version of me found a way to stay here.
          </Text>
          <Text as="p" className="IconographyParagraph">
            Maybe this is hell.
          </Text>
          <Text as="p" className="IconographyParagraph">
            Maybe I’m already dead.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            But what I love about dreams is the ability to experience something
            new.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            Even though I struggle with imbalance, maybe dreams are a way to
            help with that.
          </Text>
          <Text as="p" className="IconographyParagraph">
            Or maybe they’re meant to destroy it.
          </Text>
          <Text as="p" className="IconographyParagraph">
            To destroy and rebuild, over and over again.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            I don’t think dreams are just illusions.
          </Text>
          <Text as="p" className="IconographyParagraph">
            They’re portals.
          </Text>
          <Text as="p" className="IconographyParagraph">
            Doorways into other realities.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            Each time I sleep, I awaken as another version of myself, exploring
            a different world with its own rules, its own gravity.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            Some nights, it feels like I never actually sleep.
          </Text>
          <Text as="p" className="IconographyParagraph">
            I just wake up again somewhere else.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            That’s how powerful dreams can be.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            I always feel something complicated when I hear people say they
            can’t dream.
          </Text>
          <Text as="p" className="IconographyParagraph">
            To live without this phenomenon, it might be a blessing. Or a curse.
          </Text>
          <Text as="p" className="IconographyParagraph">
            Because dreams distort.
          </Text>
          <Text as="p" className="IconographyParagraph">
            They infect the mind, body, emotion, spirit, and soul.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            But they also follow the law of balance.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            When I dream as Altensien Skybreaker, I gain access to the Infinity
            Planes.
          </Text>
          <Text as="p" className="IconographyParagraph">
            Even when I close my eyes, I can feel that part of me still there,
            like a channel I can tune into.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            That’s where I pull from.
          </Text>
          <Text as="p" className="IconographyParagraph">
            With a set of personal rituals, I can enter a kind of possessed
            state, a focus where I see what’s meant to be seen. Where I can
            write, study, collage, build, contemplate, and understand.
          </Text>
          <div className="IconographyBreak"></div>
          <Text as="p" className="IconographyParagraph">
            I’m excited for the journey ahead.
          </Text>
          <Text as="p" className="IconographyParagraph">
            One that moves through dreams, imagination, narrative, and art.
          </Text>
          <div className="IconographyBreak"></div>
          <Grid
            className="StarbornButtonGrid"
            columns="2"
            gap="4"
            mt="4"
            mb="2"
          >
            <IconographyButtonWhite
              title="DREAM"
              buttonVariant="solid"
              dialogTitle="Dream"
            >
              <Dream />
            </IconographyButtonWhite>
            <IconographyButtonWhite
              title="NIGHTMARE"
              buttonVariant="outline"
              dialogTitle="Nightmare"
            >
              <Nightmare />
            </IconographyButtonWhite>
          </Grid>
        </div>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item className="AccordionItem" value="polarity">
      <AccordionTrigger>Polarity: Scales of Balance</AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">Polarity: Scales of Balance</div>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item className="AccordionItem" value="positive-negative">
      <AccordionTrigger>Positive and Negative</AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">Positive and Negative</div>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item className="AccordionItem" value="inner-frequencies">
      <AccordionTrigger>Inner Frequencies (Dual Currents)</AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
          Inner Frequencies (Dual Currents)
        </div>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames("AccordionTrigger", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

export default IconographyAccordion;
