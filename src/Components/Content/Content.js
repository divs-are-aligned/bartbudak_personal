import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  section: {
    height: "100vh",
    position: "relative"
  },
  sectionHeading: {
    position: "absolute",
    top: "3rem",
    left: "1rem"
  }
});

export function Content() {
  const classes = useStyles();

  return (
    <>
      <span
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translate(-50%)",
          zIndex: 4,
          maxHeight: "400vh",
          overflowY: "hidden",
          mixBlendMode: "difference"
        }}
      >
        {[...Array(50)].map((e, i) => (
          <Typography
            key={i}
            aria-hidden="true"
            style={{
              color: "#f5f5f5",
              marginBottom: "2rem"
            }}
            variant="body1"
            gutterBottom
          >
            coming soon
          </Typography>
        ))}
      </span>
      <Grid container>
        <Grid
          id="about"
          style={{ backgroundColor: "white" }}
          className={classes.section}
          item
          xs={12}
        >
          <Typography
            className={classes.sectionHeading}
            color="secondary"
            variant="h5"
          >
            About
          </Typography>
        </Grid>
        <Grid
          id="current"
          style={{ backgroundColor: "#3a4660" }}
          className={classes.section}
          item
          xs={12}
        >
          <Typography
            className={classes.sectionHeading}
            color="primary"
            variant="h5"
          >
            Current Work
          </Typography>
        </Grid>
        <Grid
          id="future"
          style={{ backgroundColor: "ed8a63" }}
          className={classes.section}
          item
          xs={12}
        >
          <Typography
            className={classes.sectionHeading}
            color="secondary"
            variant="h5"
          >
            Future Projects
          </Typography>
        </Grid>
        <Grid
          id="contact"
          style={{ backgroundColor: "#c9af98" }}
          className={classes.section}
          item
          xs={12}
        >
          <Typography
            className={classes.sectionHeading}
            color="primary"
            variant="h5"
          >
            Contact
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Content;
