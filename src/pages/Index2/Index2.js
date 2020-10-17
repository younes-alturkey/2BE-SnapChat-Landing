import React, { Component } from 'react';

import NavbarPage from "../../components/Navbar/Navbar_Page";
import Section from './section';
import Service from "../../components/Service/service";
import AboutUs from "../../components/AboutUs/AboutUs";
import Pricing from "../../components/Pricing/pricing";
import Footer from "../../components/Footer/footer";
import Contact from "../../components/Contact/Contact";
import WhatsappBadge from 'react-whatsapp-badge';


class Index2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems : [
                { id: 1 , idnm : "home", navheading: "الرئيسية" },
                { id: 2 , idnm : "services", navheading: "مميزات الإعلان" },
                { id: 3 , idnm : "features", navheading: "دعنا نناقش إعلانك" },
                { id: 4 , idnm : "pricing", navheading: "الباقات" },
                { id: 4 , idnm : "contact", navheading: "تواصل معنا" }

            ],
            navClass : ""
        };
    }

    render() {
        return (
            <React.Fragment>
                
                {/* Importing Navbar */}
                <NavbarPage navItems={this.state.navItems} navClass={this.state.navClass} />

                {/* section */}
                <Section/>

                {/* services */}
                <Service  sectionClass="pt-5"/>

                {/* about us */}
                <AboutUs/>

                {/* pricing */}
                <Pricing/>

                {/* contact */}
                <Contact />

                {/* footer */}
                <Footer/>

                <WhatsappBadge text='' phone="966545740629" image='whatsapp.png'/>
                

            </React.Fragment>
        );
    }
}

export default Index2;
