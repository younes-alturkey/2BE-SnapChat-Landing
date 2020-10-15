import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

class Bar extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={{paddingBottom: "3rem", background: "#FFFC00"}}>
                    <Container>
                        <Row>
                            <Col lg={12}>
                            <div>
                                    <a href="https://www.linkedin.com/company/bassamatexp/" target="_blank" rel="noopener noreferrer">
                                    <img src="assets/images/in-logo.png" alt="linkedin" height="16" />
                                    </a>
                                    <a href="https://www.instagram.com/bassamatexp/" target="_blank" rel="noopener noreferrer">
                                    <img href="https://www.instagram.com/bassamatexp/" src="assets/images/instagram-logo.png" alt="instagram" height="16" />
                                    </a>
                                    <a href="https://www.facebook.com/Bassamatexp1/" target="_blank" rel="noopener noreferrer">
                                    <img href="https://twitter.com/bassamatexp" src="assets/images/facebook-logo.png" alt="facebook" height="16" />
                                    </a>
                                    <a href="https://twitter.com/bassamatexp" target="_blank" rel="noopener noreferrer">
                                    <img href="https://www.facebook.com/Bassamatexp1/" src="assets/images/twitter-logo.png" alt="twitter" height="16" />
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Bar;
