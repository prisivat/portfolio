import React from "react";
import Header from "./components/Header.tsx";
import Home from "./components/Portfolio.tsx";
import TicTacToe from "./components/TicTacToe.tsx";
import ContactInfo from "./components/ContactInfo.tsx";
import Skills from "./components/Skills.tsx";
import { Box } from "@mui/material";
import Sidebar from "./components/SideBar.tsx";

const App: React.FC = () => {
  return (
    <Box
      sx={{
        background: "black",
        width: "100%",
        color: "#c6c6cc",
        minHeight: "100vh", // Full height scrolling
        overflowX: "hidden",
        "&::-webkit-scrollbar": { width: "8px" },
        "&::-webkit-scrollbar-track": { background: "black" },
        "&::-webkit-scrollbar-thumb": { background: "#333", borderRadius: "10px" },
        "&::-webkit-scrollbar-thumb:hover": { background: "#555" },
        scrollbarColor: "#333 black", // Firefox scrollbar styling
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Content Area */}
      <Box sx={{ marginLeft: "80px", width: "calc(100% - 80px)", padding: "20px", }}>
        <Header />

        {/* Sections for React Scroll */}
        <section id="home" style={{ height: "150vh", minHeight: "100vh", width: "100%", marginTop: "2rem" }}>
          <Home />
        </section>

        <section id="skills" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <Skills />
        </section>

        <section id="fun" style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <TicTacToe />
        </section>



      </Box>
    </Box>
  );
};

export default App;
