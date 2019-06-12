import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Link } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    top: "2rem",
    right: "2rem",
    textAlign: "right",
    zIndex: 1,
    color: "#c9af98",
    mixBlendMode: "difference"
  }
});

const Nav = () => {
  const classes = useStyles();

  const handleClick = anchor => {
    document &&
      document.getElementById(anchor).scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      });
  };

  return (
    <>
      <Typography className={classes.root} variant="caption">
        <Link
          underline="hover"
          component="div"
          onClick={() => handleClick("about")}
        >
          About
        </Link>
        <br />
        <Link
          underline="hover"
          component="div"
          onClick={() => handleClick("current")}
        >
          Current Work
        </Link>
        <br />
        <Link
          underline="hover"
          component="div"
          onClick={() => handleClick("future")}
        >
          Future Projects
        </Link>
        <br />
        <Link
          underline="hover"
          component="div"
          onClick={() => handleClick("contact")}
        >
          Contact
        </Link>
        <br />
        <Link
          underline="hover"
          href="https://drive.google.com/file/d/0B71klMpcGRmYZ2lVdVRZR3dPRFJ0U1lpdk4zOGRnUWZTN040/view?usp=sharing"
          target="_blank"
          rel="noopener"
        >
          View Resume
        </Link>
      </Typography>
    </>
  );
};

export default Nav;
