import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import { Tooltip } from "@mui/material";

const Sidebar: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "fixed",
        height: "90vh", // Make sidebar full height
        width: "2rem",
        padding: "10px",
        backgroundColor: "black",
      }}
      className="fixed left-0 top-0 bg-gray-900 text-white flex flex-col items-center py-10 gap-8 z-50"
    >
      {/* GitHub Link */}
      <Tooltip title="Visit My GitHub">
        <a href="https://github.com/prisivat" target="_blank" rel="noopener noreferrer" style={{ paddingTop: "1rem" }}>
          <GitHubIcon sx={{
            cursor: "pointer", fontSize: 32, color: "white",
            "&:hover": {
              color: "#61DAFB", // Changes to black on hover
            },
          }} />
        </a>
      </Tooltip>

      {/* LinkedIn Link */}
      <Tooltip title="LinkedIn Profile">
        <a href="https://www.linkedin.com/in/priyanka-s-392b02237/" target="_blank" rel="noopener noreferrer" style={{ paddingTop: "1rem" }} >
          <LinkedInIcon sx={{
            cursor: "pointer", fontSize: 32, color: "white", "&:hover": {
              color: "#61DAFB",
            },
          }} />
        </a>
      </Tooltip>

      {/* Download Resume */}
      <Tooltip title="Download Resume">
        <a href="/myresume.pdf" download="PriyankaResume.pdf" style={{ paddingTop: "1rem" }}>
          <DownloadIcon sx={{
            cursor: "pointer", fontSize: 32, color: "white", "&:hover": {
              color: "#61DAFB", 
            },
          }} />
        </a>


      </Tooltip>
    </div>
  );
};

export default Sidebar;
