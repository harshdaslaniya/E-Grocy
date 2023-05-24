import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <>
    <Box >
      <Container>
        <Row >
          <Column style={{ marginLeft: "10px"}}>
          {/* <HashLink smooth to={'/page#section-two'}></HashLink> */}
            <Link to="AboutUs" style={{ textDecoration: 'none' }} onClick={()=>{window.scrollTo({ top:0,left:0,behavior:"smooth"});}}><Heading>About Us</Heading></Link>
            <HashLink  to={'/AboutUs#aim'} style={{ textDecoration: 'none' }} ><FooterLink >Aim</FooterLink></HashLink>
            <HashLink  to={'/AboutUs#vision'} style={{ textDecoration: 'none' }} ><FooterLink >Vision</FooterLink></HashLink>
            <HashLink  to={'/AboutUs#tools'} style={{ textDecoration: 'none' }} ><FooterLink >Tools</FooterLink></HashLink>
          </Column>
          <Column style={{ marginLeft: "10px" }}>
          <Link to="Services" style={{ textDecoration: 'none' }} onClick={()=>{window.scrollTo({ top:0,left:0,behavior:"smooth"});}}><Heading>Services</Heading></Link>
            <HashLink  to={'/Services#buying'} style={{ textDecoration: 'none' }} ><FooterLink >Buying</FooterLink></HashLink>
            <HashLink  to={'/Services#selling'} style={{ textDecoration: 'none' }} ><FooterLink >Selling</FooterLink></HashLink>
            <HashLink  to={'/Services#delivery'} style={{ textDecoration: 'none' }} ><FooterLink >Delivery</FooterLink></HashLink>
          </Column>
          <Column style={{ marginLeft: "10px" }}>
            <Heading>Contact Us</Heading>
            <FooterLink >Bhavnagar</FooterLink>
            <FooterLink >Ahemdabad</FooterLink>
          </Column>
          <Column style={{ marginLeft: "10px" }}>
            <Heading>Social Media</Heading>
            <FooterLink >
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink >
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink >
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink >
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
    </>
  );
};
export default Footer;