import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from './aboutus-lottie-money.json';
import animationHundred from './aboutus-lottie-up.json';
import { Container, Row, Col } from "reactstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';

const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
};

const hundredOptions = {
    autoplay: true,
    animationData: animationHundred,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section bg-black" id="features">
            <Container>
                <Row className="vertical-content">
                    <Col lg={6}>
                        <div>
                        <div style={{textAlign: "center"}} className="features-box">
                                <h3 style={{fontWeight: "600", color: "#FFFC00", fontSize: "2.5rem", lineHeight: "4rem", paddingTop: "3rem"}}>دعنا نناقش اعلانك</h3>
                        </div>
                        <div style={{textAlign: "center"}}>
                            <Lottie
                                options={defaultOptions}
                            />
                            <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=966545740629" style={{fontSize: "1.2rem", color: "#000000", fontWeight: "600", paddingRight: "5rem", paddingLeft: "5rem", marginTop: "3rem", marginBottom: "3rem"}} className="btn btn-custom margin-t-30 waves-effect waves-light">اتصل بنا</a>
                        </div>
                    </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                        <div style={{textAlign: "center", width: "50%", margin: "auto", paddingBottom: "5rem"}} className="features-box">
                            <Lottie
                                options={hundredOptions}
                            />
                        </div>
                        <div style={{direction: "rtl"}}>
                                <h3 style={{textAlign: "right", fontWeight: "600", color: "#FFFC00", fontSize: "2rem"}}>عملاء جدد</h3>
                                <br/>
                                <ProgressBar variant="success" label={"95%"} animated now={95} />
                                <br/>
                                <h3 style={{textAlign: "right", fontWeight: "600", color: "#FFFC00", fontSize: "2rem"}}>مبيعات أكثر</h3>
                                <br/>
                                <ProgressBar variant="success" label={"90%"} animated now={90} />
                                <br/>
                                <h3 style={{textAlign: "right", fontWeight: "600", color: "#FFFC00", fontSize: "2rem"}}>وصول أكثر</h3>
                                <br/>
                                <ProgressBar variant="success" label={"85%"} animated now={85} />
                        </div>
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
