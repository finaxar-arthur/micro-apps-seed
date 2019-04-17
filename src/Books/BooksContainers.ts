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

const withBooks = graphql(BOOKS_QUERY);

export const withBooksContainers = compose(withBooks);
