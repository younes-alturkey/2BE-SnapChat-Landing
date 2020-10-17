import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    Container,
    Collapse
} from "reactstrap";

import ScrollspyNav from "./scrollSpy";

//stickey header
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

import logo2BE from "./logo.png";

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

                                    <div>
                                        <a href="https://www.instagram.com/bassamatexp/" target="_blank" rel="noopener noreferrer">
                                        <img href="https://www.instagram.com/bassamatexp/" src="assets/images/instagram-logo.png" alt="instagram" height="16" />
                                        </a>
                                        <a href="https://www.facebook.com/Bassamatexp1/" target="_blank" rel="noopener noreferrer">
                                        <img href="https://twitter.com/bassamatexp" src="assets/images/facebook-logo.png" alt="facebook" height="16" />
                                        </a>
                                        <a href="https://twitter.com/bassamatexp" target="_blank" rel="noopener noreferrer">
                                        <img href="https://www.facebook.com/Bassamatexp1/" src="assets/images/twitter-logo.png" alt="twitter" height="16" />
                                        </a>
                                     </div>                                        
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
                                            <img style={{width: "116px", height: "32px"}} src={logo2BE} alt="2BE Logo" />
                                        </NavbarBrand>
                                        <NavbarToggler onClick={this.toggle} ><i className="mdi mdi-menu"></i></NavbarToggler>

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
