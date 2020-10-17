import React, { Component } from 'react';
import { Container, Row, Col} from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

class Features extends Component {

    render() {
        return (
            <React.Fragment>
        <section style={{paddingTop: "5rem"}} className="section " id="contact">
            <Container>
                {/* section title */}
                <SectionTitle title="تواصل معنا الآن" desc="" />

                <Row>
                    <Col lg={12}>
                    <div style={{textAlign: "right", direction: "rtl"}}>
                    <div style={{direction: "rtl", textAlign: "right"}}>
                                                <form method="POST" action="https://offer.bassamatexp.com/getcontacts/store" accept-charset="UTF-8" class="footer-form mb-0"><input name="_token" type="hidden" value="KpfQX2coi2rzwaucmAwMl6Q6spfmr358ooDjjYr9"/>
                        
                            <div className="form-group">
                                <label className="footer-form__label" for="name">الإسم الكامل<span className="required">*</span></label>
                                <input type="text" className="form-control footer-form__input" id="name" name="name" aria-describedby="name" required/>
                            </div>
                            <div className="form-group">
                                <label className="footer-form__label" for="company">اسم الشركة / المنشآة <span>(اختياري)</span></label>
                                <input type="text" className="form-control footer-form__input" id="company" name="company" aria-describedby="name" />
                            </div>
                            <div class="form-group">
                                <label className="footer-form__label" for="email">البريد الإلكتروني <span className="required">*</span></label>
                                <input type="email" className="form-control footer-form__input" id="email" name="email" aria-describedby="email" required/>
                            </div>
                            <div className="form-group">
                                <label className="footer-form__label" for="number">رقم الجوال <span className="required">*</span></label>
                                <input type="number" className="form-control footer-form__input" id="number" name="number" aria-describedby="number" required/>
                            </div>
                            <div className="form-group">
                                    <label className="footer-form__label" for="package">اختر الباقة  <span class="required">*</span></label>
                                    <select  className="form-control footer-form__input" id="package" name="package" required>
                                            <option value="الأفضل - 6000 SAR">الأفضل - 6000 SAR</option>
                                            <option selected value="الأساسية - 3800 SAR">الأساسية - 3800 SAR</option>
                                            <option value="الاقتصادية - 1350 SAR">الاقتصادية - 1350 SAR</option>
                                    </select>
                                    
                                </div>
                            <div className="form-group justify-content-center d-flex mt-4">
                                <button className="btn btn--blue btn--lg w-100">إرسال</button>
                            </div>
                         </form>
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

export default Features;