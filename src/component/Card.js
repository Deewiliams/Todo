import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import { Box, Grid } from "@mui/material";
import * as mutations from "../graphql/mutations";
import Loading from "./Loading";
import { API } from "aws-amplify";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CardList({
  todos,
  loading,
  formik,
  handleClickOpen,
  setSelectedTodo,
  fetchAllTodos,
  query
}) {

  const [isDeleting, setIsDeleting] = React.useState(false)

  const handleEdit = (todo) => {
    setSelectedTodo(todo?.id);
    formik.setFieldValue("title", todo.title);
    formik.setFieldValue("description", todo.description);
  };

  const handleDelete = async (todo) => {
    setIsDeleting(true)
    await API.graphql({
      query: mutations.deleteAddTodoList,
      variables: {
        input: {
          id: todo?.id,
        },
      },
    });
    setIsDeleting(false)
    fetchAllTodos()
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <Box sx={{ flexGrow: 1, marginTop: "50px" }}>
      <Grid container spacing={2}>
      {todos &&
        todos.filter((todo) => {
          if (query === "") {
            return todo;
          } else if (todo.title.toLowerCase().includes(query.toLowerCase())) {
            return todo;
          }
        }).map((todo) => (
          <>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8&auto=format&fit=crop&w=1080&q=80"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {todo?.title?.substring(0,16)} ...
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {todo?.description}
                  </Typography>
                </CardContent>
                <CardActions
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    size="small"
                    style={{ backgroundColor: "black", color: "white",textTransform: "none" }}
                    onClick={() => {
                      handleClickOpen();
                      handleEdit(todo);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    style={{ backgroundColor: "red", color: "white",textTransform: "none" }}
                    onClick={() => {
                      handleDelete(todo);
                    }}
                  >
                    {isDeleting && isDeleting ? "Deleting..." :  "Delete" }
                   
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </>
        ))}
       
      </Grid>
    </Box>
  );
}
