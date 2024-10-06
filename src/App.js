import LoginPage from "./LoginPage/login";
import Hello from "./components/hello";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./const";
import Blog from "./Blog/Blog";
import Footer from "./Footer/Footer";

function App() {
  function Logout() {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    return <Navigate to="/login" />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Hello></Hello>
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <>
              {/* <LoginPage /> */}
              <Blog />
              <Footer />
            </>
          }
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
