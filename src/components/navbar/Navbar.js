import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';

const StyledNav = styled.nav`
  background-color: #fff;
  box-shadow: 0px 15px 10px -15px #111;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5.5em;

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  li {
    margin-left: 1em;
    margin-right: 1em;
  }
`;

const StyledLink = styled(Link)`
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

export default function Navbar(props) {
  const arr = [...props.easyItems].slice(3);
  return (
    <StyledNav>
      <StyledHeader>
        <h2 className="glitch">
          <span aria-hidden="true">LOOKR</span>
          LOOKR
          <span aria-hidden="true">LOOKR</span>
        </h2>
      </StyledHeader>
      {props.gameState && (
        <StyledUl>
          {arr.map((item) => {
            return <NavItem key={item.name} item={item} />;
          })}
        </StyledUl>
      )}
      <StyledLink to="/" onClick={() => props.revertGameState()}>
        Home
      </StyledLink>
    </StyledNav>
  );
}
