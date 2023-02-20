import React from 'react';
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Item from "@mui/material/Grid";
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

  const handleLoginSubmit = () => {
    setIsSubmitting(true);
    clearPreviousErrors();

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    // TODO: Submit POST request to /api/v1/users/login
    setTimeout(() => {
      setIsSubmitting(false);
    }, 3000);
  };

  const validateForm = () => {
    if (!email) setEmailError("Email is required");
    if (!password) setPasswordError("Password is required");
    return email && password ? true : false;
  };

  const clearPreviousErrors = () => {
    setEmailError();
    setPasswordError();
  }

  return (
    <Container maxWidth="md" className="Login">
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
          <Item>
            <h2>
              Welcome! <AutoAwesomeIcon className="Login__stars" />
            </h2>
            {/* <h2>Thanks for visting!</h2> */}
            <p>Login to begin, or sign up if this is your first time.</p>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Item>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    placeholder="Email"
                    variant="outlined"
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
                    onChange={(e) => setPassword(e.target.value.trim())}
                    error={passwordError !== undefined}
                    helperText={passwordError}
                    required
                    fullWidth
                  />
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
                      href="/register"
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
