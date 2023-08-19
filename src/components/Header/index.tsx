import { IoClose } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useLocation } from 'react-router-dom';

interface HeaderProps {
  isMobile: boolean;
  sidebarOpen: boolean;
  toggleSideBar: () => void;
}

const Header = ({
  isMobile,
  sidebarOpen,
  toggleSideBar: toggleSidebar,
}: HeaderProps) => {
  const { pathname } = useLocation();
  return (
    <div className="relative w-full h-16 px-2 py-2.5 flex justify-center items-center bg-blue-500">
      {isMobile &&
        (sidebarOpen ? (
          <IoClose
            className="absolute p-1 text-3xl text-gray-500 bg-white rounded-sm cursor-pointer left-3 top-3"
            onClick={toggleSidebar}
          />
        ) : (
          <GiHamburgerMenu
            className="absolute p-1 text-3xl text-gray-500 bg-white rounded-sm cursor-pointer left-3 top-3"
            onClick={toggleSidebar}
          />
        ))}
      <p className="text-lg font-bold text-white capitalize">
        {pathname.split('/')} Page
      </p>
    </div>
  );
};

export default Header;
