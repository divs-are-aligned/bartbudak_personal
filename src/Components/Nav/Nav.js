import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Link, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    top: "2rem",
    right: "0rem",
    textAlign: "right",
    zIndex: 1,
    color: "#f5f5f5",
    opacity: 0,
    mixBlendMode: "difference",
    animation: "$menuFade 300ms ease-in-out forwards"
  },
  link: {
    position: "relative",
    right: 0,
    opacity: 0,
    animation: "$linkFade 750ms ease-in-out forwards"
  },
  "@keyframes linkFade": {
    from: {
      right: "-2rem",
      opacity: 0
    },
    to: {
      right: 0,
      opacity: 1
    }
  },
  "@keyframes menuFade": {
    from: {
      right: "-2rem",
      opacity: 0
    },
    to: {
      right: "1rem",
      opacity: 1
    }
  }
});

const Nav = () => {
  const classes = useStyles();
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const top = window.pageYOffset || document.documentElement.scrollTop;

    if (top > 16) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
    return;
  }

  const handleClick = anchor => {
    if (anchor === "menu") {
      setShowMenu(true);
      return;
    }

    document &&
      document.getElementById(anchor).scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      });
  };

  return (
    <>
      {showMenu ? (
        <Typography id="nav" className={classes.root} variant="caption">
          <Link
            className={classes.link}
            underline="hover"
            component="div"
            onClick={() => handleClick("about")}
          >
            About
          </Link>
          <br />
          <Link
            className={classes.link}
            underline="hover"
            component="div"
            onClick={() => handleClick("current")}
            style={{ animationDelay: "100ms" }}
          >
            Current Work
          </Link>
          <br />
          <Link
            className={classes.link}
            underline="hover"
            component="div"
            onClick={() => handleClick("future")}
            style={{ animationDelay: "200ms" }}
          >
            Future Projects
          </Link>
          <br />
          <Link
            className={classes.link}
            underline="hover"
            component="div"
            onClick={() => handleClick("contact")}
            style={{ animationDelay: "300ms" }}
          >
            Contact
          </Link>
          <br />
          <Link
            className={classes.link}
            underline="hover"
            href="https://drive.google.com/file/d/0B71klMpcGRmYZ2lVdVRZR3dPRFJ0U1lpdk4zOGRnUWZTN040/view?usp=sharing"
            target="_blank"
            rel="noopener"
            style={{ animationDelay: "400ms" }}
          >
            View Resume
          </Link>
        </Typography>
      ) : (
        <IconButton
          onClick={() => handleClick("menu")}
          className={classes.root}
        >
          <Menu />
        </IconButton>
      )}
    </>
  );
};

export default Nav;
