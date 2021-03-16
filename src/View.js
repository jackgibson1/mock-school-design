import React from 'react'; 
import { MDBMask, MDBView } from 'mdbreact';

function View() { 
    return ( 
        <MDBView src="images/herobackground.jpg">
        <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
          <h2>Welcome to Ballyvester PS</h2>
          <h5>A Happy and safe environment for children set in the North Down countryside.</h5>
        </MDBMask>
      </MDBView>
    )
}
export default View;