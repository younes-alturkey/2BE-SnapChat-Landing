import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

class FooterLinks extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="footer-alt">
                    <Container>
                        <Row>
                            <Col lg={11}>
                                <div className="float-left pull-none">
                                    <p style={{fontWeight: "600"}} className="copy-rights text-muted">{new Date().getFullYear()} © 2BE | جميع الحقوق محفوظة</p>
                                </div>
                                <Row>
                                    <Col md={12}>
                                        <div className="float-right pull-none">
                                          <a href="https://www.linkedin.com/company/bassamatexp/" target="_blank" rel="noopener noreferrer">
                                            <img src="assets/images/in-logo.png" alt="linkedin" height="36" />
                                          </a>
                                          <a href="https://www.instagram.com/bassamatexp/" target="_blank" rel="noopener noreferrer">
                                            <img href="https://www.instagram.com/bassamatexp/" src="assets/images/instagram-logo.png" alt="instagram" height="36" />
                                          </a>
                                          <a href="https://www.facebook.com/Bassamatexp1/" target="_blank" rel="noopener noreferrer">
                                            <img href="https://twitter.com/bassamatexp" src="assets/images/facebook-logo.png" alt="facebook" height="36" />
                                          </a>
                                          <a href="https://twitter.com/bassamatexp" target="_blank" rel="noopener noreferrer">
                                            <img href="https://www.facebook.com/Bassamatexp1/" src="assets/images/twitter-logo.png" alt="twitter" height="36" />
                                          </a>
                                        </div>
                                        <div className="clearfix"></div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default FooterLinks;
