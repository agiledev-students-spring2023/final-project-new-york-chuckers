import { Settings } from './pages/Settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (
    <div>
      <Router>
        <header>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <main>
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
