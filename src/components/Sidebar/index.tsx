import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { BsArrowLeftShort } from 'react-icons/bs';
import { TbDashboard } from 'react-icons/tb';

// import { useSelector } from 'react-redux';

function Sidebar() {
  const { pathname } = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // const currentUser = useSelector((state) => state.auth);

  return (
    <aside
      id="separator-sidebar"
      className={`h-screen transition-all duration-200 ease-in-out relative ${
        sidebarOpen ? 'w-72' : 'w-20'
      }`}
    >
      <BsArrowLeftShort
        className={`absolute text-3xl text-gray-500 bg-white border border-gray-300 rounded-full cursor-pointer -right-3.5 top-3 transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'rotate-0' : 'rotate-180'
        }`}
        onClick={toggleSidebar}
      />
      <div className="h-full px-3 py-4 overflow-y-auto bg-transparent border-r border-gray-300 scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-primary">
        <ul
          className={`mt-10 space-y-2 ${
            !sidebarOpen ? 'flex flex-col items-center' : 'block'
          }`}
        >
          <li>
            <Link
              to="/contact"
              className={`flex items-center text-sm text-gray-600 gap-x-4 cursor-pointer mt-2 p-2 rounded-md transition-all duration-200 ease-in-out hover:bg-gray-100 ${
                pathname.includes('contact') && 'bg-gray-100'
              }`}
            >
              <span className="block float-left text-2xl">
                <TbDashboard />
              </span>
              <span
                className={`flex-1 text-base font-public-sans-semibold duration-200 ${
                  !sidebarOpen && 'hidden'
                }`}
              >
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
