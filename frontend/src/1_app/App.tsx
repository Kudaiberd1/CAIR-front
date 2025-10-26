import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import {ToastProvider} from "../6_shared/ui/toast";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastProvider />
    </BrowserRouter>
  );
}

export default App;
