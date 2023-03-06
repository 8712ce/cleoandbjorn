// DEPENDENCIES //
import { Routes } from 'react-router-dom';
import React from 'react';

// COMPONENTS //
import Header from "./components/Header";
import About from "./components/About";
import Chapters from "./components/Chapters";
import Footer from "./components/Footer";

// STYLES //
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <About />

      <Chapters />

      <Footer />
    </div>
  );
}

export default App;
