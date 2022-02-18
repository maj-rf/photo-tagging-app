import cartoonpic from '../../assets/cartoonpic.jpeg';
import styled from 'styled-components';
import React, { useState, useEffect, useRef } from 'react';
import { convertCoordstoPercent } from '../utils/utils';
import { Link } from 'react-router-dom';
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

const StyledLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  border: 1px solid #fff;
  padding: 0.5em;
  border-radius: 0.5em 0.5em;
  font-size: 1em;
  &:hover {
    border: 1px solid #c0c0c0;
    color: #fff;
    transition: 0.3s ease-in-out;
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

const EndgameModal = styled.div`
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: white;
  font-size: 2em;
  z-index: 3;
  div {
    text-align: center;
    margin-top: 0.5em;
  }
`;

export default function Easy(props) {
  const modalRef = useRef(null);
  const [choiceCoords, setChoiceCoords] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const notif = document.querySelector('.notif');

  useEffect(() => {
    if (props.easyItems.length === 0) {
      props.submitUser(props.name, props.startTime, props.getCurrentTime());
      gameOver();
    }
  });

  function showFinalScore() {
    let final = props.getCurrentTime() - props.startTime;
    let minutes = Math.floor(final / 60);
    let seconds = final % 60;
    if (seconds < 10) seconds = '0' + seconds;
    return `${minutes}:${seconds}`;
  }

  function gameOver() {
    modalRef.current.style.display = 'flex';
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
      <EndgameModal ref={modalRef}>
        <div>
          <h1>Game Over</h1>
          <h2>Your time is {showFinalScore()}</h2>
          <StyledLink to="/leaderboard">Leaderboard</StyledLink>
        </div>
      </EndgameModal>
    </StyledSection>
  );
}
