import * as React from "react";
import styled from "styled-components";
import { Card } from "./card";
import img1 from "../../assets/img1.png";

const BaseComponent = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(20px + 3vmin);
  color: white;
  background-color: black;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  padding: 100px 10px;
  color: black;
  flex-wrap: wrap;
`;

const HomePage = () => {
  return (
    <BaseComponent>
      <h2>PACK 2</h2>
        <h3>CAIRNS TO PALM COVE</h3>
      <CardContainer>
        <Card
          title={"From"}
          text={"Pick-up Address"}
          input={"details"}
          imgUrl={img1}
        />
        <Card title={"To"} text={"Drop-off Address"} input={"details"}imgUrl={img1} />
        <Card
          title={"Price"}
          text={"Rough estimate"}
          input={"details"}
          imgUrl={img1}
        />
      </CardContainer>
    </BaseComponent>
  );
};

export default HomePage;
