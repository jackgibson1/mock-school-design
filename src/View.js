import React from 'react'; 
import { MDBMask, MDBView } from 'mdbreact';

const backgroundColor = { 
  backgroundColor: 'red'
}

function View() { 
    return ( 
        <MDBView src="images/herobackground.jpg">
        <MDBMask  className="flex-center flex-column text-white text-center">
          <h3 className=""><strong>Welcome to Test Primary School</strong></h3>
          <h5 className="">A Happy and safe environment for children set in the countryside</h5>
        </MDBMask>
      </MDBView>
    )
}
export default View;