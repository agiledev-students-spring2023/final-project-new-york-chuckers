import './App.css';
import Settings from './Settings';
import Home from './Home';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <main className="App-main">
            <Routes>
              {/* a route for the home page */}
              <Route path="/" element={<Home />} />
              {/* a route to see a list of all messages */}
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </header>
      </Router>
    </div>
  );
}

export default App;
