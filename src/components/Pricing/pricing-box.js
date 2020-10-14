import React, { Component } from 'react';
import { Col } from "reactstrap";

class PricingBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.pricings.map((pricing, key) =>
                        <Col lg={4} key={key} >
                            <div className={pricing.isActive ? "text-center pricing-box bg-white hover-effect price-active" : "text-center pricing-box hover-effect"}>
                                <h4 className="text-uppercase">{pricing.title}</h4>
                                <h1 style={{direction: "rtl", fontFamily: "Calibri"}}>{pricing.price} &#65020;</h1>
                                <h6 className="text-uppercase text-muted">{pricing.duration}</h6>
                                <div className="pricing-border"></div>
                                <div className="plan-features margin-t-30">
                                    {
                                        pricing.features.map((feature, key) =>
                                            <p key={key}>{feature.title}: <b className="text-custom" style={{fontWeight: "600"}}>{feature.value}</b></p>
                                        )
                                    }
                                </div>
                                <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=966549454174" style={{color: "#000000", fontWeight: "600"}} className="btn btn-custom margin-t-30 waves-effect waves-light">اشتري الآن</a>
                            </div>
                        </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default PricingBox;
