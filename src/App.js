import Home from "./pages/home";
import Login from "./pages/login";
import paths from "./utils/paths";
import SignUp from "./pages/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./autentication/auth";
import PrivateRoutes from "./autentication/privateRoutes";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path={paths.home}
            element={
              <PrivateRoutes>
                <Home />
              </PrivateRoutes>
            }
          />
          <Route path={paths.login} element={<Login />} />
          <Route path={paths.signup} element={<SignUp />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
