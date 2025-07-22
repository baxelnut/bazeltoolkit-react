import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// Style
import "./App.css";
// Layouts
import Layout from "./components/layout/Layout";
// Routes
import { appRoutes } from "./routes/AppRoutes";
// import { ProtectedRoute } from "./routes/ProtectedRoute";
// Components
import ScrollToTop from "./components/utils/ScrollToTop";
import PageNotFound from "./pages/PageNotFound";
// Context
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`app-container ${isDarkMode ? "dark" : "light"}`}>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Public route - redirect if already logged in */}
          {/* <Route
            path="/login"
            element={
              <RedirectIfLoggedIn>
                <LoginPage />
              </RedirectIfLoggedIn>
            }
          /> */}
          {/* Redirect root */}
          {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
          {/* Protected routes */}
          {appRoutes.map(({ path, element, title }) => (
            <Route
              key={path}
              path={path}
              element={
                // <ProtectedRoute>
                <Layout>{element}</Layout>
                // </ProtectedRoute>
              }
            />
          ))}
          {/* Only admin */}
          {/* <Route
            path="/admin-panel"
            element={
              <ProtectedRoute adminOnly>
                <Layout pageTitle="Admin Panel">
                  <AdminPanelPage API_URL={API_URL} />
                </Layout>
              </ProtectedRoute>
            }
          /> */}
          {/* 404 */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
