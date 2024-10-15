import "./Pagination.css";

export default function Pagination({ page, setPage, searchBooks }) {
  const handlePrev = () => {
    setPage(page - 1);
    searchBooks();
  };
  const handleNext = () => {
    setPage(page + 1);
    searchBooks();
  };
  return (
    <div>
      <button onClick={handlePrev}>이전</button>
      <span>{page}</span>
      <button onClick={handleNext}>다음</button>
    </div>
  );
}
