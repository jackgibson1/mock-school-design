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
            <img src="images/katryna-hunter.jpeg" height="50px" />
            <p className="text-center pt-3">
            On behalf of the pupils, staff and Board of Governors of Ballyvester Primary School I would like to welcome you to our website.
            </p>
            <p className="text-center pt-3">
            This website will give you just a glimpse of life at our school and we consider it a privilege when a parent entrusts their child to our care. We use the website to inform you about the life of our school and to celebrate the success of our pupils and we hope as you explore the site you get a flavour of Ballyvester Primary School.
            </p>
            <p className="text-center pt-3">
            However, no website can convey the ethos and family atmosphere that exists in our school. Therefore, if you feel you would like to visit the school and see us in action please do not hesitate to contact the school office to arrange a tour.
            </p>
            <p className="text-center pt-3">
            <strong>K Hunter</strong>
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