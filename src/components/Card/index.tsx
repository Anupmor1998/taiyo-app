import { ContactType } from '../../types';
import { LuEdit2 } from 'react-icons/lu';
import { AiOutlineDelete } from 'react-icons/ai';

const Card = ({ firstName, lastName, status }: ContactType) => {
  return (
    <div className="relative flex flex-col items-start justify-start w-full p-4 bg-gray-100 rounded-lg sm:w-1/4">
      <div className="absolute flex items-center justify-center p-2 transition-all duration-300 ease-in-out bg-gray-300 rounded-full cursor-pointer top-2 right-2 aspect-square hover:bg-gray-300/70">
        <LuEdit2 className="object-contain w-4 h-4 text-gray-500" />
      </div>
      <div className="absolute flex items-center justify-center p-2 transition-all duration-300 ease-in-out bg-gray-300 rounded-full cursor-pointer bottom-2 right-2 aspect-square hover:bg-gray-300/70">
        <AiOutlineDelete className="object-contain w-4 h-4 text-gray-500" />
      </div>
      <p className="w-full text-lg font-bold text-gray-700 capitalize">
        {firstName} {lastName}
      </p>
      <span
        className={`flex items-center justify-center px-2 py-1 mt-4 text-sm font-semibold capitalize rounded-sm ${
          status === 'active'
            ? 'bg-green-200 text-green-500'
            : 'bg-red-200 text-red-500'
        }`}
      >
        {status}
      </span>
    </div>
  );
};

export default Card;
