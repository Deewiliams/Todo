import * as React from "react";
import Card from "../component/Card";
import { Container } from "@mui/material";
import Search from "../component/Search";

export default function ListTodo({
  formik,
  handleClickOpen,
  setSelectedTodo,
  loading,
  fetchAllTodos,
  todos,
}) {
  return (
    <Container>
      <Search />
      <Card
        todos={todos}
        loading={loading}
        formik={formik}
        handleClickOpen={handleClickOpen}
        setSelectedTodo={setSelectedTodo}
        fetchAllTodos={fetchAllTodos}
      />
    </Container>
  );
}
