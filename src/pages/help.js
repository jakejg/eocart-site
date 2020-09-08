import React from "react";
import Hero from "../components/Help/hero";
import Categories from "../components/Help/categories";
import Faqs from "../components/Help/faqs";
import SEO from "../components/seo";
import Layout from "../components/layout";
import ContactWidget from "../components/General/contactWidget";

const Help = () => {
  return (
    <Layout>
      <SEO title="Help" />
      <div className="Help">
        <Hero />
        <Categories />
        <Faqs />
      </div>
      <ContactWidget />
    </Layout>
  );
};

export default Help;
