import React from "react";
import ImageCard from "./ImageCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const styles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)"
  },
  title: {},
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
}));

function GridCard() {
  const classes = styles();
  return (
    <Grid direction={"row"}>
      <ImageCard title="Test" h1Text="OK" />
    </Grid>
  );
}

export default GridCard;
