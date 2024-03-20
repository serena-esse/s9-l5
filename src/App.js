import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import TvShows from "./components/TvShows";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App bg-dark">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>

        <MovieDetails />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
