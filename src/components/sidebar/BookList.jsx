import "./BookList.css";

export default function BookList({ books, setBook }) {
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
            <p>{book.authors}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
