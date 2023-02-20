import React from 'react';
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import LoginIcon from "@mui/icons-material/Login";
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
      <h1>😎 Cool Application</h1>
      <Grid container spacing={4}>
        <Grid item lg={6} xs={12}>
          <Item>
            <h2>Welcome</h2>
            <p>
              👋 Thanks for visiting. Login to begin, or register if this is
              your first time.
            </p>
          </Item>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Item>
            <h2>Login</h2>
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
                    <Link to="/register" className="Login__register">
                      Register
                    </Link>
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
