import { contactsInitialState } from './contactsSlice';

export const getContacts = state => state.contacts.contacts;

export const getFilter = state => state.filter;

export const getReset = state => contactsInitialState;
