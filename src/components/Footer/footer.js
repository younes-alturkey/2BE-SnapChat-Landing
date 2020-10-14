import React, { Component } from 'react';

//Import Footer link
import FooterLinks from "./footer-links";

class Footer extends Component {
    state = {
        links : [
            { title : "DORSIN",
                child : [
                    { link : "#", title : "Home" },
                    { link : "#", title : "About us" },
                    { link : "#", title : "Careers" },
                    { link : "#", title : "Contact us" },
                ]
            },
            { title : "Information",
                child : [
                    { link : "#", title : "Terms & Condition" },
                    { link : "#", title : "About us" },
                    { link : "#", title : "Jobs" },
                    { link : "#", title : "Bookmarks" },
                ]
            },
            { title : "Support",
                child : [
                    { link : "#", title : "FAQ" },
                    { link : "#", title : "Contact" },
                    { link : "#", title : "Disscusion" },
                ]
            }
        ],
    }
    render() {
        return (
            <React.Fragment>
                {/* Render footer links */}
                <FooterLinks/>
            </React.Fragment>
        );
    }
}

export default Footer;
