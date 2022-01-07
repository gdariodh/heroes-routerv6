import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
// views
import DcScreen from "../components/dc/DcScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import SearchScreen from "../components/search/SearchScreen";
import Hero from "../components/hero/Hero";

const DashBoardRoutes = () => {
  return (
    <>
      <Navbar />
     
      <div className="container mt-5">
      <Routes>
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="dc" element={<DcScreen />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="hero" element={<Hero />} />
        <Route path="/" element={<MarvelScreen />} />
      </Routes>
      </div>


      
    </>
  );
};

export default DashBoardRoutes;
