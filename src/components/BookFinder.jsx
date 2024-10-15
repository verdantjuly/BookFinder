import Footer from "./Footer";
import Header from "./Header";
import SearchArea from "./sidebar/SearchArea";
import BookDetail from "./BookDetail";
import { useState } from "react";
import { BookContext } from "./BookContext";

export default function BookFinder() {
  const [book, setBook] = useState(null);
  return (
    <BookContext.Provider value={{ book, setBook }}>
      <div className="App">
        <Header />
        <div className="main-content">
          <SearchArea />
          <BookDetail />
        </div>
        <Footer />
      </div>
    </BookContext.Provider>
  );
}
