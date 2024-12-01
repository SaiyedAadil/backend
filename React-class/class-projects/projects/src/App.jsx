import { Input } from "postcss";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TipCalculator from "./TipCalculator";
import MovieApp from "./MovieApp";

function App() {
  return (
    <>
      <Router>
        <div>
          {/* Navigation Links */}
          <nav className="min-h-4 bg-red-400 w-full">
            <ul className="flex justify-around items-center text-white shadow-lg ">
              <li>Click to go to Projects</li>
              <li>
                <Link to="/movieApp/trending">Project 1</Link>
              </li>
              <li>
                <Link to="/project2">Project 2</Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Define Routes */}
        <Routes>
          <Route path="/movieApp/*" element={<MovieApp />} />
          <Route path="/project2" element={<TipCalculator />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
