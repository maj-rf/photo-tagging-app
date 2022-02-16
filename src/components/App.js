import '../App.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SharedSection } from './styles/sharedStyle';

const StyledDiv = styled.div``;

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

    &:hover {
      color: gray;
      font-weight: 900;
    }
  }
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;

  li {
    text-transform: uppercase;
  }
`;
function App(props) {
  return (
    <StyledDiv className="App">
      <header>
        <h2> An Implementation of the "Where's Waldo" Game</h2>
      </header>
      <StyledSection>
        <h3>How to Play:</h3>
        <ol>
          <li>Select a Difficulty and an image will be provided to you.</li>
          <li>Timer will start as soon as the image loads.</li>
          <li>
            Check the Navigation bar above to see what (3) items will you look
            for.
          </li>
          <li>Game ends when you find all (3) items.</li>
          <li>Submit your name and check for High Score!</li>
        </ol>
      </StyledSection>
      <StyledSection>
        <h3>Pick A Difficulty!</h3>
        <StyledUl>
          <li>
            <Link
              to="/easy"
              onClick={() => {
                props.changeGameState();
                props.easyShuffle();
              }}
            >
              Easy
            </Link>
          </li>
          <li>
            <Link to="/medium">Medium</Link>
          </li>
          <li>
            <Link to="/hard">Hard</Link>
          </li>
        </StyledUl>
      </StyledSection>
    </StyledDiv>
  );
}

export default App;
