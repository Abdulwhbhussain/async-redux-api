import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const UsersUrl = "https://randomuser.me/api/?results=5";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (thunkAPI) => {
    try {
      const response = await fetch(UsersUrl);
      if (!response.ok) {
        throw new Error("Server Error!");
      }
      const users = await response.json();
      return users.results;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    });
  },
});

export default usersSlice.reducer;
