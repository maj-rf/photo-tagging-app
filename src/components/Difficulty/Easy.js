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
  padding: 0;
  margin: 0;
`;
const StyledDiv = styled.div`
  border: 3px solid #fff;
`;

export default function Easy() {
  const onMouseDown = (e) => {
    const xCoord = Math.round(
      (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
    );
    const yCoord = Math.round(
      (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
    );
    console.log(xCoord, yCoord);
  };

  return (
    <StyledSection>
      <h1>Easy</h1>
      <StyledDiv>
        <StyledImg
          id="easyPic"
          src={cartoonpic}
          onMouseDown={(e) => onMouseDown(e)}
        />
      </StyledDiv>
    </StyledSection>
  );
}
