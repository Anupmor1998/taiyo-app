import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

function MainLayout() {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="flex w-full h-[calc(100%-4rem)]">
        <div className="h-full">
          <Sidebar />
        </div>

        <div className="w-full h-full px-6 py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
