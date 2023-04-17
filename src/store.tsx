import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { value: { username: '' } };
const userSlice = createSlice({
  name: 'user',
  //   initialState : { value: { username: '' } } OR
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

// wht is reduser
// reduser is a function that takes in 2 argument "action" and "previous state" and then based on those 2 thing it will return new a state
