import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieApp/MovieCard";
import axios from "axios";

const Trending = () => {
  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    setContent(data.results);
  };
  useEffect(() => {
    fetchTrending();
  }, []);
  return (
    <div>
      <span className="uppercase flex justify-center font-serif text-2xl p-1 text-white">
        Trending Today
      </span>
      <section className="flex flex-wrap justify-around gap-5 mx-8 ">
        {content.map((c) => (
          <MovieCard
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            media_type={c.media_type}
            vote_average={c.vote_average}
          />
        ))}
      </section>
    </div>
  );
};

export default Trending;
