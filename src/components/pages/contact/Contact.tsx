import * as React from "react";
import styled from "styled-components";

const BaseComponent = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(20px + 3vmin);
    color: black;
    background-color: white;
`;

const Contact = () => (
    <BaseComponent>
        <h1>Contact</h1>
    </BaseComponent>
);

export default Contact;
