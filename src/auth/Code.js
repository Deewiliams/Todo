import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, TextField, Typography } from "@mui/material";
import { Auth } from "aws-amplify";

export default function Code() {
  const [code, setCode] = React.useState("");
  const username = JSON.parse(localStorage.getItem("verifyCodeEmail"));

  console.log("====================================");
  console.log("local", username);
  console.log("====================================");
  async function confirmSignUp() {
    try {
      const verify = await Auth.confirmSignUp(username, code);
      console.log("====================================");
      console.log("verifird", verify);
      console.log("====================================");
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }
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
        <Grid
          container
          spacing={2}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={6}>
            <TextField
              type="number"
              fullWidth
              id="outlined-basic"
              label="Code"
              variant="outlined"
              placeholder="Enter your verification code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </Grid>
        </Grid>
      </Box>
      <br />
      <Grid item xs={6} style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={confirmSignUp}
          style={{ textTransform: "none" }}
          variant="contained"
        >
          Verify code
        </Button>
      </Grid>
    </>
  );
}
