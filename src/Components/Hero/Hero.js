import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
// import "./main.scss";

const useStyles = makeStyles({
  "@keyframes moveright": {
    from: {
      left: "-2rem",
      opacity: 0
    },
    to: {
      opacity: 1,
      left: "2rem"
    }
  },
  title: {
    position: "absolute",
    top: "50%",
    left: "2rem",
    animation: "$moveright 1500ms ease-in-out",
    zIndex: "1",
    overflow: "hidden",
    "&:after": {
      content: '""',
      position: "absolute",
      height: "6rem",
      top: "50%",
      left: "2rem",
      width: "100%",
      backgroundColor: "#c9af98",
      zIndex: "-1",
      animation: "after 1500ms ease-in-out"
    }
  },
  subtitle: {
    position: "absolute",
    top: "40%",
    right: "2rem",
    zIndex: "1",
    overflow: "hidden",
    fontSize: ".75rem !important"
  },
  "@keyframes moveleft": {
    from: {
      right: 0,
      opacity: 0
    },
    to: {
      right: "10%",
      opacity: 1
    }
  },
  "@keyframes after": {
    "0%": {
      left: "4rem",
      opacity: 0
    },
    "45%": {
      opacity: 1
    },
    "100%": {
      left: "2rem"
    }
  }
});
export function Hero() {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.subtitle} variant="h5">
        Front-end Engineering | Design | User-experience
      </Typography>
      <Typography className={classes.title} variant="h1">
        Bart Budak
      </Typography>
    </>
  );
}

export default Hero;
