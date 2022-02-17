import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import { GlitchHeader } from '../styles/sharedStyle';
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
    margin-left: 0.5em;
    margin-right: 0.5em;
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

export default function Navbar(props) {
  return (
    <StyledNav>
      <GlitchHeader>
        <h2 className="glitch">
          <span aria-hidden="true">LOOKR</span>
          LOOKR
          <span aria-hidden="true">LOOKR</span>
        </h2>
      </GlitchHeader>
      {props.gameState && (
        <StyledUl>
          {props.easyItems.map((item) => {
            return <NavItem key={item.name} item={item} />;
          })}
        </StyledUl>
      )}
      {props.gameState && (
        <StyledLink to="/" onClick={() => props.revertGameState()}>
          Home
        </StyledLink>
      )}
    </StyledNav>
  );
}
