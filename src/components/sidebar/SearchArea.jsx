import axios from "axios";
import { useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import BookList from "./BookList";

import "./SearchArea.css";
import Pagination from "./Pagination";

export default function SearchArea() {
  const [query, setQuery] = useState("한강");
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState([]);
  const [isEnd, setIsEnd] = useState(true);
  const [isFound, setIsFound] = useState(false);

  useEffect(() => {
    const findBooks = async () => {
      const response = await axios.get(
        `https://dapi.kakao.com/v3/search/book`,
        {
          headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_REST_API}`,
          },
          params: { query, page, size: 5 },
        }
      );
      const data = response.data;

      setIsEnd(data.meta.is_end);
      setBooks(data.documents);
      setIsFound(false);
    };
    findBooks();
  }, [isFound, page]);

  return (
    <div className="search-area">
      <SearchBar query={query} setQuery={setQuery} setIsFound={setIsFound} />
      <BookList books={books} />
      <Pagination page={page} setPage={setPage} isEnd={isEnd} />
    </div>
  );
}
