import Modal from '../Modal';
import { useContact } from '../../hooks/useContact';
import { BiError } from 'react-icons/bi';
import Card from '../Card';

const Contact = () => {
  const {
    contacts,
    formValues,
    open,
    errors,
    isEdit,
    selectedId,
    addContact,
    editContact,
    handleChange,
    handleClose,
    handleOpen,
    handleEditContact,
    handleDeleteContact,
    deleteContact,
  } = useContact();

  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-center w-full">
        <button
          onClick={handleOpen}
          className="px-3 py-2 text-base font-bold text-white transition-all duration-300 ease-in-out bg-blue-500 rounded-lg outline-none w-fit focus:ring-4 focus:ring-blue-300 hover:bg-blue-600"
        >
          Create Contact
        </button>
      </div>

      <div className="w-full mt-10 h-[75vh] overflow-y-auto scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-blue-500">
        {contacts.length !== 0 ? (
          <div className="flex flex-wrap w-full gap-3">
            {contacts.map((contact) => (
              <Card
                key={contact.id}
                handleEdit={handleEditContact}
                handleDelete={handleDeleteContact}
                contact={contact}
              />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <div className="flex items-center justify-center w-full max-w-sm gap-3 px-4 py-10 bg-red-100 rounded-lg">
              <BiError className="w-8 h-8 text-red-500" />
              <h1 className="text-xl font-bold text-center text-red-500">
                No Contacts Found!
              </h1>
            </div>
          </div>
        )}
      </div>

      <Modal open={open && !selectedId} handleClose={handleClose}>
        <div className="w-3/4">
          <h1 className="text-xl font-bold text-left text-gray-600">
            {isEdit ? 'Edit Contact' : 'Create Contact'}
          </h1>
        </div>
        <div className="w-full mt-6">
          <div className="flex flex-col items-start w-full space-y-2">
            <label className="w-full text-base font-medium text-left text-gray-500">
              First Name
            </label>
            <input
              type="text"
              className="text-base font-medium bg-gray-100 w-full text-gray-500 px-2 py-2.5 rounded-lg focus:ring-4 focus:ring-blue-300 outline-none placeholder:text-gray-400"
              placeholder="First Name"
              value={formValues?.firstName || ''}
              onChange={handleChange}
              name="firstName"
              required
            />
            {errors['firstName'] && (
              <span className="mt-1 text-sm font-medium text-red-500">
                {errors['firstName']}
              </span>
            )}
            <label className="w-full text-base font-medium text-left text-gray-500">
              Last Name
            </label>
            <input
              type="text"
              className="text-base font-medium bg-gray-100 w-full text-gray-500 px-2 py-2.5 rounded-lg focus:ring-4 focus:ring-blue-300 outline-none placeholder:text-gray-400"
              placeholder="Last Name"
              value={formValues?.lastName || ''}
              onChange={handleChange}
              name="lastName"
              required
            />
            {errors['lastName'] && (
              <span className="mt-1 text-sm font-medium text-red-500">
                {errors['lastName']}
              </span>
            )}

            <p className="w-full text-base font-medium text-left text-gray-500">
              Status
            </p>
            <div className="flex items-center justify-start w-full mb-4 space-x-4">
              <div className="flex items-center justify-start">
                <input
                  id="active"
                  type="radio"
                  value="active"
                  checked={formValues?.status === 'active'}
                  onChange={handleChange}
                  name="status"
                  required
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  htmlFor="active"
                  className="ml-2 text-sm font-medium text-gray-500"
                >
                  Active
                </label>
              </div>
              <div className="flex items-center justify-start">
                <input
                  id="inactive"
                  type="radio"
                  value="inactive"
                  checked={formValues?.status === 'inactive'}
                  onChange={handleChange}
                  name="status"
                  required
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  htmlFor="inactive"
                  className="ml-2 text-sm font-medium text-gray-500"
                >
                  Inactive
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-10 space-x-4">
          <button
            onClick={() => {
              if (isEdit) {
                editContact(formValues);
              } else {
                addContact(formValues);
              }
            }}
            className="w-full px-3 py-2 text-base font-bold text-white transition-all duration-300 ease-in-out bg-blue-500 rounded-lg outline-none focus:ring-4 focus:ring-blue-300 hover:bg-blue-600"
          >
            Save
          </button>
          <button
            onClick={handleClose}
            className="w-full px-3 py-2 text-base font-bold text-white transition-all duration-300 ease-in-out bg-gray-700 rounded-lg outline-none focus:ring-4 focus:ring-gray-300 hover:bg-gray-800"
          >
            Cancel
          </button>
        </div>
      </Modal>
      <Modal open={open && !!selectedId} handleClose={handleClose}>
        <div className="w-3/4">
          <h1 className="text-xl font-bold text-left text-gray-600">
            Delete Contact
          </h1>
        </div>
        <div className="w-full mt-6">
          <p className="text-sm font-semibold text-gray-700">
            Are you sure you want to delete {formValues?.firstName}{' '}
            {formValues?.lastName}? This action cannot be undone.
          </p>
        </div>
        <div className="flex items-center justify-center w-full mt-10 space-x-4">
          <button
            onClick={() => deleteContact(selectedId)}
            className="w-full px-3 py-2 text-base font-bold text-red-500 transition-all duration-300 ease-in-out bg-red-100 rounded-lg outline-none focus:ring-4 focus:ring-blue-300 hover:bg-red-200"
          >
            Delete
          </button>
          <button
            onClick={handleClose}
            className="w-full px-3 py-2 text-base font-bold text-white transition-all duration-300 ease-in-out bg-gray-700 rounded-lg outline-none focus:ring-4 focus:ring-gray-300 hover:bg-gray-800"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
