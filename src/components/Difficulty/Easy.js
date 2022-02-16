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

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-around;
  min-width: 70%;
`;

export default function Easy(props) {
  const onMouseDown = (e) =>
    console.log(
      `clientX: ${e.nativeEvent.offsetX}, clientY: ${e.nativeEvent.offsetY}`
    );

  return (
    <StyledSection>
      <h1>Easy</h1>
      <StyledUl>
        <li>{props.easyItems[0]}</li>
        <li>{props.easyItems[1]}</li>
        <li>{props.easyItems[2]}</li>
      </StyledUl>
      <StyledDiv>
        <StyledImg src={cartoonpic} onMouseDown={(e) => onMouseDown(e)} />
      </StyledDiv>
    </StyledSection>
  );
}
