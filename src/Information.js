import React from 'react'; 
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Card from './Card';

const CardInformation = [ 
    { 
        title: 'School Diary', 
        imgpath: 'images/diary.jpeg', 
        buttonText: 'View Full List', 
        buttonLink: 'public/images/2019-20-holiday-dates.pdf'
    }, 
    { 
        title: 'Prospectus', 
        imgpath: 'images/prospectus.jpeg', 
        buttonText: 'Download', 
        buttonLink: 'public/images/2019-20-holiday-dates.pdf'
    }, 
    { 
        title: 'Photo Gallery', 
        imgpath: 'images/photoalbum.jpeg', 
        buttonText: 'View Gallery', 
        buttonLink: 'public/images/2019-20-holiday-dates.pdf'
    }
]

const containerStyle = { 
    backgroundImage: `url(images/productCurvyLines.png)`, 
    backgroundColor: '#fff5f8', 
    backgroundSize: 'cover'
  }

function Information() { 
    return ( 
        <MDBContainer fluid style={containerStyle} className="Information text-center pb-5">
        <MDBRow className="justify-content-center">
        <MDBCol md="12" className="pt-3">
        <h2 className="mt-5 mb-2"><strong>Information</strong></h2>
        </ MDBCol>
          {CardInformation.map(info => { 
              return ( 
                <MDBCol className="ml-3 mr-3 mt-3 mb-3" md="3">
                <Card info={info} />
              </MDBCol>
              )
          })}
        </MDBRow>
        </MDBContainer>

    )
}
export default Information;