import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Alert,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Auth } from "aws-amplify";
import {
  verifyCodeSchema,
  verifyCodeValues,
} from "../utils/schema/verificationCode";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export default function Code() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const username = JSON.parse(localStorage.getItem("verifyCodeEmail"));

  const formik = useFormik({
    initialValues: verifyCodeValues,
    validationSchema: verifyCodeSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        await Auth.confirmSignUp(username, values.verificationCode);
        navigate("/login");
        setIsLoading(false);
      } catch (error) {
        setErrorMessage(error.message);
        setIsLoading(false);
      }
    },
  });

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
            {errorMessage ? (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity="error">
                  {" "}
                  <span style={{ color: "red" }}>{errorMessage}</span>
                </Alert>
              </Stack>
            ) : null}
            <br />
            <TextField
              type="text"
              fullWidth
              name="verificationCode"
              id="outlined-basic"
              variant="outlined"
              value={formik.values.verificationCode}
              onChange={formik.handleChange}
              error={
                formik.touched.verificationCode &&
                Boolean(formik.errors.verificationCode)
              }
              helperText={
                formik.touched.verificationCode &&
                formik.errors.verificationCode
              }
            />
          </Grid>
        </Grid>
      </Box>
      <br />
      <Grid item xs={6} style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => {
            formik.handleSubmit();
          }}
          style={{ textTransform: "none" }}
          variant="contained"
        >
          {isLoading && isLoading ? (
            <CircularProgress size={24} style={{ color: "white" }} />
          ) : (
            " Verify code"
          )}
        </Button>
      </Grid>
    </>
  );
}
