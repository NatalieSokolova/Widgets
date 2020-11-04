import React from "react";
import Accordion from "./components/Accordion";

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

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
