import * as React from "react";
import { Accordion } from "radix-ui";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./IconographyAccordion.css";
import { Button, Grid } from "@radix-ui/themes";

const IconographyAccordion = () => (
  <Accordion.Root className="AccordionRoot" type="single" collapsible>
    <Accordion.Item className="AccordionItem" value="infinity-planes">
      <AccordionTrigger>The Infinity Planes</AccordionTrigger>
      <AccordionContent>The Infinity Planes</AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="starborn-path">
      <AccordionTrigger>Starborn Path</AccordionTrigger>
      <AccordionContent>
        <Grid className="StarbornButtonGrid" columns="6" gap="4">
          <Button color="tomato" variant="soft" highContrast size="3">
            FALL
          </Button>
          <Button color="purple" variant="soft" highContrast size="3">
            VOID
          </Button>
          <Button color="blue" variant="soft" highContrast size="3">
            CLOUD
          </Button>
          <Button color="amber" variant="soft" highContrast size="3">
            LIGHTNING
          </Button>
          <Button color="orange" variant="soft" highContrast size="3">
            STAR
          </Button>
          <Button color="green" variant="soft" highContrast size="3">
            COSMOS
          </Button>
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
      <AccordionTrigger>Inner Frequencies</AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">Inner Frequencies</div>
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
