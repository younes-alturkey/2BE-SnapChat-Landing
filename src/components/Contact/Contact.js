import React, { Component } from 'react';
import { Container, Row, Col} from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

class Features extends Component {
    state = {
        email: {
          recipient: 'social@bassamatexp.com',
          sender: 'alturkeyy@gmail.com',
          subject: 'طلب إعلان سناب شات',
          fullname: 'لم يتم الإدخال',
          company: 'لم يتم الإدخال',
          emailaddress: 'لم يتم الإدخال',
          phone: 'لم يتم الإدخال',
          package: 'لم يتم الإختيار',
          text: 'رسالة فارغة'
        }
      }

      sendEmail = _ => {
        const { email } = this.state;
        email.text = `Full name: ${email.fullname}  Company Name: ${email.company}   Email: ${email.emailaddress}    Phone: ${email.phone}   Package: ${email.package}`;
        fetch(`https://snap.bassamatexp.com:4000/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`) //query string url
          .catch(err => console.error(err))
      }
    

    render() {
        const { email } = this.state;
        return (
            <React.Fragment>
        <section style={{paddingTop: "5rem"}} className="contactsection" id="contact">
            <Container>
                {/* section title */}
                <SectionTitle title="تواصل معنا الآن" desc="" />

                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8}>
                    <div style={{textAlign: "right", direction: "rtl"}}>
                    <div style={{direction: "rtl", textAlign: "right"}}>
                            <form>
                        
                            <div className="form-group">
                                <label className="footer-form__label" htmlFor="name">الإسم الكامل<span className="required">*</span></label>
                                <input type="text" className="form-control footer-form__input" id="name" name="name" aria-describedby="name" required
                                placeholder={'أحمد علي'}
                                onChange={e => this.setState({ email: { ...email, fullname: e.target.value } })} />
                            </div>
                            <div className="form-group">
                                <label className="footer-form__label" htmlFor="company">اسم الشركة / المنشآة <span>(اختياري)</span></label>
                                <input type="text" className="form-control footer-form__input" id="company" name="company" aria-describedby="name"
                                placeholder={'المراعي'}
                                onChange={e => this.setState({ email: { ...email, company: e.target.value } })} />
                            </div>
                            <div className="form-group">
                                <label className="footer-form__label" htmlFor="email">البريد الإلكتروني <span className="required">*</span></label>
                                <input type="email" className="form-control footer-form__input" id="email" name="email" aria-describedby="email" required
                                placeholder={'ahmadali@gmail.com'}
                                onChange={e => this.setState({ email: { ...email, emailaddress: e.target.value } })} />
                            </div>
                            <div className="form-group">
                                <label className="footer-form__label" htmlFor="number">رقم الجوال <span className="required">*</span></label>
                                <input type="number" className="form-control footer-form__input" id="number" name="number" aria-describedby="number" required
                                placeholder={'0538658754'}
                                onChange={e => this.setState({ email: { ...email, phone: e.target.value } })} />
                            </div>
                            <div className="form-group">
                                    <label className="footer-form__label" htmlFor="package">اختر الباقة  <span className="required">*</span></label>
                                    <select  className="form-control footer-form__input" id="package" name="package" required
                                    onChange={e => this.setState({ email: { ...email, package: e.target.value } })} >
                                            <option value="اختر باقة">اختر باقة</option>
                                            <option value="الأفضل - 6000 SAR">الأفضل - 6000 SAR</option>
                                            <option value="الأساسية - 3800 SAR">الأساسية - 3800 SAR</option>
                                            <option value="الاقتصادية - 1350 SAR">الاقتصادية - 1350 SAR</option>
                                    </select>
                                    
                                </div>
                            <div className="form-group justify-content-center d-flex mt-4">
                                <button className="btn btn--blue btn--lg w-100" onClick={this.sendEmail}>إرسال</button>
                            </div>
                         </form>
                    </div>
                </div>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            </Container>
        </section>
            </React.Fragment>
        );
    }
}

export default Features;