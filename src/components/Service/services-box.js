import React, { Component } from 'react';
import { Col } from "reactstrap";

class ServiceBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.services.map((service, key) =>
                    <Col lg={4} key={key} className="margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i style={{fontSize: "3.7rem", fontWeight: "600"}} className={ service.icon+ " text-custom"}></i>
                            <h4 style={{fontSize: "1.2rem", fontWeight: "500"}} className="padding-t-15">{service.title}</h4>
                            <p style={{fontSize: "0.9rem"}} className="padding-t-15 text-muted">{service.desc}</p>
                        </div>
                    </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default ServiceBox;
