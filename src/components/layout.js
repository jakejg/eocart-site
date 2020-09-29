/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react";
import { useGlobalStateContext } from "../context/globalContext";
import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";
import "../styles/main.scss";
import CookieConsent from "react-cookie-consent";
import { createGlobalStyle, css } from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  const GlobalStyle = createGlobalStyle`
    body{
      overflow-x: hidden;
      ${(props) =>
        props.openedMenu &&
        css`
          overflow: hidden;
        `}
    }
  `;
  const { openedMenu } = useGlobalStateContext();
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  return (
    <>
      <GlobalStyle openedMenu={openedMenu} />
      <Header />
      <main>{children}</main>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Agree"
        cookieName="ecoCartCookies"
        expires={150}
      >
        EcoCart uses cookies to bring the best experience. In order to use this
        website, you must agree our{" "}
        <Link to="/terms-of-services-us">Terms of Use</Link>.
      </CookieConsent>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
