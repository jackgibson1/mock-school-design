import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function FooterPage() {
  return (
    <MDBFooter color="grey" className="font-small">
      <div className="footer-copyright text-center pt-3">
        <MDBContainer fluid>
            <p>&copy; {new Date().getFullYear()} Copyright: <a href=""> Ballyvester Primary School</a></p> 
            <p>Made By <a href="https://jackgibson.uk">Jack Gibson</a></p>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;