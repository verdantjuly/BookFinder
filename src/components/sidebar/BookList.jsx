import "./BookList.css";
import { useContext } from "react";
import { BookContext } from "../BookContext";

export default function BookList({ books }) {
  const { setBook } = useContext(BookContext);
  return (
    <div className="book-list">
      {books.map((book) => (
        <div
          className="book-item"
          key={book.isbn}
          onClick={() => {
            setBook(book);
          }}
        >
          <img src={book.thumbnail} alt={`${book.title}의 썸네일`} />
          <div className="book-info">
            <h3>{book.title}</h3>
            <p>{book.authors.join(", ")}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
