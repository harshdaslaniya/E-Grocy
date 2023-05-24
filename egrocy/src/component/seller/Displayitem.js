import React from 'react';
import dummy from "./dummy1.png"
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Displayitem() {
 

	return (
        <>
        <section>
        <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={dummy}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '250px' }}
                  fluid />
                
                <div className="d-flex justify-content-center mb-2">
                <Link to="/Seller/Updatephoto"><input type='button' className='btn btn-outline-danger mt-2' value="Upgrade" ></input></Link>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Product Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">xyz product name</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Category</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">foods</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Price</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">1111 per xyz</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Discription</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Bay Area, San Francisco, CA Bay Area, San Francisco, CA Bay Area, San Francisco, CA Bay Area, San Francisco, CA Bay Area, San Francisco, CA Bay Area, San Francisco, CA Bay Area, San Francisco, CA</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol >
                  <Link to="/Seller/Updatedetail"><input type='button' className='btn btn-outline-danger' value="Upgrade"></input></Link>
                  </MDBCol>
                 
                </MDBRow>
                
              </MDBCardBody>
            </MDBCard>

            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
</>

	);
  }
  

export default Displayitem;
