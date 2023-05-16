import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import "./Navbar.styles.css";
const Navbar = () => {
  return (
    <div>
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{
          gap: { sm: "122px", xs: "40px" },
          mt: { sm: "32px", xs: "20px" },
          justifyContent: "none",
        }}
        px="20px"
      >
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
          <Link to="/" className="home-link">
            Home
          </Link>
          <a href="#exercises" className="exercise-link">
            Exercises
          </a>
        </Stack>
      </Stack>
    </div>
  );
};

export default Navbar;
