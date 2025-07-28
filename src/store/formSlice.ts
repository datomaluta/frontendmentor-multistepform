// src/store/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
  formData: {
    name: "",
    email: "",
    phoneNumber: "",
  },
};

const formSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      if (state.currentStep === 1) return;
      state.currentStep -= 1;
    },
  },
});

export const { nextStep, prevStep } = formSlice.actions;
export default formSlice.reducer;
