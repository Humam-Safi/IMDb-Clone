import { Route, Routes } from "react-router-dom";
import TrendingFilms from "./component/trendFilm/trendingFilms";
import TopBar from "./component/Home/topBar";
import TopRatedFilms from "./component/top_ratingFilm/topRatedFilms";
import TrendFilm from "./component/trendFilm/trendFilm";
import TopRatedFilm from "./component/top_ratingFilm/topRatedFilm";
import About from "./component/Home/about";
import Search from "./component/Search/search";
import { useEffect, useState } from "react";
import SearchFilm from "./component/Search/searchFilm";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);  
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="bg-bg-color min-h-screen select-none transition-colors duration-300">
      <TopBar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/top" element={<TopRatedFilms />} />
        <Route path="/" element={<TrendingFilms />} />
        <Route path="/trend/:id" element={<TrendFilm />} />
        <Route path="/top/:id" element={<TopRatedFilm />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:id" element={<SearchFilm />} />

      </Routes>
    </div>
  );
}

export default App;
