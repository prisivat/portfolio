import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "calc(95% - 80px)",
        marginTop: "1rem",
        padding: "10px",
        zIndex: 1000,
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "end",
          listStyle: "none",
          paddingRight: "2rem",
        }}
      >
        {/* Home Link */}
        <Grid
          item
          sx={{
            marginRight: "20px",
            "& a": { cursor: "pointer" }, // ✅ Ensures Link gets cursor styling
            "&:hover a": { color: "#61DAFB" }, // ✅ Hover effect
          }}
        >
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </Grid>

        {/* Game Zone Link */}
        <Grid
          item
          sx={{
            marginRight: "20px",
            "& a": { cursor: "pointer" },
            "&:hover a": { color: "#61DAFB" },
          }}
        >
          <Link to="fun" smooth={true} duration={500}>
            Game Zone
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
