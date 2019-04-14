import { compose, graphql } from "react-apollo";
import gql from "graphql-tag";

export const withBooksContainers = compose(
  graphql(gql`
    query BooksQuery {
      books {
        title
        author
      }
    }
  `)
);
