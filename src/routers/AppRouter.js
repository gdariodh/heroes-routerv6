import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
// components
import { Navbar } from "../components/ui/Navbar";
// screens
import LoginScreen from "../components/login/LoginScreen";
import DcScreen from "../components/dc/DcScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import SearchScreen from "../components/search/SearchScreen";

const AppRouter = () => {
  return (
    <Router>
      {/* Layout: ej header */}

      <Navbar />
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="dc" element={<DcScreen />} />
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="login" element={<LoginScreen />} />
      </Routes>

      {/* Layout, ej: footer */}
    </Router>
  );
};

export default AppRouter;
