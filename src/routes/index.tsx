import { Suspense, lazy } from 'react';
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom';
import Loader from '../components/Loader';

const ContactPage = lazy(() => import('../views/Contact'));
const Dashboard = lazy(() => import('../views/Dashboard'));
const MainLayout = lazy(() => import('../layouts/MainLayout'));

const MainRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="contact" element={<ContactPage />} />
            <Route path="dashboard" element={<Dashboard />} />

            <Route path="/" element={<Navigate to="dashboard" replace />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
};

export default MainRoutes;
