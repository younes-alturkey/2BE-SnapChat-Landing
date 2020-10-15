import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from './aboutus-lottie-call.json';
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
                            <div style={{width: "200px", height: "200px", margin:"auto", textAlign: "center", marginBottom: "2rem"}}>
                            <CircularProgressbar
                                value={100}
                                text={`${100}%`}
                                styles={buildStyles({
                                    rotation: 5,
                                    strokeLinecap: 'butt',
                                    textSize: '16px',
                                    pathTransitionDuration: 5,
                                    pathColor: `#fffc1a`,
                                    textColor: '#fffc1a',
                                    trailColor: '#fffc1a',
                                    backgroundColor: '#fffc1a',
                                })}
                            />
                            </div>
                        <div style={{direction: "rtl", margin: "auto", width: "50%"}}>
                                <h3 style={{textAlign: "right", fontWeight: "600", color: "#FFFFFF", fontSize: "1rem"}}>عملاء جدد</h3>
                                <br/>
                                <ProgressBar label={"95%"} animated now={95} />
                                <br/>
                                <h3 style={{textAlign: "right", fontWeight: "600", color: "#FFFFFF", fontSize: "1rem"}}>مبيعات أكثر</h3>
                                <br/>
                                <ProgressBar label={"90%"} animated now={90} />
                                <br/>
                                <h3 style={{textAlign: "right", fontWeight: "600", color: "#FFFFFF", fontSize: "1rem"}}>وصول أكثر</h3>
                                <br/>
                                <ProgressBar label={"85%"} animated now={85} />
                        </div>
                    </div>
                    </Col>
                    <Col lg={6}>
                        <div style={{textAlign: "center"}}>
                            <Lottie
                                options={defaultOptions}
                            />
                            <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=966545740629" style={{fontSize: "1.2rem", color: "#000000", fontWeight: "600", paddingRight: "5rem", paddingLeft: "5rem", marginTop: "3rem", marginBottom: "3rem"}} className="btn btn-custom margin-t-30 waves-effect waves-light">اتصل بنا</a>
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
