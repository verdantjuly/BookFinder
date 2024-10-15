import Footer from "./Footer";
import Header from "./Header";
import SearchArea from "./sidebar/SearchArea";
import BookDetail from "./BookDetail";
import { useState } from "react";

export default function BookFinder() {
  const [book, setBook] = useState({});
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <SearchArea setBook={setBook} />
        <BookDetail book={book} />
      </div>
      <Footer />
    </div>
  );
}
