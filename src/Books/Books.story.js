import React from "react";
import { storiesOf } from "@storybook/react";

import Books from "./Books.component";

const books = [
  {
    title: "Harry Potter",
    authors: [
      {
        name: "J.K. Rowling"
      }
    ]
  },
  {
    title: "Good Omens",
    authors: [
      {
        name: "Terry Pratchett"
      },
      {
        name: "Neil Gaiman"
      }
    ]
  }
];

storiesOf("Books", module)
  .add("no books", () => <Books />)
  .add("loading", () => <Books loading={true} />)
  .add("with books", () => <Books data={{ books: books }} />);
