import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend JS framework",
  },

  {
    title: "What use React?",
    content: "Because React is amazing!",
  },

  {
    title: "How do you use React?",
    content: "We use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
