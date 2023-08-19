import { HashLoader } from 'react-spinners';

function Loader() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex items-center justify-center animate-pulse">
        <HashLoader color="#3B82F6" size={70} />
      </div>
    </div>
  );
}

export default Loader;
