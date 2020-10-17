import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from './aboutus-lottie-promo.json';
import { Container, Row, Col } from "reactstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


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
                <section className="section bg-black" id="features">
            <Container>
                <Row className="vertical-content">
                <Col lg={6}>
                        <div>
                            <div style={{width: "200px", height: "200px", margin:"auto", textAlign: "center", marginBottom: "4rem", marginTop: "4rem"}}>
                            <CircularProgressbar
                                value={99}
                                text={`${100}%`}
                                styles={buildStyles({
                                    minValue: 0,
                                    rotation: 0.5,
                                    textSize: '16px',
                                    pathTransitionDuration: 0.5,
                                    pathColor: `#fffc1a`,
                                    strokeLinecap: 'round',
                                    textColor: '#000',
                                    trailColor: '#fff',
                                    backgroundColor: '#000',
                                })}
                            />
                            </div>
                        <div style={{direction: "rtl", margin: "auto", width: "50%"}}>
                                <h3 style={{textAlign: "right", fontWeight: "600", color: "#FFFFFF", fontSize: "1rem"}}>عملاء جدد</h3>
                                <br/>
                                <ProgressBar label={"100%"} animated now={100} />
                                <br/>
                                <h3 style={{textAlign: "right", fontWeight: "600", color: "#FFFFFF", fontSize: "1rem"}}>مبيعات أكثر</h3>
                                <br/>
                                <ProgressBar label={"100%"} animated now={100} />
                                <br/>
                                <h3 style={{textAlign: "right", fontWeight: "600", color: "#FFFFFF", fontSize: "1rem"}}>وصول أكثر</h3>
                                <br/>
                                <ProgressBar label={"100%"} animated now={100} />
                        </div>
                    </div>
                    </Col>
                    <Col lg={6}>
                        <div style={{textAlign: "center", marginTop: "2rem"}}>
                            <Lottie
                                options={defaultOptions}
                            />
                            <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=966545740629" style={{fontSize: "1.2rem", color: "#000000", fontWeight: "600", paddingRight: "5rem", paddingLeft: "5rem", marginBottom: "3rem"}} className="btn btn-custom margin-t-30 waves-effect waves-light">اتصل بنا</a>
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
