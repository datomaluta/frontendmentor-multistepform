const validateTextInput = (value: string) => {
  if (!value) return false;
  return true;
};

const validateEmailInput = (value: string) => {
  // validate if email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) return false;
  return true;
};

const validatePhoneInput = (value: string) => {
  // validate if phone is valid
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(value)) return false;
  return true;
};

export { validateTextInput, validateEmailInput, validatePhoneInput };