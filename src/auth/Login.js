import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Auth } from "aws-amplify";
import login from "../images/signin.svg";
import { useFormik } from "formik";
import { loginInitialvalues, loginSchema } from "../utils/schema/login";
import { Link, useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const formik = useFormik({
    initialValues: loginInitialvalues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const user = await Auth.signIn({
          username: values.username,
          password: values.password,
        });
        console.log("login user", user);
        navigate("/main");
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setErrorMessage(error.message);
      }
    },
  });

  return (
    <Container>
      <Box sx={{ flexGrow: 1, marginTop: "150px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img width="500px" src={login} alt="register " />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography style={{ fontSize: "50px", textAlign: "center" }}>
              sign in to Todo
            </Typography>
            <Typography style={{ fontSize: "50px", textAlign: "center" }}>
              Application
            </Typography>
            <Box sx={{ flexGrow: 1, marginTop: "50px" }}>
            {errorMessage ? (
                <Alert severity="error"> {errorMessage}</Alert>
              ) : null}
              <Grid container spacing={2}>
              
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <label>Email</label>
                  <TextField
                    fullWidth
                    id="email"
                    type="email"
                    name="username"
                    placeholder="hello@gmail.com"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.username && Boolean(formik.errors.username)
                    }
                    helperText={
                      formik.touched.username && formik.errors.username
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <label>Password</label>
                  <TextField
                    fullWidth
                    id="outlined-code-input"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete="current-code"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Button
                    onClick={() => {
                      formik.handleSubmit();
                    }}
                    fullWidth
                    variant="contained"
                    style={{ textTransform: "none" }}
                  >
                    {isLoading && isLoading ? (
                      <CircularProgress size={24} style={{ color: "white" }} />
                    ) : (
                      " Sign in"
                    )}
                  </Button>
                </Grid>
              </Grid>
              <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Forgotten password</Typography>
                <Typography>
                  Don't have an account?{" "}
                  <span style={{ color: "blue" }}>
                    <Link to="/register">Register</Link>
                  </span>
                </Typography>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
