import React, { useState } from "react";
import { Box, Button, Text } from "@radix-ui/themes";
import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";

import "./Iconography.css";

export default () => {
  const [starbornExpanded, setStarbornExpanded] = useState(false);

  return (
    <Box className="IconographyScrollContainer">
      <Text as="p" className="IconographyParagraph">
        First you have to:
      </Text>
      <Text as="p" className="IconographyParagraph">
        <Text as="span" weight="bold">
          Fall
        </Text>
        : humans transition into chaos and change, the descent or ascent into
        understanding, once you fall, you enter the;
      </Text>
      <Text as="p" className="IconographyParagraph">
        <Text as="span" weight="bold">
          Void
        </Text>
        : a place where we can reflect, through the void you contemplate, you
        learn, you change, taking on different forms, becoming a;
      </Text>
      <Text as="p" className="IconographyParagraph">
        <Text as="span" weight="bold">
          Cloud
        </Text>
        : the state of transformation and understanding emotions, in this
        cloud-state your heart moves, adjusts, listens, feels, molds, and when
        that balance finds charge, you are struck by;
      </Text>
      <Text as="p" className="IconographyParagraph">
        <Text as="span" weight="bold">
          Lightning
        </Text>
        : reaching transcendence, the ability to reach the stars, potential,
        infused by ancestral energy, you reach the start, the beginning, a;
      </Text>
      <Text as="p" className="IconographyParagraph">
        <Text as="span" weight="bold">
          Star
        </Text>
        : becoming one with the universe, a place where we all meet, all touched
        with infinite possibilities, realms and imagination; that place is
        called the;
      </Text>
      <Text as="p" className="IconographyParagraph">
        <Text as="span" weight="bold">
          Cosmos
        </Text>
        : the empty sky, a place where closed eyes meet, through the dream, you
        walk the Infinite Planes, where everything is within us.
      </Text>
      <div className="IconographyBreak"></div>

      <Button
        variant="outline"
        color="gold"
        size="2"
        onClick={() => setStarbornExpanded(!starbornExpanded)}
      >
        {starbornExpanded ? <TriangleUpIcon /> : <TriangleDownIcon />}
        {starbornExpanded ? "Hide detail" : "Show more detail"}
      </Button>

      <Box
        className="StarbornMoreDetail"
        style={{ display: starbornExpanded ? "block" : "none" }}
      >
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
      </Box>
      <div className="IconographyBreak"></div>
    </Box>
  );
};
