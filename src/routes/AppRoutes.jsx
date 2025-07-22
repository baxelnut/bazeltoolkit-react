// Pages
import ColorsPage from "../pages/ColorsPage";
import FontPage from "../pages/FontPage";
import FeedbackPage from "../pages/FeedbackPage";
import HomePage from "../pages/HomePage";
import StatePage from "../pages/StatePage";
import UIPage from "../pages/UIPage";
import UtilPage from "../pages/UtilPage";
// API URLs
const API_URL = import.meta.env.VITE_API_URL;
const DEV_API_URL = import.meta.env.VITE_DEV_API;

export const appRoutes = [
  {
    path: "/",
    element: <HomePage API_URL={DEV_API_URL} />,
  },
  {
    path: "/home",
    element: <HomePage API_URL={DEV_API_URL} />,
  },
  {
    path: "/theme/colors",
    element: <ColorsPage API_URL={DEV_API_URL} />,
  },
  {
    path: "/theme/fonts",
    element: <FontPage API_URL={DEV_API_URL} />,
  },
  {
    path: "/components/ui",
    element: <UIPage API_URL={DEV_API_URL} />,
  },
  {
    path: "/components/state",
    element: <StatePage API_URL={DEV_API_URL} />,
  },
  {
    path: "/components/feedback",
    element: <FeedbackPage API_URL={DEV_API_URL} />,
  },
  {
    path: "/utils",
    element: <UtilPage API_URL={DEV_API_URL} />,
  },
];
