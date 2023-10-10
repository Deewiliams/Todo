import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, TextField } from "@mui/material";
import { API } from "aws-amplify";
import * as mutations from "../graphql/mutations";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CreateTodo() {
  const todoDetails = {
    title: "Todo 1",
    description: "Learn AWS AppSync",
  };

  const createTodoFunction = async () => {
    try {
        const newTodo = await API.graphql({
            query: mutations.createTodo,
            variables: { input: todoDetails },
          });
      
          console.log("====================================");
          console.log("adding todo lis", newTodo);
          console.log("====================================");
    } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }
    
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: "50px" }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <Button onClick={createTodoFunction}  fullWidth variant="contained">
            Add todo
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
