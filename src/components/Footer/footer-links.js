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
                                <div className="pull-none ">
                                    <p style={{fontWeight: "600", textAlign: "center"}} className="copy-rights text-muted">{new Date().getFullYear()} © 2BE | جميع الحقوق محفوظة</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default FooterLinks;
