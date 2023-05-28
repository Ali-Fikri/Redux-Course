import { addUserError, addUserLoading, addUserSuccess } from './userSlice';

import axios from 'axios';

export const addUser = async (user, dispatch) => {
  dispatch(addUserLoading());


  try {
    const res = await axios.post(`http://localhost:3000/api/users`, user);
    dispatch(addUserSuccess(res.data));
  } catch (err) {
    dispatch(addUserError())
  }
}
