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
  useEffect(() => {
    dispatch({ type: "MENU_OPENED", openedMenu: false });
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, [location]);
  const handleMenuToggle = () => {
    dispatch({ type: "MENU_OPENED", openedMenu: true });
  };
  const handleCloseToggle = () => {
    dispatch({ type: "MENU_OPENED", openedMenu: false });
  };
  return (
    <header>
      <nav className={`navbar-sticky navbar ${sticky && "bgWhite"}`}>
        <div className="navbar--logo-holder">
          <div className="nav-row">
            <Link className="logo-link" to="/">
              <img src={logo} alt="logo" className="navbar--logo" />
            </Link>
            {sticky && (
              <>
                <a
                  className="btn navbar-button"
                  size="small"
                  href="https://chrome.google.com/webstore/detail/ecocart-carbon-neutral-sh/oiafedhhdhinjnianpfeaenmchnknchi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Add to Chrome</strong> — It's Free!
                </a>
                <span
                  className="hamburger"
                  onClick={handleMenuToggle}
                  onKeyDown={handleMenuToggle}
                >
                  <FaBars />
                </span>
              </>
            )}
          </div>
        </div>
      </nav>
      <div className={`sideMenu ${!openedMenu && "hideMenu"}`}>
        <div className="menu-contianer">
          <span
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
                href="https://app.ecocart.io/blog/"
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
                href="https://admin.ecocart.io/registration/"
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
