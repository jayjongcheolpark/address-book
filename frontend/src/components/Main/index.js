import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 10%;
  padding-left: 10%;
`;

const Main = () => (
  <StyledDiv>
    <h1>Address Book</h1>
    <h3>Please select the name on the left</h3>
  </StyledDiv>
);

export default Main;
