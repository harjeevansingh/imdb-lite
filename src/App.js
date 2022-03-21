import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="app">
        <Router>
          <Header></Header>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/movie/:imdbID" element={<MovieDetail />}/>
              <Route path="*" element={<PageNotFound />}/>
            </Routes>
          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
