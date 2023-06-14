import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/usersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,// here we will be adding reducers
  },
});

export default store;
