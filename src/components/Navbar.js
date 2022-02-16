import styled from 'styled-components';
import { Link } from 'react-router-dom';
const StyledNav = styled.nav`
  background-color: #fff;
  box-shadow: 0px 15px 10px -15px #111;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5em;

  position: fixed;
  top: 0;
  width: 100%;
`;

const StyledUl = styled.ul`
  display: flex;
`;

export default function Navbar(props) {
  return (
    <StyledNav>
      <h1>LOGO</h1>
      {props.gameState && (
        <StyledUl>
          <li>{props.easyItems[0]}</li>
          <li>{props.easyItems[1]}</li>
          <li>{props.easyItems[2]}</li>
        </StyledUl>
      )}
      <Link to="/" onClick={() => props.revertGameState()}>
        Home
      </Link>
    </StyledNav>
  );
}
