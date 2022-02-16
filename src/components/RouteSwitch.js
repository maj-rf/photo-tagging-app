import styled from 'styled-components';
import {
  HashRouter as BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import App from './App';
import Easy from './Difficulty/Easy';
import Medium from './Difficulty/Medium';
import Hard from './Difficulty/Hard';
import { useEffect, useState } from 'react';
import shuffle from './helpers/shuffle';

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
export default function RouteSwitch() {
  const [easyItems, setEasyItems] = useState([
    'patrick',
    'saitama',
    'pikachu',
    'ness',
    'sasuke',
    'naruto',
    'knuckles',
    'goku',
    'waluigi',
  ]);

  const [gameState, setGameState] = useState(false);

  const easyShuffle = () => {
    let arr = shuffle(easyItems);
    setEasyItems(arr);
  };

  const changeGameState = () => {
    setGameState(!gameState);
  };

  return (
    <div>
      <BrowserRouter>
        <StyledNav>
          <h1>LOGO</h1>
          {gameState && (
            <ul>
              <li>{easyItems[0]}</li>
              <li>{easyItems[1]}</li>
              <li>{easyItems[2]}</li>
            </ul>
          )}
          <Link to="/" onClick={() => setGameState(false)}>
            Home
          </Link>
        </StyledNav>
        <Routes>
          <Route
            path="/"
            element={
              <App
                changeGameState={changeGameState}
                easyShuffle={easyShuffle}
              />
            }
          ></Route>
          <Route path="/easy" element={<Easy easyItems={easyItems} />}></Route>
          <Route path="/medium" element={<Medium />}></Route>
          <Route path="/hard" element={<Hard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
