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

const StyledNav = styled.nav`
  background-color: #fff;
  box-shadow: 0px 15px 10px -15px #111;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5em;
`;
export default function RouteSwitch() {
  return (
    <div>
      <BrowserRouter>
        <StyledNav>
          <h1>LOGO</h1>
          <div>FIND ME</div>
          <Link to="/">Home</Link>
        </StyledNav>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/easy" element={<Easy />}></Route>
          <Route path="/medium" element={<Medium />}></Route>
          <Route path="/hard" element={<Hard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
