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
export default function RouteSwitch() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          Navbar
          <Link to="/">Go Back to Home</Link>
        </nav>
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
