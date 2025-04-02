import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchTopRated } from "../../store/slices/topRatedSlice";
import { FaStar } from "react-icons/fa";

const TopRatedFilm = () => {
  const dispatch = useDispatch();

  const topRatedFilms = useSelector((state) => state.topRatedFilms);
  useEffect(() => {
    dispatch(fetchTopRated());
  }, [dispatch]);

  const { id } = useParams();

  const film = topRatedFilms.filter((film) => film.id === Number(id))[0];

  if (!topRatedFilms.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      <div className="p-4  md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <img
          style={{
            boxShadow: "1px 1px 5px rgb(255 , 255 , 255)",
            maxWidth: "100%",
            height: "100%",
            borderRadius: "8px",
          }}
          src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
          alt=""
        />
        <div className="text-primary-color p-2">
          <h2 className="text-lg mb-3 font-bold text-amber-400">{film.title || film.name}</h2>
          <p className="text-lg mb-3">{film.overview}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">
              Date Released: {film.release_date || film.first_air_date}
            </span>
          </p>
          <p className="mb-3 ">
            <span className="font-semibold mr-1 flex items-center">
              Ratign: {Number(film.vote_average).toFixed(1)}
              <FaStar className="ml-3 text-amber-400" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopRatedFilm;
