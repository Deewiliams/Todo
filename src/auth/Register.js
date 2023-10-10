import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container, TextField, Typography } from "@mui/material";
import { Auth } from "aws-amplify";
import register from "../images/register.svg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Register() {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function signUp() {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
      });
      console.log(user);
    } catch (error) {
      console.log("error signing up:", error);
    }
  }
  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: "150px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={register} alt="register " />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography style={{fontSize: "50px", textAlign: "center"}}>
                Welcome to Todo 
            </Typography>
            <Typography style={{fontSize: "50px", textAlign: "center"}}>
            Application
            </Typography>
            <Box sx={{ flexGrow: 1, marginTop: "50px" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    placeholder="todo@gamil.com"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Button onClick={signUp} fullWidth variant="contained" style={{textTransform: 'none'}}>
                    Sign up
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
