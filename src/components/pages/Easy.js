import cartoonpic from '../../assets/cartoonpic.jpeg';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

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
  position: relative;
`;

const DropDownContainer = styled('div')`
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
`;

const DropDownListContainer = styled('div')``;

const DropDownList = styled('ul')`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  padding-right: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: black;
  font-size: calc(1rem + ((1vw - 0.48em) * 1.3889));
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled('li')`
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;

  &:hover {
    color: tomato;
  }
`;

export default function Easy(props) {
  const [currentTime, setCurrentTime] = useState(0);
  const [choiceCoords, setChoiceCoords] = useState(null);
  const choices = [...props.easyItems].slice(3);
  const [isOpen, setIsOpen] = useState(false);
  // get currentTime on component mount
  useEffect(() => {
    console.log(getCurrentTime());
  }, []);

  function convertCoordstoPercent(e) {
    let x = Math.round(
      (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
    );
    let y = Math.round(
      (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
    );
    return { x, y };
  }

  function getCurrentTime() {
    let today = new Date();
    let totalSeconds =
      today.getHours() * 60 * 60 + today.getMinutes() * 60 + today.getSeconds();
    setCurrentTime(totalSeconds);
    return totalSeconds;
  }

  function toggleDropdown(e) {
    const dropdown = document.querySelector('.dropdown');
    let coords = convertCoordstoPercent(e);
    if (coords.x > 80) coords.x = 65;
    if (coords.y > 80) coords.y = 65;
    dropdown.style.left = `${coords.x}%`;
    dropdown.style.top = `${coords.y}%`;
    setIsOpen(!isOpen);
  }

  function pointImage(e) {
    toggleDropdown(e);
    let coords = convertCoordstoPercent(e);
    console.log(coords.x, coords.y);
    setChoiceCoords((prevState) => (prevState = { ...coords }));
  }

  function validateAnswer(choice) {
    const xplus = choice.x + 3;
    const yplus = choice.y + 3;
    const xminus = choice.x - 3;
    const yminus = choice.y - 3;
    setIsOpen(false);
    if (
      choiceCoords.x < xplus &&
      choiceCoords.y < yplus &&
      choiceCoords.x > xminus &&
      choiceCoords.y > yminus
    )
      return 'Correct';
    else return `That's not ${choice.name}`;
  }

  return (
    <StyledSection>
      <h1>Easy</h1>
      <StyledDiv>
        <StyledImg
          id="easyPic"
          src={cartoonpic}
          onMouseDown={(e) => pointImage(e)}
        />
        <DropDownContainer className="dropdown">
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                {choices.map((choice) => {
                  return (
                    <ListItem
                      key={choice.name + choice.x}
                      onClick={() => console.log(validateAnswer(choice))}
                    >
                      {choice.name}
                    </ListItem>
                  );
                })}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </StyledDiv>
    </StyledSection>
  );
}
