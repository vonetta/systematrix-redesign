import React from "react";
import { Link } from "react-router-dom";
import linkedIn from "../images/linkedin-icon.png";
const Footer = () => {
  return (
    <footer>
      <p>
        &copy; 2019. Systematrix Solutions Inc. All Rights Reserved. Designed
        By: <Link to="https://vonettastevenson.com">Vonetta Stevenson</Link>
      </p>
      <img src={linkedIn} alt="linkedIn" />
    </footer>
  );
};

export default Footer;
