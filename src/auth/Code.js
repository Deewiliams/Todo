import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, TextField, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Code() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "250px",
          fontSize: "32px",
        }}
      >
        <Typography style={{ fontSize: "32px" }}>
          Enter the verification code sent
        </Typography>
      </div>
      <Typography
        style={{ fontSize: "32px", display: "flex", justifyContent: "center" }}
      >
        to your email.
      </Typography>
      <Box
        style={{
          flexGrow: 1,
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="number"
              fullWidth
              id="outlined-basic"
              label="Code"
              variant="outlined"
              placeholder="Enter your verification code"
            />
          </Grid>
        </Grid>
      </Box>
      <br />
      <Grid item xs={6} style={{ display: "flex", justifyContent: "center" }}>
        <Button
          style={{ width: "400px", textTransform: "none" }}
          variant="contained"
        >
          Verify code
        </Button>
      </Grid>
    </>
  );
}
