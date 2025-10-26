import { Routes, Route } from "react-router-dom";
import LoginPage from "../../2_pages/login/ui/LoginPage.tsx";

const AppRoutes = () => {
  return (
      <Routes>
          <Route path="/login" element={<LoginPage />} />
      </Routes>
  );
};

export default AppRoutes;
