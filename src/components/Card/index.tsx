import { ContactType } from '../../types';
import { LuEdit2 } from 'react-icons/lu';
import { AiOutlineDelete } from 'react-icons/ai';

interface CardProps {
  contact: ContactType;
  handleEdit: (contact: ContactType) => void;
  handleDelete: (id: string) => void;
}

const Card = ({ contact, handleEdit, handleDelete }: CardProps) => {
  return (
    <div className="relative flex flex-col items-start justify-start w-full p-4 bg-gray-100 rounded-lg sm:w-1/4">
      <div
        onClick={() => handleEdit(contact)}
        className="absolute flex items-center justify-center p-2 transition-all duration-300 ease-in-out rounded-full cursor-pointer top-2 right-2 aspect-square hover:bg-gray-200"
      >
        <LuEdit2 className="object-contain w-4 h-4 text-gray-500" />
      </div>
      <div
        onClick={() => handleDelete(contact.id)}
        className="absolute flex items-center justify-center p-2 transition-all duration-300 ease-in-out rounded-full cursor-pointer group bottom-2 right-2 aspect-square hover:bg-gray-200"
      >
        <AiOutlineDelete className="object-contain w-4 h-4 text-gray-500 group-hover:text-red-500" />
      </div>
      <p className="w-full text-lg font-bold text-gray-700 capitalize">
        {contact.firstName} {contact.lastName}
      </p>
      <span
        className={`flex items-center justify-center px-2 py-1 mt-4 text-sm font-semibold capitalize rounded-sm ${
          contact.status === 'active'
            ? 'bg-green-200 text-green-500'
            : 'bg-red-200 text-red-500'
        }`}
      >
        {contact.status}
      </span>
    </div>
  );
};

export default Card;
