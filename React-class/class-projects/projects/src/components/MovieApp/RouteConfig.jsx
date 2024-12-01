import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Trending from "../../pages/MovieAppPages/Trending";
import Movies from "../../pages/MovieAppPages/Movies";
import Series from "../../pages/MovieAppPages/Series";
import Search from "../../pages/MovieAppPages/Search";

const RouteConfig = () => {
  return (
    <Routes>
      <Route path="movieApp" element={<Navigation />}>
        <Route index element={<Trending />} />
        <Route path="trending" element={<Trending />} />
        <Route path="movies" element={<Movies />} />
        <Route path="series" element={<Series />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  );
};

export default RouteConfig;
