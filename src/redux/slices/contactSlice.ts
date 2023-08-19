import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactType } from '../../types';
import { v4 as uuidv4 } from 'uuid';

const initialState: ContactType[] = [];

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addConatct: (state, action: PayloadAction<ContactType>) => {
      return [
        ...state,
        {
          ...action.payload,
          id: uuidv4(),
        },
      ];
    },

    editConatct: (state, action: PayloadAction<ContactType>) => {
      return state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
    },

    deleteConatct: (state, action: PayloadAction<string>) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

export default contactSlice.reducer;
export const { addConatct, editConatct, deleteConatct } = contactSlice.actions;
