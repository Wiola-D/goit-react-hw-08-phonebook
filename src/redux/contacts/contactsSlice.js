import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './API';
import { contactsInitialState } from './initailState';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(deleteContact.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected)

      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
