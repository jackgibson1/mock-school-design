import React from 'react'; 
import { MDBMask, MDBView } from 'mdbreact';

const backgroundColor = { 
  backgroundColor: 'red'
}

function View() { 
    return ( 
        <MDBView src="images/herobackground.jpg">
        <MDBMask  className="flex-center flex-column text-white text-center">
          <h2 className="">Welcome to Ballyvester Primary School</h2>
          <h5 className="">A Happy and safe environment for children set in the North Down countryside.</h5>
        </MDBMask>
      </MDBView>
    )
}
export default View;