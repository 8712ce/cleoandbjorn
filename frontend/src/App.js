// DEPENDENCIES //
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

// PAGES //
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ChaptersPage from "./pages/ChaptersPage";
// import NewChapter from "./pages/NewChapter";

// COMPONENTS //
import Header from "./components/Header";
import About from "./components/About";
import Chapters from "./components/Chapters";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

// STYLES //
import './App.css';

function App() {

  // STATE //
  const [chapters, setChapters] = useState()


  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/header" element={<Header />} />

        <Route path="/about" element={<About />} />

        <Route path="/chapters" element={<Chapters />} />

        <Route path="/connect" element={<Connect />} />

        <Route path="/aboutPage" element={<AboutPage />} />

        <Route path="/chaptersPage" element={<ChaptersPage />} />

        {/* <Route path="/newChapter" element={<NewChapter />} /> */}

        <Route path="/footer" element={<Footer />} />

      </Routes>
    </div>
  );
}

export default App;
