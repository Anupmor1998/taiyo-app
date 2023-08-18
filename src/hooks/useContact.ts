import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ContactType } from '../types';

export const useContact = () => {
  const [selectedId, setSelectedId] = useState<string>('');
  const [contacts, setContacts] = useState<ContactType[]>(() =>
    localStorage.getItem('contacts')
      ? JSON.parse(localStorage.getItem('contacts')!)
      : []
  );
  const [formValues, setFormValues] = useState<ContactType>(() => ({
    id: '',
    firstName: '',
    lastName: '',
    status: 'active',
  }));

  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState(() => ({
    firstName: '',
    lastName: '',
  }));

  const [isEdit, setIsEdit] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormValues({
      id: '',
      firstName: '',
      lastName: '',
      status: 'active',
    });

    setErrors({
      firstName: '',
      lastName: '',
    });
    setIsEdit(false);
    setSelectedId('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const { firstName, lastName } = formValues;

    let isValid = true;

    if (!firstName) {
      setErrors((prev) => ({ ...prev, firstName: 'First Name is required' }));
      isValid = false;
    }

    if (!lastName) {
      setErrors((prev) => ({ ...prev, lastName: 'Last Name is required' }));
      isValid = false;
    }

    return isValid;
  };

  const addContact = (contact: ContactType) => {
    if (!validateForm()) return;
    setContacts((prev) => [
      ...prev,
      {
        id: uuidv4(),
        firstName: contact.firstName,
        lastName: contact.lastName,
        status: contact.status,
      },
    ]);
    handleClose();
  };

  const handleEditContact = (contact: ContactType) => {
    setIsEdit(true);
    setFormValues(contact);
    handleOpen();
  };

  const editContact = (contact: ContactType) => {
    if (!validateForm()) return;
    setContacts((prev) => {
      const index = prev.findIndex((item) => item.id === contact.id);
      prev[index] = contact;
      return [...prev];
    });
    handleClose();
  };

  const handleDeleteContact = (id: string) => {
    setSelectedId(id);
    handleOpen();
  };

  const deleteContact = (id: string) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
    handleClose();
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return {
    contacts,
    formValues,
    setFormValues,
    addContact,
    editContact,
    deleteContact,
    open,
    selectedId,
    handleOpen,
    handleClose,
    handleChange,
    handleEditContact,
    handleDeleteContact,
    errors,
    isEdit,
  };
};
