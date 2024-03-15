import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import TvShows from "./components/TvShows";

function App() {
  return (
    <div className="App bg-dark">
      <NavBar />
      <TvShows />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
