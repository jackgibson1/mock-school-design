import React, { useState } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';

const styles = { 
  img: {
    height: 'auto',
    width: 'auto',
    maxHeight: '72px',
    maxWidth: '250px',
}
}

function Header()  {
    const [ collapse, setCollapse ] = useState(false);
    const [isWideEnough, setIsWideEnough ] = useState(false);

    function onClick() { 
        setCollapse(!collapse);
    }

    return (
        <header>
            <MDBNavbar color="elegant" fixed="top" dark expand="md" scrolling>
              <MDBNavbarBrand className="black-text" href="/">
                <img style={styles.img} src="images/mockLogo.png" />
              </MDBNavbarBrand>
              {!isWideEnough && <MDBNavbarToggler className="black" onClick={onClick} />}
              <MDBCollapse isOpen={collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem>
                    <MDBNavLink className="white-text" to="/" onClick={onClick}>Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="white-text" to="/about" onClick={onClick}>About Us</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="white-text" to="/parents" onClick={onClick}>Parents</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="white-text" to="/children" onClick={onClick}>Children</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
        </header>
    );
}

export default Header;