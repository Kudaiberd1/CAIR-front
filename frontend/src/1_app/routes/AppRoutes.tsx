import { Routes, Route } from "react-router-dom";
import LoginPage from "../../2_pages/login/ui/LoginPage.tsx";
import Dashboard from "../../2_pages/dashboard/ui/Dashboard.tsx";
import ProtectedRoute from "../../6_shared/lib/ProtectedRoute.tsx";

const AppRoutes = () => {
  return (
      <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
              <Route path={"/"} element={<Dashboard />} />
          </Route>
      </Routes>
  );
};

export default AppRoutes;
