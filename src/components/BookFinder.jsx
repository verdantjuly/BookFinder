import Footer from "./Footer";
import Header from "./Header";
import SearchArea from "./sidebar/SearchArea";
import BookDetail from "./BookDetail";

import "./BookFinder.css";

export default function BookFinder() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <SearchArea />
        <BookDetail />
      </div>
      <Footer />
    </div>
  );
}
