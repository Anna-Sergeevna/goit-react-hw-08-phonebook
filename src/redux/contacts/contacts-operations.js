import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// export const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactRequst());

//   try {
//     const { data } = await axios.get('/contacts');

//     dispatch(fetchContactSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactError(error));
//   }

//   // axios
//   //   .get('/contacts')
//   //   .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//   //   .catch(error => dispatch(fetchContactsError(error)));
// };

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', { name, number });
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// export const addContact =
//   ({ name, number }) =>
//   async dispatch => {
//     const contact = {
//       name,
//       number,
//     };

//     dispatch(addContactRequst());

//     try {
//       const { data } = await axios.post('/contacts', contact);

//       dispatch(addContactSuccess(data));
//     } catch (error) {
//       dispatch(addContactError(error));
//     }
//   };

// export const deleteContact = id => dispatch => {
//   dispatch(deleteContactRequst());

//   axios
//     .delete(`/contacts/${id}`)
//     .then(() => dispatch(deleteContactSuccess(id)))
//     .catch(error => dispatch(deleteContactError(error)));
// };

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
