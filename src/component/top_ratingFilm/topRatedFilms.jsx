import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLike } from "react-icons/ai";
import { fetchTopRated } from "../../store/slices/topRatedSlice";
import { FaStar } from "react-icons/fa";

const TopRatedFilms = () => {
  const dispatch = useDispatch();
  const topRatedFilms = useSelector((state) => state.topRatedFilms);
  useEffect(() => {
    dispatch(fetchTopRated());
  }, [dispatch]);

  const dataShow = topRatedFilms.map((film , index) => (
    <div key={index}>
      <div className="films">
        <a href={`top/${film.id}`}>
          <img
            style={{ width: "100%", height: "220px" }}
            className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
            src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
            alt={film.title}
          />
          <div className="text-primary-color p-2c p-2">
            <p className="line-clamp-2 text-md mb-3">{film.overview}</p>
            <h2 className="text-lg font-bold truncate text-amber-400 mb-3">
              {film.title || film.name}
            </h2>
            <p className="flex items-center justify-between mb-3">
              {film.release_date || film.first_air_date}
              <div className="flex items-center">
                {<AiOutlineLike className="h-5 mr-1 ml-3" />}
                {film.vote_count}
              </div>
            </p>
            <p className="flex items-center">
              {Number(film.vote_average).toFixed(1)}{" "}
              <FaStar className="ml-3 text-amber-400" />
            </p>
          </div>
        </a>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 max-w-6xl mx-auto py-4">
        {dataShow}
      </div>
    </div>
  );
};

export default TopRatedFilms;
