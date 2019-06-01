import React from "react";
import { SwipeableDrawer } from "@material-ui/core";

const Header = props => {
  return (
    // <div className="HeaderDiv">
    //   <h1>{props.textToDisplay}</h1>
    // </div>
    <SwipeableDrawer anchor={"left"} />
  );
};

export default Header;
