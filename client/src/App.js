import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Genres from "./Pages/Genres";
import Release from "./Pages/Release";
import GetAnimeDetail from "./components/AnimeDetail/GetAnimeDetail";
import GenreDetails from "./components/Genre/GenreDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/release" element={<Release />} />
        <Route path="/genre_anime" element={<Genres />} />
        <Route path="/contact" element={<h1>Contact</h1>} />

        {/* Details Routing Page */}
        <Route path="/anime/:slug" element={<GetAnimeDetail />} />
        <Route path="/genres/:slug" element={<GenreDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
