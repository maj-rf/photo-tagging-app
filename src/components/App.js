import '../App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      Main Page
      <ul>
        Pick A Difficulty!
        <li>
          <Link to="/easy">Easy</Link>
        </li>
        <li>
          <Link to="/medium">Medium</Link>
        </li>
        <li>
          <Link to="/hard">Hard</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
