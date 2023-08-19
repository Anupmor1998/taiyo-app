import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import MobileSidebar from '../../components/MobileSidebar';

function MainLayout() {
  const [isMobile, setIsMobile] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <Header
        isMobile={isMobile}
        sidebarOpen={sidebarOpen}
        toggleSideBar={toggleSidebar}
      />
      <div className="flex w-full h-[calc(100%-4rem)]">
        <div className="relative h-full">
          {isMobile ? (
            <MobileSidebar
              sidebarOpen={sidebarOpen}
              toggleSidebar={toggleSidebar}
            />
          ) : (
            <Sidebar />
          )}
        </div>

        <div className="w-full h-full px-6 py-4 overflow-y-auto scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-blue-500">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
