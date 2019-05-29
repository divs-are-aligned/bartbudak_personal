import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import "./main.scss";

export default function Layout() {
  return (
    <Grid className="root" alignContent="center" container>
      <div className="info">
        <Typography className="text" variant="h6">
          Front-end Engineering
          <br />
          Design
          <br />
          User-experience
        </Typography>
        <Button
          href="https://drive.google.com/file/d/0B71klMpcGRmYZ2lVdVRZR3dPRFJ0U1lpdk4zOGRnUWZTN040/view?usp=sharing"
          component="button"
          target="_blank"
          color="secondary"
        >
          View Resume
        </Button>
      </div>
      <Typography className="title" variant="h1">
        Bart Budak
      </Typography>
      <Typography className="coming-soon title" variant="h6">
        coming soon...
      </Typography>
    </Grid>
  );
}
