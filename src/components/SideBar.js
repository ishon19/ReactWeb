import React from "react";
import { push as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faQuestion, faPhone } from "@fortawesome/free-solid-svg-icons";

export default props => {
  return (
    <Menu {...props}>
      <a id="home" className="menu-item" href="/">
        <FontAwesomeIcon icon={faHome} /> Home
      </a>
      <a id="about" className="menu-item" href="/about">
        <FontAwesomeIcon icon={faQuestion} /> About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        <FontAwesomeIcon icon={faPhone} /> Contact
      </a>
    </Menu>
  );
};
