import React from "react";
import { Link } from "gatsby";
import SEO from "../../components/seo";
import '../../styles/pages/_leadcapturesubmission.scss';
import logo from "../../images/logo.svg";
import shopifyLogo from "../../images/lead-capture/shopify-logo.png";


const LeadCaptureSubmission = () => {

    return (
        <>
          <SEO title="leadCaptureSubmission" />
          <div className="lead-capture">
              <div className="lead-capture-header">
                <div className="logo-link">
                    <Link to="/">
                        <img src={logo} alt="logo" className="lead-capture-logo" />
                    </Link>
                </div>
              </div>
                <div className="happy-customers">
                    <div>
                        <h1 className="happy-customers-header">Happier customers are 10 minutes away</h1>
                        <p className="happy-customers-text">We’ll reach out to help you set up EcoCart. You can also click install to add the EcoCart app to Shopify and start onboarding now.</p>
                    </div>
                    <div className="shopify-logo-container">
                        <img className="shopify-logo" src={shopifyLogo} />
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <a href="https://apps.shopify.com/ecocart?surface_detail=ecocart&surface_inter_position=1&surface_intra_position=2&surface_type=search" className="quick-start-btn btn"
                        target="#">INSTALL</a>
                    </div>
               </div>
           </div>
        </>
    );
};

export default LeadCaptureSubmission;
