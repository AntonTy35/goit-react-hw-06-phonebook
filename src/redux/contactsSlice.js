import { createSlice } from '@reduxjs/toolkit';

export const contactsInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },

    deleteContact: (state, { payload }) => {
      // console.log('id ', payload);
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },

    resetContact: () => {
      return contactsInitialState;
    },
  },
});

export const { addContact, deleteContact, resetContact } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
