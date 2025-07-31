import React, { useState } from "react";
import { Box, Button, Text } from "@radix-ui/themes";
import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";

import "./Iconography.css";

export default () => {
  const [innerFrequenciesExpanded, setInnerFrequenciesExpanded] =
    useState(false);

  return (
    <Box className="IconographyScrollContainer">
      <Text as="p" className="IconographyParagraph">
        I think growing up Christian might have tampered with how I built my
        mythos, especially how I shaped the Oneiryn Frame. There’s only so much
        language you can use to explain the invisible parts of the human
        experience, especially when it comes to the body, the soul, and the
        strange in-between. At some point, you have to make meaning in a way
        that reflects how you see your inner self.
      </Text>
      <div className="IconographyBreak"></div>

      <Button
        variant="outline"
        color="gold"
        size="2"
        onClick={() => setInnerFrequenciesExpanded(!innerFrequenciesExpanded)}
      >
        {innerFrequenciesExpanded ? <TriangleUpIcon /> : <TriangleDownIcon />}
        {innerFrequenciesExpanded ? "Hide detail" : "Show more detail"}
      </Button>

      <Box
        className="InnerFrequenciesMoreDetail"
        style={{ display: innerFrequenciesExpanded ? "block" : "none" }}
      >
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          My goal was to construct a balance between the human body and my
          current perception of reality and how that reality affects what’s
          going on inside of us. But I kept noticing how much my upbringing,
          specifically the Christian binary of "good" and "evil," still filtered
          how I saw things.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          At one point, I even tried using "Sins" and "Virtues" to structure
          part of my framework, but it felt off. Why? Because they started to
          feel like tools of control, like social constructs meant to define how
          people think, choose, and reflect. A sense of "wrong" or "right"
          handed down by the word of God… or maybe just a person with power.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          Morality, to me, is vague. Arbitrary. Constructed.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          David Hume said virtues are built to serve societal utility, things
          like fidelity, justice, chastity. Without culture or structure, we
          wouldn't even think to define them. They aren't universal truths,
          they're functions.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          Friedrich Nietzsche said, “All good things were formerly bad things;
          every original sin has turned into an original virtue.” That stuck
          with me. It means the line between what we praise and what we punish
          is always shifting. So how can I root my system in something that
          fluid and imposed?
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          Symbolically, we often use the heart to express empathy, emotions,
          love, but what happens when we map that to frequencies? What happens
          when you feel something so deeply that it vibrates through you?
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          Fred Dallmayr wrote that “the heart might be described as the great
          resonance chamber, constantly open or attuned to new religious or
          mystical experiences.” That’s the kind of lens I want: spiritual,
          energetic, open, not moralistic.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          Sins and virtues, on the other hand, aren’t spiritual absolutes,
          they’re social tools, often used to control, exclude, or homogenize.
        </Text>
        <Text as="p" className="IconographyParagraph">
          When mislabeled as universal or eternal, they distort human nature and
          unbalance our creative, spiritual impulses.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          In my mythos, resonance and dissonance are not emotions, they’re
          states of alignment or misalignment. They’re currents. Signals. They
          show how energy is moving through you, not whether it’s "right" or
          "wrong."
        </Text>
        <Text as="p" className="IconographyParagraph">
          Resonance is when your thoughts, emotions, and actions are in sync. It
          is a state where your thoughts, emotions, and actions align with your
          core values and spiritual beliefs.You feel like you’re in tune with
          your values, your beliefs, your sense of self. It’s a moment of
          internal clarity and external connection. You might feel aligned with
          something bigger: the universe, a dream, a god, a memory, a feeling.
        </Text>
        <Text as="p" className="IconographyParagraph">
          It can show up as empathy, peace, direction, or even transformation.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          Dissonance is a split, a fracture between what you believe and what
          you’re doing, or feeling, or tolerating. It’s uncomfortable. It can be
          caused by internal conflict, outside pressure, new realizations, or
          even traumatic memory. Left unchecked, it leads to stagnation or
          crisis, but it can also lead to growth. It’s the breakdown that
          invites re-alignment.
        </Text>
        <Text as="p" className="IconographyParagraph">
          In psychology, that’s cognitive dissonance. In spirituality, it feels
          like losing your voice or drifting from your core.
        </Text>
        <div className="IconographyBreak"></div>
        <Text as="p" className="IconographyParagraph">
          So when I talk about resonance and dissonance in my system, I don’t
          mean right or wrong. I don’t mean sin or virtue. Resonance and
          dissonance are not binaries of virtue and sin, but currents of signal
          and interference. I mean movement, they are dual currents, inner
          frequencies within us. Both essential to the evolution of the soul,
          the clarity of the heart, and the mythic journey of the self. Similar
          to positive and negative, it all comes with a balance and is ruled by
          balance. These are not moral judgments. They don’t say “good” or
          “bad.” They simply show how energy is moving inside you right now. To
          live in only one is to become stagnant or deluded. To feel both is to
          be alive.
        </Text>
      </Box>
      <div className="IconographyBreak"></div>
    </Box>
  );
};
