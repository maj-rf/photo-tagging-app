import './styles/App.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SharedSection } from './styles/sharedStyle';

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

const StyledHeader = styled.header`
  .glitch {
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    position: relative;

    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
      -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
      0.025em 0.05em 0 rgba(0, 0, 255, 0.75);

    animation: glitch 500ms infinite;
  }

  .glitch span {
    position: absolute;
    top: 0;
    left: 0;
  }

  .glitch span:first-child {
    animation: glitch 650ms infinite;
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    transform: translate(-0.025em, -0.0125em);
    /* color: green; */
    opacity: 0.8;
  }

  .glitch span:last-child {
    animation: glitch 375ms infinite;
    clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
    transform: translate(0.0125em, 0.025em);
    /* color: red; */
    opacity: 0.8;
  }

  @keyframes glitch {
    0% {
      text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }
    14% {
      text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }
    15% {
      text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
        0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
        -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    49% {
      text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
        0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
        -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    50% {
      text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
        0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    99% {
      text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
        0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    100% {
      text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
        -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    ::before,
    ::after {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  }
`;

function App(props) {
  return (
    <div className="App">
      <StyledHeader>
        <h2 className="glitch">
          <span aria-hidden="true">LOOKR: A "Where's Waldo" Web App</span>
          LOOKR: A "Where's Waldo" Web App
          <span aria-hidden="true">LOOKR: A "Where's Waldo" Web App</span>
        </h2>
      </StyledHeader>
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
