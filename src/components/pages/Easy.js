import cartoonpic from '../../assets/cartoonpic.jpeg';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10em;
`;
const StyledImg = styled.img`
  max-height: 100vh;
  max-width: 100vw;
  padding: 0;
  margin: 0;
`;

const StyledDiv = styled.div`
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

const ErrorDiv = styled.div`
  display: none;
  background-color: #1c1c1c;
  color: #fff;
  width: 300px;
  text-align: center;
  position: fixed;
  z-index: 1;
  top: 100px;
  left: 5px;
  animation: fadeOut 2s linear forwards;

  @keyframes fadeOut {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
      transform: translateY(0px);
    }
    99% {
      opacity: 0;
      transform: translateY(-30px);
    }
    100% {
      opacity: 0;
    }
  }
`;

export default function Easy(props) {
  const [choiceCoords, setChoiceCoords] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const notif = document.querySelector('.notif');

  function convertCoordstoPercent(e) {
    let x = Math.round(
      (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
    );
    let y = Math.round(
      (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
    );
    return { x, y };
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
    setChoiceCoords((prevState) => (prevState = { ...coords }));
  }

  function removeNotification() {
    notif.style.display = 'none';
  }

  function updateNotification(element, message) {
    element.style.display = 'block';
    element.firstChild.textContent = message;
    setTimeout(removeNotification, 2000);
  }

  function validateAnswer(choice) {
    const checker = [...props.answers].filter((ans) => ans.id === choice.id);
    const xplus = checker[0].x + 3;
    const yplus = checker[0].y + 3;
    const xminus = checker[0].x - 3;
    const yminus = checker[0].y - 3;
    setIsOpen(false);
    if (
      choiceCoords.x <= xplus &&
      choiceCoords.y <= yplus &&
      choiceCoords.x >= xminus &&
      choiceCoords.y >= yminus
    ) {
      props.removeCorrectAnswers(choice);
      updateNotification(notif, 'Correct');
    } else updateNotification(notif, `That's not ${choice.name}`);
  }

  return (
    <StyledSection>
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
                {props.easyItems.map((choice) => {
                  return (
                    <ListItem
                      key={choice.name + choice.x}
                      onClick={() => validateAnswer(choice)}
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
      <ErrorDiv className="notif">
        <p>Hello</p>
      </ErrorDiv>
    </StyledSection>
  );
}
