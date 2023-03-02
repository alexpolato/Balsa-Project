import Home from "./pages/home";
import Home2 from "./pages/home2";
import Login from "./pages/login";
import paths from "./utils/paths";
import SignUp from "./pages/signup";
import Line from "./pages/line";
import ForgotPassword from "./pages/forgotPassword";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./autentication/auth";
// import PrivateRoutes from "./autentication/privateRoutes.js";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path={paths.home}
            element={
              // <PrivateRoutes>
              <Home />
              // </PrivateRoutes>
            }
          />
          <Route path={paths.home2} element={<Home2 />} />
          <Route path={paths.login} element={<Login />} />
          <Route path={paths.forgotpass} element={<ForgotPassword />} />
          <Route path={paths.signup} element={<SignUp />} />
          <Route path={paths.line} element={<Line />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
