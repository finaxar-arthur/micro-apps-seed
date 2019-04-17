import React from "react";
import { Empty } from "antd";
import { FormattedMessage } from "react-intl.macro";
import logo from "./logo.png";
import { BooksTitle } from "./Books.style";

import Loading from "../components/Loading";

const Books: React.FC<{
  loading?: boolean;
  data?: { books?: { title: string; authors: { name: string }[] }[] };
}> = props => {
  const { loading = false, data: { books = [] } = {} } = props;

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <BooksTitle>
        <img src={logo} alt="Logo" />
        <FormattedMessage id="books.title" defaultMessage="List of books" />
      </BooksTitle>
      <div>
        {books.length > 0 ? (
          books.map(book => {
            return (
              <div>
                <div>title: {book.title}</div>
                <div>
                  {book.authors.map(author => (
                    <span>{author.name}</span>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};

export default Books;
