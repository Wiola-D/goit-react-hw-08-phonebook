import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';

export const selectFilter = state => state.filter.status;

export const selectfilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
