// src/store/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

type formErrorsType = {
  [key: string]: string;
};

type FormDataType = {
  name: string;
  email: string;
  phoneNumber: string;
};

const initialState: {
  currentStep: number;
  formData: FormDataType;
  fomErrors: formErrorsType | null;
} = {
  currentStep: 1,
  formData: {
    name: "",
    email: "",
    phoneNumber: "",
  },
  fomErrors: null,
};

type FormDataKey = keyof typeof initialState.formData;

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
    setFormData: (
      state,
      action: { payload: { key: FormDataKey; value: string } }
    ) => {
      state.formData[action.payload.key] = action.payload.value;
    },

    setFormErrors: (
      state,
      action: { payload: { key: string; value: string } | null }
    ) => {
      if (action.payload === null) {
        state.fomErrors = {};
        return;
      }
      state.fomErrors[action.payload.key] = action.payload.value;
    },
  },
});

export const { nextStep, prevStep, setFormData, setFormErrors } =
  formSlice.actions;
export default formSlice.reducer;
