import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const sendContactData = createAsyncThunk("sendContactData", async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:2000/api/contact",
      data
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data from the API");
  }
});

const contactSlice = createSlice({
  name: "contactSlice",
  initialState: {
    isLoading: true,
    data: [],
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendContactData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(sendContactData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
      })
      .addCase(sendContactData.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default contactSlice.reducer;
export { sendContactData };
