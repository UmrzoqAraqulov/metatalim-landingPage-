"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import "./accordion.css";
import Image from "next/image";

export default function CustomAccordion() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion variant="splitted">
      <AccordionItem
        key="1"
        aria-label="Speaking"
        title="Speaking"
        indicator={PlusIcon}
        style={{
          background: "red",
          padding: "0px 10px",
          color: "white",
          borderRadius: "3px",
        }}
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Listening"
        title="Listening"
        indicator={PlusIcon}
        style={{
          background: "red",
          padding: "0px 10px",
          color: "white",
          borderRadius: "3px",
        }}
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Reading"
        title="Reading"
        indicator={PlusIcon}
        style={{
          background: "red",
          padding: "0px 10px",
          color: "white",
          borderRadius: "3px",
        }}
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Writing"
        title="Writing"
        indicator={PlusIcon}
        style={{
          background: "red",
          padding: "0px 10px",
          color: "white",
          borderRadius: "3px",
        }}
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="A1, A2, B1, B2, C1"
        title="A1, A2, B1, B2, C1"
        indicator={PlusIcon}
        style={{
          background: "red",
          padding: "0px 10px",
          color: "white",
          borderRadius: "3px",
          boxShadow:"0px 0px 10px gray"
        }}
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}

const PlusIcon = () => (
  <div>
    <Image src="/plusIcon.svg" alt="sun icon" width={20} height={20} />
  </div>
);
