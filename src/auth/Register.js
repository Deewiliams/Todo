import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  registerSchema,
  registerInitialvalues,
} from "../utils/schema/register";
import { useFormik } from "formik";
import {
  Alert,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Auth } from "aws-amplify";
import register from "../images/register.svg";
import { Link, useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Register() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const formik = useFormik({
    initialValues: registerInitialvalues,
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const { user } = await Auth.signUp({
          username: values.username,
          password: values.password,
        });
        localStorage.setItem("verifyCodeEmail", JSON.stringify(user.username));
        console.log(user);
        navigate("/code");
        setIsLoading(false);
      } catch (error) {
        setErrorMessage(error.message);
        setIsLoading(false);
        console.log("error", error);
      }
    },
  });

  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: "150px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={register} alt="register " />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography style={{ fontSize: "50px", textAlign: "center" }}>
              Welcome to Todo
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
                  <label>Enter email</label>
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
                      " Sign up"
                    )}
                  </Button>
                </Grid>
              </Grid>
              <br />
              <Typography style={{textAlign: "end"}}>
                Already have an account?
               <span>
                <Link to="/">
               Login
                </Link>
               </span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
