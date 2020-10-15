import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Pricing
import PricingBox from './pricing-box';

class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pricings : [
               { title : "الاقتصادية", price : 1350, duration : "",
                    features : [
                        { title : "عدد المشاهدات", value : "100,000" },
                        { title : "بوست", value : "1" }
                    ]
                },
                { title : "الأساسية", price : 3800, duration : "", isActive :true,
                    features : [
                      { title : "عدد المشاهدات", value : "300,000" },
                      { title : "بوست", value : "1" }
                    ]
                },
                { title : "الأفضل", price : 6000, duration : "",
                    features : [
                      { title : "عدد المشاهدات", value : "500,000" },
                      { title : "موشن", value : "10 ثواني" }
                    ]
                },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section pt-5" id="pricing">
                    <Container>
                        {/* section title */}
                    <SectionTitle title="باقات النجاح" desc="" />

                        <Row className="margin-t-50">
                            {/* pricing box */}
                            <PricingBox pricings={this.state.pricings} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Pricing;
