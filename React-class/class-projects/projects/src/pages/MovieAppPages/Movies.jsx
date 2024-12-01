import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
const Movies = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1); // Default to page 1
  const location = useLocation();

  const fetchTrending = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      );
      setContent(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, [page]); // Re-fetch data when the page changes
  return (
    <div>
      <span className="uppercase flex justify-center font-serif text-2xl p-1 text-white">
        MOVIES ONLY PAGE
      </span>
      <section className="flex flex-wrap justify-around gap-5 mx-8 ">
        {content.map((c) => (
          <MovieCard
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            overview={c.overview}
            vote_average={c.vote_average}
          />
        ))}
      </section>
    </div>
  );
};

export default Movies;

const MovieCard = ({ id, poster, title, date, overview, vote_average }) => {
  return (
    <div className="bg-white text-black rounded-xl p-5 text-ellipsis  w-[300px] shadow-2xl">
      <div className="flex justify-between">
        <div className="inline-block bg-[#1976d2] py-1 px-2 rounded-xl mb-3 text-sm ">
          {vote_average.toFixed(1)}
        </div>
      </div>
      <img
        src={"https://image.tmdb.org/t/p/w300" + poster}
        alt=""
        className="w-full h-auto rounded-lg mb-3"
      />
      <b className="block text-lg font-bold mb-2"> {title}</b>
      <div className="flex w-full h-10 justify-between text-sm text-[#757575]">
        <span className="w-2/4 h-7 overflow-hidden text-ellipsis whitespace-nowrap">
          {overview}
        </span>
        <span>{date}</span>
      </div>
    </div>
  );
};
