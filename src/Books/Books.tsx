import React from "react";
import { Empty } from "antd";
import { FormattedMessage } from "react-intl.macro";

import Loading from "../components/Loading";

const Books: React.FC<{
  loading?: boolean;
  data?: { books?: { title: string; author: { name: string } }[] };
}> = props => {
  const { loading = false, data: { books = [] } = {} } = props;

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>
        <FormattedMessage id="books.title" defaultMessage="List of books" />
      </h1>
      <div>
        {books.length > 0 ? (
          books.map(book => {
            return (
              <div>
                <div>title: {book.title}</div>
                <div>author: {book.author.name}</div>
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
