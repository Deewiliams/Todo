import * as React from "react";
import Card from "../component/Card";
import { Container } from "@mui/material";
import * as queries from "../graphql/queries";
import { API } from "aws-amplify";
import Search from "../component/Search";

export default function ListTodo({ formik, handleClickOpen, setSelectedTodo }) {
  const id = JSON.parse(localStorage.getItem("userID"));
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

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
    <Container>
      <Search />
      <Card
        todos={todos}
        loading={loading}
        formik={formik}
        handleClickOpen={handleClickOpen}
        setSelectedTodo={setSelectedTodo}
      />
    </Container>
  );
}
