import { useContext } from "react";
import { BookContext } from "./BookContext";
import "./BookDetail.css";

export default function BookDetail() {
  const { book } = useContext(BookContext);
  if (!book) {
    return <div className="book-detail">책을 선택하세요.</div>;
  }
  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      <p>
        <strong>저자 : </strong>
        {book.authors.join(", ")}
      </p>
      <p>
        <strong>출판사 : </strong>
        {book.publisher}
      </p>
      <p>
        <strong>출판일 : </strong>
        {book.datetime.split("T")[0]}
      </p>
      <p>
        <strong>ISBN : </strong>
        {book.isbn}
      </p>
      <p>
        <strong>설명 : </strong>
        {book.contents}
      </p>
      <p>
        <strong>URL : </strong>
        <a href={book.url}>상세정보</a>
      </p>
      <img src={book.thumbnail} alt={`${book.title}의 썸네일`} />
    </div>
  );
}
