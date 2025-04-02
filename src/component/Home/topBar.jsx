import { useContext, useEffect } from "react";
import { IoMdMoon } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { IoSunnyOutline } from "react-icons/io5";
import { SearchContext } from "../../context/Searchcontext";
import PropTypes from "prop-types";
import "../../css/component/style.css";

const TopBar = ({ theme, toggleTheme }) => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/search");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <div className="flex gap-4 text-primary-color">
          <a href="/">
            <p className="uppercase hidden sm:inline text-sm">Home</p>
          </a>
          <AiFillHome className="text-2xl sm:contents" />
          <a href="/about">
            <p className="uppercase hidden sm:inline text-sm">About</p>
          </a>
          <BsFillInfoCircleFill className="text-2xl sm:contents" />
        </div>
        <div className="flex items-center gap-4">
          <div style={{cursor:"pointer"}} onClick={toggleTheme}>
            {theme === "light" ? (
              <IoMdMoon className="text-2xl text-primary-color" />
            ) : (
              <IoSunnyOutline className="text-2xl text-primary-color" />
            )}
          </div>
          <a className="flex items-center gap-1" href="">
            <span className="text-2xl text-secondary-color font-bold bg-amber-400 px-2 py-1 rounded-lg">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline text-primary-color">
              Clone
            </span>
          </a>
        </div>
      </div>
      <div className="text-secondary-color flex justify-center gap-6 bg-amber-400 p-4 lg:text-lg">
        <div>
          <a
            className=" font-semibold underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            href="/"
          >
            Trending
          </a>
        </div>
        <div className="">
          <a className=" font-semibold false" href="/top">
            Top-Rated
          </a>
        </div>
      </div>
      <form className="flex justify-between px-5 max-w-6xl mx-auto">
        {" "}
        <input
          className="w-full h-14 rounded-md placeholder-primary-color text-primary-color outline-none bg-transparent flex-1"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Here"
        />{" "}
        <button
          type="button"
          onClick={handleSearch}
          className="text-amber-500 disabled:text-gray-400"
          disabled={!searchTerm}
        >
          {" "}
          Search{" "}
        </button>{" "}
      </form>
    </>
  );
};

TopBar.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired
};

export default TopBar;
