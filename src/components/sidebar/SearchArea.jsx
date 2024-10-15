import axios from "axios";
import { useState } from "react";

import SearchBar from "./SearchBar";
import BookList from "./BookList";

import "./SearchArea.css";
import Pagination from "./Pagination";

export default function SearchArea({ setBook }) {
  const [query, setQuery] = useState("한강");
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState([]);

  const findBooks = async () => {
    const response = await axios.get(`https://dapi.kakao.com/v3/search/book`, {
      headers: { Authorization: `KakaoAK ${process.env.REACT_APP_REST_API}` },
      params: { query, page, size: 10 },
    });
    const data = response.data;
    setBooks(data.documents);
    console.log(books);
  };

  return (
    <div className="search-area">
      <SearchBar
        query={query}
        setQuery={setQuery}
        findBooks={findBooks}
        searchBooks={() => {
          setPage(1);
          findBooks();
        }}
      />
      <BookList books={books} setBook={setBook} />
      <Pagination page={page} setPage={setPage} searchBooks={findBooks} />
    </div>
  );
}
