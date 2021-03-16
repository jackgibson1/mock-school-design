import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const styles = { 
    img: { 
        width: '100%',
        height: '10%',
        objectFit: 'cover'
    }
}

function Card(props) {
    const { info } = props;
  
    return (
    <MDBCard>
    <MDBCardImage style={styles.img} className="img-fluid" src={info.imgpath}
      waves />
    <MDBCardBody>
      <MDBCardTitle className="cardTitle">{info.title}</MDBCardTitle>
      <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
      <MDBBtn href={info.buttonLink} target = "_blank">{info.buttonText}</MDBBtn>
    </MDBCardBody>
  </MDBCard>
  )
}

export default Card;