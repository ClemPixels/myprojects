import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import ProductTable from "./ProductTable";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
        setActivePage={setActivePage}
      />
      {activePage === "dashboard" && <Home />}
      {activePage === "products" && <ProductTable />}
    </div>
  );
}

export default App;
