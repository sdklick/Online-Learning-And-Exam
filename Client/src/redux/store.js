import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./slices/contactSlice";

const store = configureStore({
  reducer: {
    contactSlice,
  },
});

export default store;
