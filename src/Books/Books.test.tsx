import React from "react";
import { render } from "react-testing-library";

import Books from "./Books.component";
// import Loading from "../components/Loading";

it("shows no books", () => {
  const { getByText, getByTestId } = render(<Books />);
});

it("shows loading", () => {
  const { container } = render(<Books loading={true} />);
});

it("shows with books", () => {
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
  const { getByText, getByTestId } = render(<Books data={{ books }} />);
});
