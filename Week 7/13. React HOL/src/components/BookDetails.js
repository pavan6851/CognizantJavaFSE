import React from 'react';

const BookDetails = () => {
  const books = [
    { title: 'Master React', pages: 670 },
    { title: 'Deep Dive into Angular 11', pages: 800 },
    { title: 'Mongo Essentials', pages: 450 },
  ];

  return (
    <div className="book-details">
      {books.length > 0 ? (
        books.map((book, index) => (
          <div key={index}>
            <h3>{book.title}</h3>
            <p>Pages: {book.pages}</p>
          </div>
        ))
      ) : (
        <p>No books available</p>
      )}
    </div>
  );
};

export default BookDetails;
