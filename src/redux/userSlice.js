import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addUser = createAsyncThunk('user/add', async (user) => {
  const res = await axios.post(`http://localhost:3000/api/users`, user)
  return res.data;
})

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
    // addUser: (state, action) => {
    //   state.name = action.payload.name;
    //   state.email = action.payload.email;
    // },
    // addUserLoading: (state) => {
    //   state.loading = true;
    // },
    // addUserSuccess: (state, action) => {
    //   state.userData = action.payload;
    //   state.loading = false;
    // },
    // addUserError: (state) => {
    //   state.loading = false;
    //   state.error = true;
    // },
  },
  extraReducers: {
    [addUser.pending]: state => {
      state.loading = true;
    },
    [addUser.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
    },
  [addUser.rejected]: state => {
    state.loading = false;
    state.error = true;
  }
  }
});

export default userSlice.reducer;
