import "./SearchBar.css";

export default function SearchBar({ query, setQuery, findBooks }) {
  const handleSearch = (event) => {
    event.preventDefault();
    findBooks();
  };
  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        onChange={(event) => {
          setQuery(event.target.value);
        }}
        placeholder="검색어를 입력하시오."
      />
      <button type="submit">검색</button>
    </form>
  );
}