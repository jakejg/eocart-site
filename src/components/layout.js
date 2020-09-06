/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ContactWidget from "./General/contactWidget";
import Header from "./header";
import Footer from "./footer";
import "../styles/main.scss";

const Layout = ({ children }) => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  return (
    <>
      <Header />
      <main>{children}</main>
      <ContactWidget />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
