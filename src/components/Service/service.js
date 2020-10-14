import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";

class Process extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services1 : [
                { icon : "pe-7s-rocket", title : "نشر علامتك التجارية", desc : "زيادة الوعي للعلامة التجارية وانتشارها" },
                { icon : "pe-7s-medal", title : "المنافسة", desc : "منافسة الشركات والظهور للعملاء" },
                { icon : "pe-7s-graph3", title : "زيادة المبيعات", desc : "تحقيق أعلى مستوى من زيادة المبيعات الناتجة عن البيع" },
            ],
            services2 : [
                { icon : "pe-7s-server", title : "قاعدة بيانات", desc : "إمتلاك قاعدة بيانات عملاء قوية" },
                { icon : "pe-7s-users", title : "التفاعل والتواصل", desc : "التواصل و التفاعل مع العملاء و اكتشاف الرغبات و قياس الاداء" },
                { icon : "pe-7s-target", title : "تحقيق الاهداف", desc : "الوصول لأهدافك وتحقيقها اياً كانت" },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
        <section className={"section " + this.props.sectionClass} id="services">
            <Container>
                {/* section title */}
                <SectionTitle title="منصة السناب شات" desc="اصبح سناب شات واحد من أكثر التطبيقات استخداماً في العالم حيث وصل مستخدميه إلى 180 مليون مستخدم يومياً، ويعتبر الاعلان على السناب واحدة من أنجح أنواع الاعلانات، لذلك سوف نقدم لك دراسة متكاملة تعمل على تحقيق أهدافك بإتباع أفضل و أقوى الاستراتيجيات الإعلانية الخاصة بنا. نسعد بخدمتكم." />

                <Row style={{direction: "rtl"}} className="margin-t-30">
                    {/* services box */}
                    <ServiceBox services={this.state.services1} />
                </Row>

                <Row style={{direction: "rtl"}} className="margin-t-30">
                    {/* service box */}
                    <ServiceBox services={this.state.services2} />
                </Row>
            </Container>
        </section>
            </React.Fragment>
        );
    }
}

export default Process;
