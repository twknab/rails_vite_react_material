import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Alert, AlertTitle } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Item from "@mui/material/Grid";
import Link from "@mui/material/Link";
import LoginIcon from "@mui/icons-material/Login";
import LoginImage from "../../../assets/images/login.svg";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import "./Login.scss";
const Login = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const [emailError, setEmailError] = React.useState();
  const [passwordError, setPasswordError] = React.useState();
  const [postError, setPostError] = React.useState();

  const navigate = useNavigate();

  const handleLoginSubmit = () => {
    setIsSubmitting(true);
    clearPreviousErrors();

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    axios({
      method: "post",
      url: "/user/login",
      data: {
        email,
        password,
        authenticity_token: document
          .querySelector("meta[name='csrf-token']")
          .getAttribute("content"),
      },
    })
      .then((response) => {
        const res = response.data;
        setIsSubmitting(false);
        if (!res.success && res.error) {
          setPostError(res.error);
          return;
        }
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        setIsSubmitting(false);
      });
  };

  // FIXME: This logic should be improved
  const validateForm = () => {
    let isValid = true;
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    }
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    }
    return isValid;
  };

  const clearPreviousErrors = () => {
    setEmailError();
    setPasswordError();
    setPostError();
  };

  return (
    <Container maxWidth="lg" className="Login">
      <h1>
        <AutoAwesomeIcon className="Login__stars" /> SuperCool
      </h1>
      <Grid container spacing={4}>
        <Grid item lg={6} xs={12}>
          <Item>
            <img
              src={LoginImage}
              alt="Login"
              className="Login__welcome-image"
            />
          </Item>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Item sx={{ pt: 3 }}>
            <h2>
              Welcome! <AutoAwesomeIcon className="Login__stars" />
            </h2>
            <p>Login below or sign up if this is your first time.</p>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Item>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    placeholder="Email"
                    variant="outlined"
                    type="email"
                    onChange={(e) => setEmail(e.target.value.trim())}
                    error={emailError !== undefined}
                    helperText={emailError}
                    required
                    fullWidth
                  />
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    placeholder="Password"
                    variant="outlined"
                    type="password"
                    onChange={(e) => setPassword(e.target.value.trim())}
                    error={passwordError !== undefined}
                    helperText={passwordError}
                    required
                    fullWidth
                  />
                  {postError && (
                    <Alert severity="error" sx={{ mb: 2, mt: 2 }}>
                      <AlertTitle>Sorry, something went wrong</AlertTitle>
                      {postError}
                    </Alert>
                  )}
                  <Stack
                    direction="row"
                    spacing={2}
                    className="Login__button-group"
                  >
                    <Button
                      variant="contained"
                      size="large"
                      endIcon={<LoginIcon />}
                      onClick={handleLoginSubmit}
                      disabled={isSubmitting}
                    >
                      Login
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      endIcon={<HowToRegIcon />}
                      color="secondary"
                      component={Link}
                      onClick={() => navigate("/register")}
                    >
                      Sign Up
                    </Button>
                  </Stack>
                </Item>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
