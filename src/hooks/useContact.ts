import { ContactType } from '../types';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  addConatct,
  deleteConatct,
  editConatct,
} from '../redux/slices/contactSlice';
import { useState } from 'react';

export const useContact = () => {
  const contacts = useAppSelector((state) => state.contacts);
  const dispatch = useAppDispatch();
  const [selectedId, setSelectedId] = useState<string>('');

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

  const handleAddContact = (contact: ContactType) => {
    if (!validateForm()) return;
    dispatch(addConatct(contact));
    handleClose();
  };

  const handleEditContact = (contact: ContactType) => {
    setIsEdit(true);
    setFormValues(contact);
    handleOpen();
  };

  const editContact = (contact: ContactType) => {
    if (!validateForm()) return;
    dispatch(editConatct(contact));
    handleClose();
  };

  const handleDeleteContact = (id: string) => {
    setSelectedId(id);
    handleOpen();
  };

  const deleteContact = (id: string) => {
    dispatch(deleteConatct(id));
    handleClose();
  };

  return {
    contacts,
    formValues,
    setFormValues,
    handleAddContact,
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
