import '../styles/App.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SharedSection, GlitchHeader } from '../styles/sharedStyle';

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

const AnotherSection = styled(SharedSection)`
  h3 {
    width: 100%;
    background-color: #fff;
    margin-top: 0;
    border-radius: 0.5em 0.5em 0 0;
  }
  padding-bottom: 2em;
`;

const StyledLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: black;
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

const Form = styled.form`
  input {
    padding: 0.5em;
    width: 250px;
    font-size: clamp(14px, 2vw, 1.2rem);
    margin-right: 0.3em;
    outline: none;
    border: 2px solid #fff;
    border-radius: 1em 1em;

    &:hover {
      border: 2px solid black;
    }
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
      <AnotherSection>
        <h3>Enter your name to begin!</h3>
        <Form id="my-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Tom Hiddleston"
            onChange={props.handleChange}
            value={props.name}
          ></input>
          <StyledLink
            to="/easy"
            onClick={() => {
              props.startGame();
              props.easyShuffle();
              props.getStartTime();
            }}
          >
            Submit
          </StyledLink>
        </Form>
      </AnotherSection>
    </div>
  );
}

export default App;
