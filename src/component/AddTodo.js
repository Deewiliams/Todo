import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import {
  createTodoInitialvalues,
  createTodoSchema,
} from "../utils/schema/createTodo";
import * as mutations from "../graphql/mutations";
import { API } from "aws-amplify";

export default function AddTodo() {
  const formik = useFormik({
    initialValues: createTodoInitialvalues,
    validationSchema: createTodoSchema,
    onSubmit: async (values) => {
      try {
        const newTodo = await API.graphql({
          query: mutations.createTodo,
          variables: {
            input: {
              title: values.title,
              description: values.description,
            },
          },
        });
        console.log("newTodo",newTodo);

      } catch (error) {
        console.log("error", error);
      }
    },
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Title"
            variant="outlined"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="outlined-basic"
            multiline
            minRows={5}
            label="Description"
            variant="outlined"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
        </Grid>
      </Grid>
      <br />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button>Cancel</Button>
        <Button
          onClick={formik.handleSubmit}
          style={{ backgroundColor: "black", color: "white" }}
        >
          Save
        </Button>
      </div>
    </Box>
  );
}
