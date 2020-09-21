import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="notFound-page">
      <h1>404</h1>
      <h6>PAGE NOT FOUND.</h6>
      <p>
        You just hit a route that doesn&#39;t exist.
        <Link to="/"> Go back to home</Link>
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
