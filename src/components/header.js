import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav className={`navbar-sticky navbar ${sticky && "bgWhite"}`}>
        <div className="navbar--logo-holder">
          <div className="nav-row">
            <Link className="logo-link" to="/">
              <img src={logo} alt="logo" className="navbar--logo" />
            </Link>
            {sticky && (
              <a
                className="btn navbar-button"
                size="small"
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Add to Chrome</strong> — It's Free!
              </a>
            )}
          </div>
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
