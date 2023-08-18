import { Suspense, lazy } from 'react';
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom';

const Contact = lazy(() => import('../components/Contact'));
const MainLayout = lazy(() => import('../layouts/MainLayout'));
const Loader = lazy(() => import('../components/Loader'));

const MainRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="contact" element={<Contact />} />
            <Route path="/" element={<Navigate to="contact" replace />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
};

export default MainRoutes;