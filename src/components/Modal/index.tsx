import { IoClose } from 'react-icons/io5';

interface Props {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
}

const Modal = ({ children, open, handleClose }: Props) => {
  return open ? (
    <div className="absolute inset-0 z-10 flex items-center justify-center w-screen h-screen overflow-hidden bg-black/50">
      <div className="relative w-full max-w-md p-4 bg-white rounded-lg">
        <div
          role="button"
          tabIndex={0}
          onClick={handleClose}
          className="absolute flex items-center justify-center p-1 transition-all duration-300 ease-in-out bg-gray-300 rounded-full cursor-pointer top-4 right-4 aspect-square hover:bg-gray-300/70"
        >
          <IoClose className="object-contain w-5 h-5 text-gray-500" />
        </div>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
