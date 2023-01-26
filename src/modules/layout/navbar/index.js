import react, {Component} from 'react';
import './navbar.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import BaseLayerSwitchComponent from "../../3d/BaseLayerSwitcher/BaseLayerSwitcher";
import QuickSearch from '../../3d/QuickSearch/QuickSearch';
import LoginPopup from './LoginPopup/LoginPopup';

export default function NavbarMenu() {

    const LoginNavDropdownTitle = (<i className="fa fa-user"></i>);
    const MapNavDropdownTitle = (<i className="fa fa-th"></i>);
    const NotesNavDropdownTitle = (<i className="fa fa-bell"></i>);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="navbarMenu">
                <div className="topSearchArea">
                    <QuickSearch/>
                </div>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="sample-page"><i className="fa fa-envelope"></i></Nav.Link>
                        <Nav.Link><i className="fa fa-asterisk"></i></Nav.Link>
                        <Nav.Link href="#"><i className="fa fa-expand"></i></Nav.Link>
                        <NavDropdown title={NotesNavDropdownTitle} id="collasible-nav-dropdown">
                            Notlar veya Duyuyrular gelecek </NavDropdown>
                        <NavDropdown title={LoginNavDropdownTitle} id="collasible-nav-dropdown">
                            <LoginPopup></LoginPopup>
                        </NavDropdown>
                        <NavDropdown title={MapNavDropdownTitle} id="collasible-nav-dropdown">
                            <BaseLayerSwitchComponent/>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

