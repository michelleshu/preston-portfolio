import React from "react";
import { Accordion } from "radix-ui";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Flex, Grid } from "@radix-ui/themes";

import IconographyButton from "./IconographyButton";
import IconographyButtonWhite from "./IconographyButtonWhite";
import "./IconographyAccordion.css";
import Cloud from "./iconography/Cloud";
import Cosmos from "./iconography/Cosmos";
import Dissonance from "./iconography/Dissonance";
import Dream from "./iconography/Dream";
import Dreamscape from "./iconography/Dreamscape";
import Fall from "./iconography/Fall";
import InfinityPlanes from "./iconography/InfinityPlanes";
import InnerFrequencies from "./iconography/InnerFrequencies";
import Lightning from "./iconography/Lightning";
import MainSequenceCard from "./iconography/MainSequenceCard";
import Metaphor from "./iconography/Metaphor";
import Negative from "./iconography/Negative";
import Nightmare from "./iconography/Nightmare";
import Polarity from "./iconography/Polarity";
import PolarityContent from "./iconography/PolarityContent";
import Positive from "./iconography/Positive";
import PositiveNegative from "./iconography/PositiveNegative";
import ProtostarCard from "./iconography/ProtostarCard";
import RedGiantCard from "./iconography/RedGiantCard";
import Resonance from "./iconography/Resonance";
import Science from "./iconography/Science";
import ScienceCarousel from "./iconography/ScienceCarousel";
import ScienceCarouselCard from "./iconography/ScienceCarouselCard";
import Star from "./iconography/Star";
import StarbornPath from "./iconography/StarbornPath";
import StarRemnantCard from "./iconography/StarRemnantCard";
import StellarNebulaCard from "./iconography/StellarNebulaCard";
import SupernovaCard from "./iconography/SupernovaCard";
import Void from "./iconography/Void";

import MainSequence from "../images/main-sequence.jpeg";
import Protostar from "../images/protostar.jpg";
import RedGiant from "../images/red-giant.jpg";
import StarRemnant from "../images/star-remnant.jpeg";
import StellarNebula from "../images/stellar-nebula.jpeg";
import Supernova from "../images/supernova.jpeg";

const IconographyAccordion = () => {
  const SCIENCE_CAROUSEL_OPTIONS = { align: "start", loop: false };

  const SCIENCE_CAROUSEL_SLIDES = [
    <ScienceCarouselCard image={StellarNebula}>
      <StellarNebulaCard />
    </ScienceCarouselCard>,
    <ScienceCarouselCard image={Protostar}>
      <ProtostarCard />
    </ScienceCarouselCard>,
    <ScienceCarouselCard image={Supernova}>
      <SupernovaCard />
    </ScienceCarouselCard>,
    <ScienceCarouselCard image={RedGiant}>
      <RedGiantCard />
    </ScienceCarouselCard>,
    <ScienceCarouselCard image={MainSequence}>
      <MainSequenceCard />
    </ScienceCarouselCard>,
    <ScienceCarouselCard image={StarRemnant}>
      <StarRemnantCard />
    </ScienceCarouselCard>,
  ];

  return (
    <Accordion.Root className="AccordionRoot" type="single" collapsible>
      <Accordion.Item className="AccordionItem" value="infinity-planes">
        <AccordionTrigger>The Infinity Planes</AccordionTrigger>
        <AccordionContent>
          <InfinityPlanes />
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="starborn-path">
        <AccordionTrigger>Starborn Path</AccordionTrigger>
        <AccordionContent>
          <StarbornPath />
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
        <AccordionContent>
          <Metaphor />
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="science">
        <AccordionTrigger>Science</AccordionTrigger>
        <AccordionContent>
          <Science />
          <ScienceCarousel
            slides={SCIENCE_CAROUSEL_SLIDES}
            options={SCIENCE_CAROUSEL_OPTIONS}
          />
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="dreamscape">
        <AccordionTrigger>Dreamscape</AccordionTrigger>
        <AccordionContent>
          <Dreamscape />
          <Flex gap="4" mt="4" mb="2" wrap="wrap">
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
          </Flex>
        </AccordionContent>
      </Accordion.Item>
      <Accordion.Item className="AccordionItem" value="polarity">
        <AccordionTrigger>Polarity: Scales of Balance</AccordionTrigger>
        <AccordionContent>
          <PolarityContent />
          <Flex mt="4" mb="2">
            <IconographyButtonWhite
              title="POLARITY"
              buttonVariant="outline"
              dialogTitle="Polarity"
            >
              <Polarity />
            </IconographyButtonWhite>
          </Flex>
        </AccordionContent>
      </Accordion.Item>
      <Accordion.Item className="AccordionItem" value="positive-negative">
        <AccordionTrigger>Positive and Negative</AccordionTrigger>
        <AccordionContent>
          <PositiveNegative />
          <Flex gap="4" mt="4" mb="2" wrap="wrap">
            <IconographyButtonWhite
              title="POSITIVE"
              buttonVariant="solid"
              dialogTitle="Positive Polarity"
            >
              <Positive />
            </IconographyButtonWhite>
            <IconographyButtonWhite
              title="NEGATIVE"
              buttonVariant="outline"
              dialogTitle="Negative Polarity"
            >
              <Negative />
            </IconographyButtonWhite>
          </Flex>
        </AccordionContent>
      </Accordion.Item>
      <Accordion.Item className="AccordionItem" value="inner-frequencies">
        <AccordionTrigger>Inner Frequencies (Dual Currents)</AccordionTrigger>
        <AccordionContent className="AccordionContent">
          <InnerFrequencies />
          <Flex gap="4" mt="4" mb="2" wrap="wrap">
            <IconographyButtonWhite
              title="RESONANCE"
              buttonVariant="solid"
              dialogTitle="Resonance"
            >
              <Resonance />
            </IconographyButtonWhite>
            <IconographyButtonWhite
              title="DISSONANCE"
              buttonVariant="outline"
              dialogTitle="Dissonance"
            >
              <Dissonance />
            </IconographyButtonWhite>
          </Flex>
        </AccordionContent>
      </Accordion.Item>
    </Accordion.Root>
  );
};

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
