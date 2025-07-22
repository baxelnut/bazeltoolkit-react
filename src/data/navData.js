// Data
import { SVG_PATHS } from "../data/utilData";

export const SIDEBAR_MENUS = [
  {
    label: "Home",
    path: "/home",
    leading: SVG_PATHS.home,
  },
  {
    label: "Theme",
    leading: SVG_PATHS.eye,
    children: [
      {
        label: "Colors",
        path: "/theme/colors",
      },
      {
        label: "Fonts",
        path: "/theme/fonts",
      },
    ],
  },
  {
    label: "Components",
    leading: SVG_PATHS.gridFill,
    children: [
      {
        label: "UI",
        path: "/components/ui",
      },
      {
        label: "State",
        path: "/components/state",
      },
      {
        label: "Feedback",
        path: "/components/feedback",
      },
    ],
  },
  {
    label: "Utils",
    path: "/utils",
    leading: SVG_PATHS.diamond,
  },
];
