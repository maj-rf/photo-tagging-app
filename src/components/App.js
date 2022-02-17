import './styles/App.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SharedSection, GlitchHeader } from './styles/sharedStyle';

const StyledSection = styled(SharedSection)`
  h3 {
    width: 100%;
    background-color: #fff;
    margin-top: 0;
    border-radius: 0.5em 0.5em 0 0;
  }
  ol {
    display: flex;
    flex-direction: column;
    margin-right: 1em;
  }

  ol > li {
    list-style: number;
    text-align: justify;
  }

  li > * {
    text-decoration: none;
    color: black;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 1em;
`;

const StyledLink = styled(Link)`
  text-transform: uppercase;
  border: 1px solid black;
  padding: 0.5em;
  border-radius: 0.5em 0.5em;

  &:hover {
    border: 1px solid #c0c0c0;
    background-color: black;
    color: #fff;
    transition: 0.3s ease-in-out;
  }
`;

function App(props) {
  return (
    <div className="App">
      <GlitchHeader>
        <h2 className="glitch">
          <span aria-hidden="true">A Where's Waldo-like Web App</span>A Where's
          Waldo-like Web App
          <span aria-hidden="true">A Where's Waldo-like Web App</span>
        </h2>
      </GlitchHeader>
      <StyledSection>
        <h3>How to Play:</h3>
        <ol>
          <li>Select a Difficulty and an image will be provided to you.</li>
          <li>Timer will start as soon as the image loads.</li>
          <li>
            Check the Navigation bar above to see what (3) items will you look
            for.
          </li>
          <li>Hover/tap(on mobile) image items to see the images larger.</li>
          <li>Game ends when you find all (3) items.</li>
          <li>Submit your name and check for High Score!</li>
        </ol>
      </StyledSection>
      <StyledSection>
        <h3>Pick A Difficulty!</h3>
        <StyledUl>
          <li>
            <StyledLink
              to="/easy"
              onClick={() => {
                props.changeGameState();
                props.easyShuffle();
              }}
            >
              Easy
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/medium">Medium</StyledLink>
          </li>
          <li>
            <StyledLink to="/hard">Hard</StyledLink>
          </li>
        </StyledUl>
      </StyledSection>
    </div>
  );
}

export default App;
