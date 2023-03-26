import { Route, Routes, Router, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:keyword" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

