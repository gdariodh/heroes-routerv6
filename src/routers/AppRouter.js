import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
// screens
import LoginScreen from "../components/login/LoginScreen";
import DashBoardRoutes from "./DashboardRoutes";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <Router>
      {/* Layout: ej header */}

      <Routes>
        {/* <Route path="login" element={<LoginScreen />} /> */}

        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />

        {/* <Route path="/*" element={<DashBoardRoutes/>} /> */}

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashBoardRoutes />
            </PrivateRoute>
          }
        />
      </Routes>

      {/* Layout, ej: footer */}
    </Router>
  );
};

export default AppRouter;
