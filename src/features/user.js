import { createSlice } from "@reduxjs/toolkit";
const defaultState = {
  name: "",
  age: 0,
  email: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      defaultState,
    },
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = defaultState;
    },
  },
});

export const { login,logout } = userSlice.actions;
export default userSlice.reducer;
