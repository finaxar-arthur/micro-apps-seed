import { compose, graphql } from "react-apollo";
import gql from "graphql-tag";

const BOOKS_QUERY = gql`
  query BooksQuery {
    books {
      title
      author {
        name
      }
    }
  }
`;

const BOOKS_ADDED_SUBSCRIPTION = gql`
  subscription onBookAdded {
    bookAdded {
      books {
        title
        author {
          name
        }
      }
    }
  }
`;

const withBooksQuery = graphql(BOOKS_QUERY);
const withBooksAddedSubscription = graphql(BOOKS_ADDED_SUBSCRIPTION);

export const withBooksContainers = compose(
  withBooksQuery,
  withBooksAddedSubscription
);
