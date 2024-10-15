import "./SearchBar.css";

export default function SearchBar({ query, setQuery, searchBooks }) {
  return (
    <form className="search-bar">
      <input
        type="text"
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      />
      <button>검색</button>
    </form>
  );
}
