import React, { Component } from 'react';
import { Col } from "reactstrap";
import Lottie from 'react-lottie';
import animationData from './lottie-snapchat.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

class PricingBox extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()  
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.props.pricings.map((pricing, key) =>
                        <Col lg={4} key={key} >
                            <div className={"text-center pricing-box hover-effect"}>
                                <h4 className="text-uppercase">{pricing.title}</h4>
                                <h1>{pricing.price} SAR</h1>
                                <h6 className="text-uppercase text-muted">{pricing.duration}</h6>

                                <div className="plan-features margin-t-30">
                                    {
                                        pricing.features.map((feature, key) =>
                                            <p key={key}>{feature.title} ↭ <b className="text-custom" style={{fontWeight: "600"}}>{feature.value}</b></p>
                                        )
                                    }
                                </div>
                                <div style={{margin: "0", padding: "0"}}>
                                <Lottie
                                    options={defaultOptions}
                                />
                                </div>
                                <br/>
                                <a href="#contact" style={{color: "#000000", fontWeight: "600"}} className="btn btn-custom margin-t-30 waves-effect waves-light">اطلب الآن</a>
                            </div>
                        </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default PricingBox;
