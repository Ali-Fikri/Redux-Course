import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {
      name: "",
      email: "",
    },
    loading: null,
    error: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    addUserLoading: (state) => {
      state.loading = true;
    },
    addUserSuccess: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
    },
    addUserError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { addUser, addUserLoading, addUserSuccess, addUserError } = userSlice.actions;

export default userSlice.reducer;
