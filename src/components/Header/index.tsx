import React from 'react';

const Header = () => {
  return (
    <div className="w-full h-16 px-2 py-2.5 flex justify-center items-center bg-blue-500">
      <p className="text-lg font-bold text-white capitalize">
        {window.location.pathname.split('/')} Page
      </p>
    </div>
  );
};

export default Header;
