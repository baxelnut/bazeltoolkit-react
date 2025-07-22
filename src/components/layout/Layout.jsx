import { useState } from "react";
// Style
import "./Layout.css";
// Components
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="layout">
      <Sidebar onCollapseChange={setIsCollapsed} />
      <div className={`content-container ${isCollapsed ? "collapsed" : ""}`}>
        <main className="content">{children}</main>
      </div>
    </div>
  );
}
