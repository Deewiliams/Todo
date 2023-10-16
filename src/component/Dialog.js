import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import AddTodo from "./AddTodo";
import ListTodo from "../pages/ListDo";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Alert, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import {
  createTodoInitialvalues,
  createTodoSchema,
} from "../utils/schema/createTodo";
import * as mutations from "../graphql/mutations";
import { API } from "aws-amplify";
import LoadingButton from "./LoadingButton";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogModel() {
  const id = JSON.parse(localStorage.getItem("userID"));
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "30px",
        }}
      >
        <Button
          style={{
            textTransform: "none",
            backgroundColor: "black",
            color: "white",
          }}
          variant="outlined"
          onClick={handleClickOpen}
        >
          Add todo list
        </Button>
        <Dialog
          fullWidth
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <br />
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  {errorMessage ? (
                    <Alert severity="error"> {errorMessage}</Alert>
                  ) : null}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Title"
                      variant="outlined"
                      name="title"
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.title && Boolean(formik.errors.title)
                      }
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
                        formik.touched.description &&
                        Boolean(formik.errors.description)
                      }
                      helperText={
                        formik.touched.description && formik.errors.description
                      }
                    />
                  </Grid>
                </Grid>
                {/* <br />
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                  </DialogActions>
                  <Button
                    onClick={formik.handleSubmit}
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    {isLoading && isLoading ? <LoadingButton /> : "Save"}
                  </Button>
                </div> */}
              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button
              onClick={formik.handleSubmit}
              style={{ backgroundColor: "black", color: "white" }}
            >
              {isLoading && isLoading ? <LoadingButton /> : "Save"}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <ListTodo   />
    </>
  );
}
