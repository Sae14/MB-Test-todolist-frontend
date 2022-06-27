import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import About from "./pages/About";
import New from "./pages/New";
import Details from "./pages/Details";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/MB-Test-todolist-frontend/" element={<Home />} />
        <Route path="/MB-Test-todolist-frontend/new" element={<New />} />
        <Route
          path="/MB-Test-todolist-frontend/details/:id"
          element={<Details />}
        />
        <Route path="/MB-Test-todolist-frontend/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
