import React, { useState, useEffect } from "react";

export default function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const books = JSON.parse(localStorage.getItem("my_books"));
    setBooks(books ? books : []);
  }, []);
  return (
    <div className="container">
      <h1>Welcome</h1>
      
      <div className="columns">
        {books.map((book) => (
          <div className="column col-4">
            <div className="card">
              <div className="card-image">
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  class="img-responsive"
                />
              </div>
              <div className="card-header">
                <div className="card-title h5">{book.volumeInfo.title}</div>
                <div className="card-subtitle text-gray">
                  {book.volumeInfo.authors[0]}
                </div>
              </div>
              <div className="card-body">{book.volumeInfo.description}</div>
              <div className="card-footer">
                <button className="btn btn-primary">Buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
