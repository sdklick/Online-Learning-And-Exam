import React from "react";
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Setquestion from "./Setquestion.jsx";
import Contact from "./Contact";
import Adminpage from "./Adminpage.jsx";
import Exampage from "./Exampage.jsx";
import Examresult from "./Examresult.jsx";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/setquestion" element={<Setquestion />} />
          <Route path="/exampage" element={<Exampage />} />
          <Route path="/examresult" element={<Examresult />} />
          <Route path="/adminpage" element={<Adminpage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
