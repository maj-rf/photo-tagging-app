import '../App.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div``;

const StyledSection = styled.section`
  border: 2px solid #fff;
  border-radius: 1em 1em;
  width: clamp(350px, 60vw, 100%);
  font-size: clamp(14px, 2vw, 1.2rem);
  margin-bottom: 1em;

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
      <ul>
        Pick A Difficulty!
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
      </ul>
    </StyledDiv>
  );
}

export default App;
