// Challenge: Scaffold out the Navbar component
// Use reactstrap to create the navbar
// Brand should say: ToDo
// 2 links: Lists, Login

import React, { useState } from 'react';

import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    //      var       function
    const [ isOpen, changeIsOpen ] = useState(false);

    const toggleNavbarMenu = () => changeIsOpen(!isOpen);

    return (
        <Navbar light color='light'>
            <NavbarBrand>ToDo</NavbarBrand>
            <NavbarToggler onClick= { toggleNavbarMenu }  />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <p>Lists</p>
                    </NavItem>
                    <NavItem>
                        <Link to="/login">Login</Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default NavbarComponent;