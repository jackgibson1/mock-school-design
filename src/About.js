import React from 'react'; 
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
//import BackgroundImage from 'images/productCurvyLines.png';

const containerStyle = { 
  backgroundImage: `url(images/productCurvyLines.png)`, 
  backgroundColor: '#fff5f8', 
  backgroundSize: 'cover'
}


function About() { 
    return ( 
        <MDBContainer fluid style={containerStyle} className="About text-center">
        <MDBRow>
          <MDBCol md="1" />
          <MDBCol md="10">
            <h2 className="mt-5"><strong>Welcome!</strong></h2>
            <h5 className="pt-2"><strong>Principal's Welcome</strong></h5>
            <img src="images/professionalperson.png" height="50px" />
            <p className="text-center pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-center pt-3">
            t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-center pt-3">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-center pt-3">
            <strong>J Smith.</strong>
            </p>
            <p className="text-center">
            Principal
            </p>
          </MDBCol>
          <MDBCol md="1" />
        </MDBRow>
        </MDBContainer>

    )
}
export default About;