import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    Container,
    Collapse,
    Row,
    Col
} from "reactstrap";

import ScrollspyNav from "./scrollSpy";

//stickey header
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

class NavbarPage extends Component {
    constructor(props){
        super(props);
        this.state = {
                isOpenMenu :false
        };
    }

    toggle = () => {
        this.setState({ isOpenMenu: !this.state.isOpenMenu });
    }

    render() {
            //Store all Navigationbar Id into TargetID variable(Used for Scrollspy)
            let targetId = this.props.navItems.map((item) => {
                return(
                    item.idnm
                )
            });
        return (
            <React.Fragment>
                <StickyHeader
                    header={
                        <Navbar expand="lg" fixed="top" className={"navbar-custom sticky sticky-dark" + this.props.navClass}>
                                <Container>
                                <Row>
                                    <Col lg={12}>
                                        <div className="float-right pull-none ">
                                          <a href="https://www.linkedin.com/company/bassamatexp/" target="_blank" rel="noopener noreferrer">
                                            <img src="assets/images/in-logo.png" alt="linkedin" height="36" />
                                          </a>
                                          <a href="https://www.instagram.com/bassamatexp/" target="_blank" rel="noopener noreferrer">
                                            <img href="https://www.instagram.com/bassamatexp/" src="assets/images/instagram-logo.png" alt="instagram" height="36" />
                                          </a>
                                          <a href="https://www.facebook.com/Bassamatexp1/" target="_blank" rel="noopener noreferrer">
                                            <img href="https://twitter.com/bassamatexp" src="assets/images/facebook-logo.png" alt="facebook" height="36" />
                                          </a>
                                          <a href="https://twitter.com/bassamatexp" target="_blank" rel="noopener noreferrer">
                                            <img href="https://www.facebook.com/Bassamatexp1/" src="assets/images/twitter-logo.png" alt="twitter" height="36" />
                                          </a>
                                        </div>
                                        <div className="clearfix"></div>
                                    </Col>
                                </Row>
                                        <NavbarToggler onClick={this.toggle} ><i className="mdi mdi-menu"></i></NavbarToggler>

                                    <Collapse id="navbarCollapse" style={{textAlign: "right"}} className="justify-content-center" isOpen={this.state.isOpenMenu} navbar>
                                    <ScrollspyNav
                                        scrollTargetIds={targetId}
                                        scrollDuration="800"
                                        headerBackground="true"
                                        activeNavClass="active"
                                        className="navbar-collapse"
                                    >
                                        <Nav navbar style={{direction: "rtl"}} className="navbar-center ml-auto" id="mySidenav">
                                            {this.props.navItems.map((item, key) => (
                                                <NavItem key={key} className={item.navheading === "Home" ? "active" : "" }>
                                                    <NavLink href={"#" + item.idnm} > {item.navheading}</NavLink>
                                                </NavItem>
                                            ))}
                                        </Nav>
                                    </ScrollspyNav>
                                    </Collapse>
                                    <NavbarBrand className="logo text-uppercase" href="https://bassamatexp.com/" target="_blank" rel="noopener noreferrer">
                                        2BE
                                    </NavbarBrand>
                                </Container>
                            </Navbar>
                    }
                    stickyOffset={-100}
                >

                </StickyHeader>

            </React.Fragment>
        );
    }
}

export default NavbarPage;
