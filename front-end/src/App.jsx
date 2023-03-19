import { Route, Routes } from 'react-router-dom';
import { Header } from './components/layout/Header';
import Layout from './components/layout/Layout/Layout';
import { FreelancerListPage } from './pages/FreelancerListPage';

function App() {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/freelancer" element={<FreelancerListPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
