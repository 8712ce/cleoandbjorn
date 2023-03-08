// DEPENDENCIES //
import { Routes, Route } from 'react-router-dom';
import React from 'react';

// PAGES //
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ChaptersPage from './pages/ChaptersPage';
import NewChapter from './pages/NewChapter';

// COMPONENTS //
import Header from "./components/Header";
import About from "./components/About";
import Chapters from "./components/Chapters";
import Yawn from "./components/Yawn";
import Footer from "./components/Footer";

// STYLES //
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/header" element={<Header />} />

        <Route path="/about" element={<About />} />

        <Route path="/chapters" element={<Chapters />} />

        <Route path="/aboutPage" element={<AboutPage />} />

        <Route path="/chaptersPage" element={<ChaptersPage />} />

        <Route path="/newChapter" element={<NewChapter />} />

        <Route path="/yawn" element={<Yawn />} />

        <Route path="/footer" element={<Footer />} />

      </Routes>
    </div>
  );
}

export default App;
