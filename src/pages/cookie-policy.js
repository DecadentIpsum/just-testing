import React from "react";

import Layout from '../components/layout'
import SEO from "../components/seo";

export default () => (
    <Layout>
        <SEO title="Privacy Policy" />
        <div className="policy-container">
            <header className="policy-header">
               
                <h1>Cookie Policy</h1>
            </header>
            <div className="policy-content">
            
           <h3>Strictly Necessary Cookies</h3>

           <p>These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.</p>

            </div>
        </div>
    </Layout>
)