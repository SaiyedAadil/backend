import { IoTrendingDownOutline } from "react-icons/io5";
import { MdLocalMovies } from "react-icons/md";
import { PiFilmStripFill } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  // Map activeTab to the current pathname
  const activeTab = location.pathname.split("/").pop();

  const btnCls =
    "flex items-center flex-col p-2 text-white cursor-pointer transition-transform ease-linear duration-150 hover:-translate-y-1";

  return (
    <div className="flex justify-around bg-[#1976d2] py-2 fixed bottom-0 w-full">
      <Link
        to="trending"
        className={
          btnCls +
          (activeTab === "trending" ? " bg-[#114b85]" : " bg-transparent")
        }
      >
        <IoTrendingDownOutline className="text-2xl" />
        <span className="text-xs mt-1">Trending</span>
      </Link>
      <Link
        to="movies"
        className={
          btnCls +
          (activeTab === "movies" ? " bg-[#114b85]" : " bg-transparent")
        }
      >
        <MdLocalMovies className="text-2xl" />
        <span className="text-xs mt-1">Movies</span>
      </Link>
      <Link
        to="series"
        className={
          btnCls +
          (activeTab === "series" ? " bg-[#114b85]" : " bg-transparent")
        }
      >
        <PiFilmStripFill className="text-2xl" />
        <span className="text-xs mt-1">Series</span>
      </Link>
      <Link
        to="search"
        className={
          btnCls +
          (activeTab === "search" ? " bg-[#114b85]" : " bg-transparent")
        }
      >
        <IoMdSearch className="text-2xl" />
        <span className="text-xs mt-1">Search</span>
      </Link>
    </div>
  );
};

export default Navigation;
