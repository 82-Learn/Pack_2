import * as React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";




export const Topbarbase = styled.nav`
  background: transparent;
  top: 0;
  left: 0;
  background-color: #373635;
  font-size: 1rem;
  padding: 20px;
  position: sticky;
  width: 100%;
  line-height: 1em;

  z-index: 10;
  border-bottom: 1px solid white;
  @media (max-width: 100%) {
    width: 80%;
  }
`;



const Row = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, auto));
  grid-gap: 100px;
  margin-top: 0%;
  margin-bottom: 1%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 0 auto;
  margin-right: 0 auto;
`;

const Containers = styled.div`
  position: sticky;
  display: flex;
  top: 0px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 0 auto;
  margin: 0 auto;
  text-align: center;
`;

 const Button = styled.button`
  font-size: 12px;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  padding: 16px 16px;
  cursor: pointer;
  background-color: rgb(26, 26, 26);
  line-height: 1em;
  border: 2px solid #ff6600;
  font-weight: bold;
  border-radius: 10px;
  display: inline-grid;
  margin-left: 10px;
`;



const TopNav = () => {
 
const navigate = useNavigate();
const handleLogin = () => navigate("login")
const handleSignup = () => navigate("signup")
  
 
  return (
    <Topbarbase>
        <Containers>
          <Row>
            <Column>
            <Button onClick={handleLogin}>LOGIN</Button>
            </Column>
            <Column>
            <Button onClick={handleSignup}>SIGNUP</Button>
            </Column>
          </Row>
          </Containers>
    </Topbarbase>
  );
};

export default TopNav;
