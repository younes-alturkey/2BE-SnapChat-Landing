import React, { Component } from 'react';
import { Row, Col } from "reactstrap";

class SectionTitle extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col lg={{size:8, offset:2}}>
                        <h1 style={{letterSpacing: "0px", fontWeight: "600", fontSize: "2rem"}} className="section-title text-center">{this.props.title}</h1>
                        <div className="section-title-border margin-t-20"></div>
                        <p style={{direction: "rtl", textAlign: "justify", textJustify: "inter-word", fontSize: "1rem"}} className="section-subtitle text-muted padding-t-30 font-secondary">{this.props.desc}</p>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default SectionTitle;
