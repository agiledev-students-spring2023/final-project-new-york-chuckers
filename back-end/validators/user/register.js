const Validator = require("validator");
const isEmpty = require("is-empty");

const validateRegisterInput = (data) => {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.confirmPassword = !isEmpty(data.confirmPassword)
    ? data.confirmPassword
    : "";

  if (Validator.isEmpty(data.email)) {
    errors.email = " Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email field is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (Validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = "Confirm password field is required";
  }

  if (!Validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateRegisterInput;
