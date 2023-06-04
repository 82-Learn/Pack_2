import * as React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';


const BaseComponent = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  text-align: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 50px 10px;
  max-width: 0 auto;
  margin: 0 auto;
  text-align: center;

`;




const Login = () => {
  return (
    <BaseComponent>
  <form>
    <label>
      <p>Username</p>
      <TextField></TextField>
    </label>
    <label>
      <p>Password</p>
      <TextField></TextField>
    </label>
    <Container>
      <Button 
              variant="contained"
              color="primary"
              size="large"
              type="submit">Submit</Button>
    </Container>
  </form>
  </BaseComponent>
  );
};
export default Login;