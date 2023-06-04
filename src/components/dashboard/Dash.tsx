import * as React from "react";
import styled from "styled-components";

const BaseComponent = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;



const Dash = () => {
  return (
    <BaseComponent>
      <h2>P2 DASHBOARD</h2>
    </BaseComponent>
  );
};

export default Dash;
