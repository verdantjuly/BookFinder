import "./BookDetail.css";

export default function BookDetail({ book }) {
  if (!book) {
    return <div className="book-detail">책을 선택하세요.</div>;
  }
  return (
    <div className="book-detail">
      <img />
      <h2></h2>
      <p></p>
    </div>
  );
}
