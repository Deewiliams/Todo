import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Alert, Button, DialogActions, TextField } from "@mui/material";
import { useFormik } from "formik";
import {
  createTodoInitialvalues,
  createTodoSchema,
} from "../utils/schema/createTodo";
import * as mutations from "../graphql/mutations";
import { API } from "aws-amplify";
import LoadingButton from "./LoadingButton";

export default function AddTodo() {
  const id = JSON.parse(localStorage.getItem("userID"));
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(true);
  };
  const formik = useFormik({
    initialValues: createTodoInitialvalues,
    validationSchema: createTodoSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        await API.graphql({
          query: mutations.createAddTodoList,
          variables: {
            input: {
              todoID: id,
              title: values.title,
              description: values.description,
            },
          },
        });
        setIsLoading(false);
      } catch (error) {
        setErrorMessage(error.message);
      }
    },
  });


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {errorMessage ? <Alert severity="error"> {errorMessage}</Alert> : null}
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
      <DialogActions>
        <Button onClick={handleClose} >Cancel</Button>
      </DialogActions>
        <Button
          onClick={formik.handleSubmit}
          style={{ backgroundColor: "black", color: "white" }}
        >
          {isLoading && isLoading ? <LoadingButton /> : "Save"}
        </Button>
      </div>
    </Box>
  );
}
