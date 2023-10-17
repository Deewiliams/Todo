import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Search({ query, setQuery }) {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="outlined-basic"
            variant="outlined"
            placeholder="Search your todo list by title"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
