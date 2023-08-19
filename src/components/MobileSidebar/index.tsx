import { Link, useLocation } from 'react-router-dom';
import { TbDashboard } from 'react-icons/tb';
import { LuContact } from 'react-icons/lu';

interface MobileSidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const MobileSidebar = ({ sidebarOpen, toggleSidebar }: MobileSidebarProps) => {
  const { pathname } = useLocation();

  return (
    <aside
      id="separator-sidebar"
      className={`absolute inset-0 border w-screen h-screen transition-all duration-300 ease-in-out z-50 bg-white ${
        sidebarOpen
          ? ' opacity-100 translate-x-0'
          : ' opacity-0 -translate-x-full'
      }`}
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-transparent border-r border-gray-300">
        <ul className="block mt-10 space-y-2">
          <li>
            <Link
              to="/dashboard"
              onClick={toggleSidebar}
              className={`flex items-center text-sm text-gray-600 gap-x-4 cursor-pointer mt-2 p-2 rounded-md transition-all duration-200 ease-in-out hover:bg-gray-100 ${
                pathname.includes('dashboard') && 'bg-gray-100'
              }`}
            >
              <span className="block float-left text-2xl">
                <TbDashboard />
              </span>
              <span className="flex-1 text-base font-semibold duration-200">
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={toggleSidebar}
              className={`flex items-center text-sm text-gray-600 gap-x-4 cursor-pointer mt-2 p-2 rounded-md transition-all duration-200 ease-in-out hover:bg-gray-100 ${
                pathname.includes('contact') && 'bg-gray-100'
              }`}
            >
              <span className="block float-left text-2xl">
                <LuContact />
              </span>
              <span className="flex-1 text-base font-semibold duration-200">
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default MobileSidebar;
