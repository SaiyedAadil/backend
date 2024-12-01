import { Routes, Route } from "react-router-dom";
import Header from "./components/MovieApp/Header";
import Navigation from "./components/MovieApp/Navigation";
import Trending from "./pages/MovieAppPages/Trending";
import Movies from "./pages/MovieAppPages/Movies";
import Search from "./pages/MovieAppPages/Search";
import Series from "./pages/MovieAppPages/Series";
import RouteConfig from "./components/MovieApp/RouteConfig";

function MovieApp() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-600 text-white pt-5 pb-16 ">
        <Routes>
          <Route path="trending" element={<Trending />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
          <Route path="search" element={<Search />} />
        </Routes>
        {/* <Route path="/movie/:id" element={<MovieDetails />} /> */}
      </div>
      <Navigation />
    </>
  );
}

export default MovieApp;
