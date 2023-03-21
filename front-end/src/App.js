import { Settings } from './pages/Settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { FreelancerListPage } from './pages/FreelancerListPage';
import { Layout } from './components/layout/Layout';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { PositionListPage } from './pages/PositionListPage';
import { FreelancerDetailPage } from './pages/FreelancerDetailPage';
import { PositionDetailPage } from './pages/PositionDetailPage';

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
          <Route path="/freelancer/:id" element={<FreelancerDetailPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/position" element={<PositionListPage />} />
          <Route path="/position/:id" element={<PositionDetailPage />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
