import "./BookDetail.css";

export default function BookDetail({ book }) {
  if (!Object.keys(book).length) {
    return <div className="book-detail">책을 선택하세요.</div>;
  }
  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      <p>
        <b>저자 : </b>
        {book.authors.join(", ")}
      </p>
      <p>
        <b>출판사 : </b>
        {book.publisher}
      </p>
      <p>
        <b>출판일 : </b>
        {book.datetime}
      </p>
      <p>
        <b>ISBN : </b>
        {book.isbn}
      </p>
      <p>
        <b>설명 : </b>
        {book.contents}
      </p>
      <p>
        <b>URL : </b>
        <a src={book.url}>상세정보</a>
      </p>
      <img src={book.thumbnail} alt={`${book.title}의 썸네일`} />
    </div>
  );
}
