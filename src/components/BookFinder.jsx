import Footer from "./Footer";
import Header from "./Header";
import SearchArea from "./SearchArea";

import "./BookFinder.css";
import BookDetail from "./BookDetail";

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
