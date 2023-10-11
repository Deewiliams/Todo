import * as yup from "yup";

export const verifyCodeSchema = yup.object({
  verificationCode: yup
    .string("Enter your email verification code")
    .required("verification code is required"),
});

export const verifyCodeValues = {
  verificationCode: "",
};