import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("HOME");

  const renderPage = () => {
    switch (currentPage) {
      case "HOME":
        return <Home />;
      case "ABOUT":
        return <About />;
      case "SERVICES":
        return <Services />;
      case "CONTACT":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {/* Pass state and setter function to NavBar */}
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="p-4">{renderPage()}</main>
    </div>
  );
}

export default App;
