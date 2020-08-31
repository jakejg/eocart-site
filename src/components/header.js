import PropTypes from "prop-types";
import React, { useState } from "react";
import logo from "../images/logo.svg";

const Header = () => {
  const [sticky, setSticky] = useState(true);
  return (
    <header>
      <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
        <div className="navbar--logo-holder">
          {sticky ? (
            <div className="nav-row">
              <img src={logo} alt="logo" className="navbar--logo" />
              <a
                className="btn navbar-button"
                size="small"
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Add to Chrome</strong> — It's Free!
              </a>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
