import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import { useLocation } from "@reach/router";
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { openedMenu } = useGlobalStateContext();
  const location = useLocation();
  const dispatch = useGlobalDispatchContext();
  const [sticky, setSticky] = useState(false);
  const [showResults, setShowResults] = useState(false);
  useEffect(() => {
    dispatch({ type: "MENU_OPENED", openedMenu: false });
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setSticky(true);
        setShowResults(true);
      } else {
        setSticky(false);
        setShowResults(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, [location, dispatch]);
  const handleMenuToggle = () => {
    dispatch({ type: "MENU_OPENED", openedMenu: true });
  };
  const handleCloseToggle = () => {
    dispatch({ type: "MENU_OPENED", openedMenu: false });
  };
  return (
    <header>
      <nav className={`navbar ${sticky && "bgWhite navbar-sticky"}`}>
        <div className="navbar--logo-holder">
          <div className="nav-row">
            <Link className="logo-link" to="/">
              <img src={logo} alt="logo" className="navbar--logo" />
            </Link>

              {showResults ? (
                <a
                  className="btn navbar-button"
                  size="small"
                  href="https://chrome.google.com/webstore/detail/ecocart-carbon-neutral-sh/oiafedhhdhinjnianpfeaenmchnknchi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Add to Chrome</strong> — It's Free!
                </a>

              ) : (<div></div>)}
              <span
                tabIndex={0}
                role="button"
                className="hamburger"
                onClick={handleMenuToggle}
                onKeyDown={handleMenuToggle}
              >
                <FaBars />
              </span>
          </div>
        </div>
      </nav>
      <div className={`sideMenu ${!openedMenu && "hideMenu"}`}>
        <div className="menu-contianer">
          <img
            alt="plane"
            className="menu-contianer__logo"
            src={require("../images/plane.svg")}
          />
          <span
            tabIndex={0}
            role="button"
            onClick={handleCloseToggle}
            onKeyDown={handleCloseToggle}
            className="cross-icon"
          >
            <FaTimes />
          </span>
          <div className="sidebar-menu">
            <div className="sidebar-menu__ecocart">
              <h2>EcoCart</h2>
              <Link to="/about">About Us</Link>
              <a
                href="https://ecocart.io/blog/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
              <Link to="/terms-of-services-us">Terms of Service(US)</Link>
              <Link to="/terms-of-services-eu">Terms of Service(EU)</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/help">Help</Link>
            </div>
            <div className="sidebar-menu__businesses">
              <h2>For Businesses</h2>
              <a
                href="https://ecocart.io/app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shopify App
              </a>
              <a
                href="mailto:hello@ecocart.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Become an Affiliate
              </a>
            </div>
            <div className="sidebar-menu__businesses">
              <h2>Follow Us</h2>
              <a
                href="https://www.facebook.com/ecocart.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/ecocart.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/ecocart-io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
              <a
                href="https://twitter.com/EcoCart_io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://www.crunchbase.com/organization/ecocart"
                target="_blank"
                rel="noopener noreferrer"
              >
                Crunchbase
              </a>
            </div>
          </div>
        </div>
      </div>
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
