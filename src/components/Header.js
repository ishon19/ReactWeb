import React from "react";

const Header = props => {
  return (
    <div className="HeaderDiv">
      <h1>{props.textToDisplay}</h1>
    </div>
  );
};

export default Header;
