import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

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
      <Search />
      {/* <Accordion items={items} /> */}
    </div>
  );
};
