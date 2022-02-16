import cartoonpic from '../../assets/cartoonpic.jpeg';
import styled from 'styled-components';
import React from 'react';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6em;
`;
const StyledImg = styled.img`
  max-height: 100vh;
  max-width: 100vw;
`;
const StyledDiv = styled.div`
  border: 3px solid #fff;
`;

export default function Easy() {
  const onMouseDown = (e) =>
    console.log(
      `clientX: ${e.nativeEvent.offsetX}, clientY: ${e.nativeEvent.offsetY}`
    );

  return (
    <StyledSection>
      <h1>Easy</h1>
      <StyledDiv>
        <StyledImg src={cartoonpic} onMouseDown={(e) => onMouseDown(e)} />
      </StyledDiv>
    </StyledSection>
  );
}
