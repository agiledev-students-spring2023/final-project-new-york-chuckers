import { Settings } from './pages/Settings';
import { Profile } from './pages/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { FreelancerListPage } from './pages/FreelancerListPage';
import { Layout } from './components/layout/Layout';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { PositionListPage } from './pages/PositionListPage';
import { CompanyProfile } from './pages/CompanyProfile';
import { EditCompany } from './pages/EditCompany';
import { FreelancerDetailPage } from './pages/FreelancerDetailPage';
import { PositionDetailPage } from './pages/PositionDetailPage';
import { SetupPage } from './pages/SetupPage';
import { NewPositionPage } from './pages/NewPositionPage';
import { FreelancerSetupPage } from './pages/FreelancerSetupPage';
import { BottomNavigation } from './components/layout/BottomNavigation';

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          {/* a route for the home page */}
          <Route path="/" element={<Home />} />
          {/* a route to see a list of all messages */}
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/freelancer" element={<FreelancerListPage />} />
          <Route path="/freelancer/:id" element={<FreelancerDetailPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/position" element={<PositionListPage />} />
          <Route path="/edit-company" element={<EditCompany />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/position/:id" element={<PositionDetailPage />} />
          <Route path="/setup" element={<SetupPage />} />
          <Route path="/new-position" element={<NewPositionPage />} />
          <Route path="/freelancer-setup" element={<FreelancerSetupPage />} />
        </Routes>
        <BottomNavigation />
      </Router>
    </Layout>
  );
}

// test

export default App;
