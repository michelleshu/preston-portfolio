import * as React from "react";
import { Accordion } from "radix-ui";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Grid } from "@radix-ui/themes";

import IconographyButton from "./IconographyButton";
import "./IconographyAccordion.css";
import Fall from "./iconography/Fall";
import Void from "./iconography/Void";
import Cloud from "./iconography/Cloud";
import Lightning from "./iconography/Lightning";
import Star from "./iconography/Star";
import Cosmos from "./iconography/Cosmos";

const IconographyAccordion = () => (
  <Accordion.Root className="AccordionRoot" type="single" collapsible>
    <Accordion.Item className="AccordionItem" value="infinity-planes">
      <AccordionTrigger>The Infinity Planes</AccordionTrigger>
      <AccordionContent>The Infinity Planes</AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="starborn-path">
      <AccordionTrigger>Starborn Path</AccordionTrigger>
      <AccordionContent>
        <Grid
          className="StarbornButtonGrid"
          columns={{ initial: "2", sm: "3", md: "6" }}
          gap="4"
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
        <div className="AccordionContentText">Metaphor</div>
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
        <div className="AccordionContentText">Dreamscape</div>
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
