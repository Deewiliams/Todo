import * as yup from "yup";

export const createTodoSchema = yup.object({
  title: yup.string("Enter email").required("Title is required"),
  description: yup
    .string("Enter your description")
    .required("Description is required"),
});

export const createTodoInitialvalues = {
  title: "",
  description: "",
};
