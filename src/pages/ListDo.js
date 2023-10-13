import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "../component/Card";
import { Container } from "@mui/material";
import * as queries from "../graphql/queries";
import { API } from "aws-amplify";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ListTodo() {
  const id = JSON.parse(localStorage.getItem("userID"));
  const [todos, setTodos] = React.useState([])
  const fetchAllTodos = async () => {
    try {
      const listTodos = await API.graphql({
        query: queries.listAddTodoLists,
        variables: { id: id },
      });
      setTodos(listTodos?.data?.listAddTodoLists?.items)
      console.log("list",todos);
    } catch (error) {
      console.log("errror", error);
    }
  };

  React.useEffect(() => {
    fetchAllTodos();
  }, [id]);
  return (
    <Container>
         <Card todos={todos} />
      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={3}>
           
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Card />
          </Grid>
        </Grid>
      </Box> */}
    </Container>
  );
}
