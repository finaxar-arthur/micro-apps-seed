import React from "react";
import { Spin, Empty } from "antd";

const Books: React.FC<{
  loading?: boolean;
  books?: { title: string; author: string }[];
}> = props => {
  const { loading = false, books = [] } = props;

  if (loading) {
    return <Spin />;
  }

  return (
    <div>
      <h1>List of books</h1>
      <div>
        {books.length > 0 ? (
          books.map(book => {
            return (
              <div>
                <div>title: {book.title}</div>
                <div>author: {book.author}</div>
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
