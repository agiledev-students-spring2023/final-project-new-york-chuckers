import { Settings } from './pages/Settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { FreelancerListPage } from './pages/FreelancerListPage';
import { Layout } from './components/layout/Layout';
import { PositionListPage } from './pages/PositionListPage';

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          {/* a route for the home page */}
          <Route path="/" element={<Home />} />
          {/* a route to see a list of all messages */}
          <Route path="/settings" element={<Settings />} />
          <Route path="/freelancer" element={<FreelancerListPage />} />
          <Route path="/position" element={<PositionListPage />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
