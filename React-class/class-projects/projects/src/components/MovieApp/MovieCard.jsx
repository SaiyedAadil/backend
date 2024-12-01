import React from "react";
import { MdOutlineSettings } from "react-icons/md";

const MovieCard = ({ id, poster, title, date, media_type, vote_average }) => {
  return (
    <div className="bg-white text-black rounded-xl p-5  w-[300px] shadow-2xl">
      <div className="flex justify-between">
        <div className="inline-block bg-[#1976d2] py-1 px-2 rounded-xl mb-3 text-sm ">
          {vote_average.toFixed(1)}
        </div>
        <MdOutlineSettings />
      </div>
      <img
        src={"https://image.tmdb.org/t/p/w300" + poster}
        alt=""
        className="w-full h-auto rounded-lg mb-3"
      />
      <b className="block text-lg font-bold mb-2"> {title}</b>
      <div className="flex justify-between text-sm text-[#757575]">
        <span>{media_type}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default MovieCard;
