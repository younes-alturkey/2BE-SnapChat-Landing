import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from './aboutus-lottie-idea.json';
import { Container, Row, Col } from "reactstrap";

const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
};

class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="features">
            <Container>
                <Row className="vertical-content">
                    <Col lg={5}>
                        <div style={{textAlign: "center"}} className="features-box">
                            <h3>دعنا نناقش اعلانك</h3>
                            <p style={{direction: "rtl"}} className="text-muted web-desc">تواصل معنا لأي استفسار او مشاركة فكرة ودعنا نساهم سويةً في إنجاح اعلانك بكل احترافية</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=966549454174" style={{fontSize: "1rem", color: "#000000", fontWeight: "600", paddingRight: "2rem", paddingLeft: "2rem"}} className="btn btn-custom margin-t-30 waves-effect waves-light">اتصل بنا</a>
                        </div>
                    </Col>
                    <Col lg={7}>
                      <div style={{paddingTop: "2rem"}}>
                          <Lottie
                            options={defaultOptions}
                          />
                      </div>
                    </Col>
                </Row>
            </Container>
        </section>
            </React.Fragment>
        );
    }
}

export default AboutUs;
