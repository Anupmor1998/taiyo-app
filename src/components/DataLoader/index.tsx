import { ClipLoader } from 'react-spinners';

function DataLoader() {
  return (
    <div className="flex items-center justify-center animate-pulse">
      <ClipLoader color="#3B82F6" size={40} />
    </div>
  );
}

export default DataLoader;
