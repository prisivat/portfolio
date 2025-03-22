import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaStackOverflow } from "react-icons/fa";
import TicTacToe from "./TicTacToe";
import Header from "./Header";
import TypingEffect from "react-typing-effect";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";

const slidingVariants = {
  hidden: { x: "-100vw" },
  visible: { x: 0, transition: { duration: 1 } }
};

const Portfolio = () => {
  return (
    <section id="home" style={{ height: "150vh", minHeight: "100vh", width: "100%", marginTop: "1rem" }}>
      <motion.div variants={slidingVariants}
        initial="hidden"
        animate="visible"
        style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>  <Grid xs={12} container sx={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", justifyContent: "center" }}>
          <Grid item xs={12} sx={{
            fontSize: "1rem", color: "#90909b !important", "&:hover": {
              color: "#61DAFB !important",
            },
          }}>Hi, I'm</Grid>
          <Grid item xs={12} sx={{
            fontSize: "5rem", "&:hover": {
              color: "#61DAFB",
            },
          }}>Priyanka S</Grid>
          <Grid item xs={6} sx={{
            color: "#90909b !important", marginTop: "1rem", "&:hover": {
              color: "#61DAFB !important",
            },
          }}>Explore my journey, skills, and projects as I build seamless digital experiences.</Grid>
        </Grid>
      </motion.div>
    </section>
  );
};

export default Portfolio;
