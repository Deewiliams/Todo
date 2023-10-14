import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "../component/Card";
import { Container } from "@mui/material";
import * as queries from "../graphql/queries";
import { API } from "aws-amplify";
import Search from "../component/Search";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ListTodo() {
  const id = JSON.parse(localStorage.getItem("userID"));
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(false)
  const fetchAllTodos = async () => {
    try {
        setLoading(true)
      const listTodos = await API.graphql({
        query: queries.listAddTodoLists,
        variables: { id: id },
      });
      setTodos(listTodos?.data?.listAddTodoLists?.items);
      setLoading(false)
      console.log("list", todos);
    } catch (error) {
      console.log("errror", error);
    }
  };

  React.useEffect(() => {
    fetchAllTodos();
  }, [id]);
  return (
    <Container>
      <Search />
      <Card todos={todos} loading={loading} />
    </Container>
  );
}
