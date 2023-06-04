import * as React from "react";
import styled from "styled-components";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const StyledFooter = styled.div`
  background-color: rgb(26, 26, 26);
  min-height: 10%;
  padding-bottom: 0vh;
  /* equal to footer height */
  margin-bottom: -142px;
  margin: auto;
  align-items: center;
  color: white;
  width: 100%;
  text-align: center;
  @media (max-width: 100%) {
    width: 80%;
  }
`;

const Row = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  grid-gap: 100px;
  margin-right: 20%;
  margin-left: 20%;
  margin-top: 20%;
  margin-bottom: 10%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 0 auto;
  margin-right: 0 auto;
`;

const Heading = styled.h5`
  font-size: 15px;
  margin-bottom: 40px;
  text-align: center;
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 0 auto;
  margin: 0 auto;
  text-align: center;

`;



const Copyright = styled.div`
  max-width: 0 auto;
  display: flex;
  font-size: 13px;
  margin-left: 2  0px;
`;

const FooterButton = styled.button`
  margin: 10px 5px;
  padding: 15px 30px;
  background: #ff6600 ;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  border: none;
`

const Footer = () => {
 
  const navigate = useNavigate();
  const handledriverLog = () => navigate("driverlogin")
  const handleAbout = () => navigate("About")
  const handleContact = () => navigate("Contact")

    
   
    return (
      <StyledFooter>
    <Container>
      <Row>
        <Column>
          <Heading></Heading>
          <FooterButton
          onClick={handleAbout}>ABOUT</FooterButton>
        </Column>
        <Column>
          <Heading></Heading>
        <FooterButton
        onClick={handleContact}>CONTACT</FooterButton>
        </Column>
        <Column>
          <Heading></Heading>
          <Button   variant="contained"
                    color="primary"
                    size="large" 
                    onClick={handledriverLog}>DRIVER LOGIN</Button>
        </Column>
      </Row>
    </Container>
      <Copyright>
        <p>Copyright &copy; 82 Learn Pty Ltd {moment().format("YYYY")}.</p>
      </Copyright>
      </StyledFooter>
    );
  };
  
  export default Footer;
