import React from 'react'; 
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import ReactPlayer from 'react-player';

function Videos() { 
    return ( 
        <MDBContainer className="Videos text-center mt-5 mb-5">
        <MDBRow>
          <MDBCol md="1" />
          <MDBCol md="10">
             <h2><strong>What We Get Up To!</strong></h2>
             <h6 className="pt-1"><strong>Promotional Video</strong></h6>
             <MDBContainer 
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',}} 
                className="Videos text-center pt-1"
              >
                <ReactPlayer url="https://www.youtube.com/watch?v=bx1Bh8ZvH84" />
             </MDBContainer>
             <h6 className="pt-3"><strong>We've Got History</strong></h6>
             <MDBContainer 
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',}} 
                className="Videos text-center pt-1"
              >
                <ReactPlayer url="https://www.youtube.com/watch?v=bx1Bh8ZvH84" />
             </MDBContainer>

          </MDBCol>
          <MDBCol md="1" />
        </MDBRow>
        </MDBContainer>

    )
}
export default Videos;