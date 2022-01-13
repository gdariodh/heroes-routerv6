import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
// screens
import LoginScreen from "../components/login/LoginScreen";
import DashBoardRoutes from "./DashboardRoutes";

const AppRouter = () => {
  return (
    <Router>
      {/* Layout: ej header */}

      <Routes>
        <Route path="login" element={<LoginScreen />} />

        <Route path="/*" element={<DashBoardRoutes/>} />
      </Routes>

      {/* Layout, ej: footer */}
    </Router>
  );
};

export default AppRouter;
