import * as yup from "yup";
/* eslint-disable no-useless-escape */

export const registerSchema = yup.object({
  username: yup
    .string("Enter email")
    .email("Invalid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Must Contain 8 Characters")
    .required("Password is required")
    .matches(/^(?=.*[a-z])/, " Must Contain One Lowercase Character")
    .matches(/^(?=.*[A-Z])/, "  Must Contain One Uppercase Character")
    .matches(/^(?=.*[0-9])/, "  Must Contain One Number Character")
    .matches(
      /^(?=.*[!@#\$%\^&\*])/,
      "  Must Contain  One Special Case Character"
    ),
});

export const registerInitialvalues = {
  username: "",
  password: "",
};