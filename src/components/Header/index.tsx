import { useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-full h-16 px-2 py-2.5 flex justify-center items-center bg-blue-500">
      <p className="text-lg font-bold text-white capitalize">
        {pathname.split('/')} Page
      </p>
    </div>
  );
};

export default Header;
