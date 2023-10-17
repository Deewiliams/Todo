import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
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
import * as queries from "../graphql/queries";
import { API } from "aws-amplify";
import LoadingButton from "./LoadingButton";
import Search from "./Search";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddTodo() {
  const id = JSON.parse(localStorage.getItem("userID"));
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [selectedTodo, setSelectedTodo] = React.useState();
  const [todos, setTodos] = React.useState([]);
  const [query, setQuery] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = function () {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const formik = useFormik({
    initialValues: createTodoInitialvalues,
    validationSchema: createTodoSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsLoading(true);
        if (selectedTodo) {
          await API.graphql({
            query: mutations.updateAddTodoList,
            variables: {
              input: {
                id: selectedTodo,
                title: values.title,
                description: values.description,
              },
            },
          });
          fetchAllTodos();
          handleClose();
        } else {
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
        }
        setIsLoading(false);
        resetForm();
        fetchAllTodos();
        handleClose();
      } catch (error) {
        setErrorMessage(error.message);
      }
    },
  });

  const fetchAllTodos = async () => {
    try {
      setLoading(true);
      const listTodos = await API.graphql({
        query: queries.listAddTodoLists,
        variables: { id: id },
      });
      setTodos(listTodos?.data?.listAddTodoLists?.items);
      setLoading(false);
    } catch (error) {
      console.log("errror", error);
    }
  };

  React.useEffect(() => {
    fetchAllTodos();
  }, [id]);
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
          <DialogTitle>{"Add your todo list here"}</DialogTitle>
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
              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={formik.handleSubmit}
              style={{ backgroundColor: "black", color: "white" }}
            >
              {isLoading && isLoading ? <LoadingButton /> : "Save"}
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <ListTodo
        todos={todos}
        loading={loading}
        formik={formik}
        handleClickOpen={handleClickOpen}
        setSelectedTodo={setSelectedTodo}
        fetchAllTodos={fetchAllTodos}
        query={query}
        setQuery={setQuery}
      />
    </>
  );
}
