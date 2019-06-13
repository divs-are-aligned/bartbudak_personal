import React from "react";
import { Grid } from "@material-ui/core";
import { Hero, Content, Nav } from "../Components/index";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  heroRoot: {
    position: "relative",
    padding: "1rem",
    color: "whitesmoke",
    backgroundColor: "#3a4660",
    height: "100vh",
    maxHeight: "100vh",
    overflow: "hidden"
  },
  contentRoot: {
    position: "relative",
    color: "#3a4660",
    backgroundColor: "whitesmoke",
    height: "100vh",
    maxHeight: "100vh",
    [theme.breakpoints.up("sm")]: {
      overflow: "hidden scroll",
      WebkitOverflowScrolling: "touch"
    },
    [theme.breakpoints.down("xs")]: {
      height: "initial",
      maxHeight: "initial"
    },

    border: ".5rem solid #c9af98"
  }
}));

const Layout = () => {
  const classes = useStyles();
  return (
    <>
      <Nav />
      <Grid alignContent="center" container>
        <Grid className={classes.heroRoot} xs={12} sm={6} item>
          <Hero />
        </Grid>
        <Grid
          className={classes.contentRoot}
          id="container"
          xs={12}
          sm={6}
          item
        >
          <Content />
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
