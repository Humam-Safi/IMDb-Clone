import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";
import { SearchProvider } from "./context/Searchcontext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <SearchProvider>
        <Router>
          <App />
        </Router>
      </SearchProvider>
    </Provider>
  </StrictMode>
);
