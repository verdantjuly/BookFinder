import axios from "axios";
import { useState } from "react";

import "./SearchArea.css";

export default function SearchArea() {
  const [query, setQuery] = useState("한강");
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState([]);

  const searchBooks = async () => {
    const response = await axios.get(`https://dapi.kakao.com/v3/search/book`, {
      headers: { Authorization: `KakaoAK ${process.env.REACT_APP_REST_API}` },
      params: { query, page, size: 1 },
    });
    const data = response.data;
    setBooks(data.documents);
    console.log(books);
  };

  return (
    <div className="search-area">
      <button
        onClick={() => {
          searchBooks();
        }}
      >
        검색{" "}
      </button>
    </div>
  );
}
