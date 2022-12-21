import Home from "./pages/home";
import Login from "./pages/login";
import paths from "./utils/paths";
import SignUp from "./pages/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./autentication/auth";
import PrivateRoutes from "./autentication/PrivateRoutes";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <PrivateRoutes path={paths.home} element={<Home />} />
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.signup} element={<SignUp />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
