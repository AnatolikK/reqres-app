import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: JSON.parse(localStorage.getItem('user')) || {
    name: '',
    email: '',
    avatar: '',
    id: null,
  },
  reducers: {
    setUser(state, action) {
      return { ...state, ...action.payload };
    },
    clearUser(state) {
      localStorage.removeItem('user');
      return { name: '', email: '', avatar: '', id: null };
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
