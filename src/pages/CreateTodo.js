import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, TextField } from "@mui/material";
import { API } from "aws-amplify";
import * as mutations from '../graphql/mutations';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CreateTodo() {
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
          <Button fullWidth variant="contained">
            Add todo
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
