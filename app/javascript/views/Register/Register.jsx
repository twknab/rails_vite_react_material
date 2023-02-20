import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import "./Register.scss";

const Register = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const [email, setEmail] = React.useState();
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [password, setPassword] = React.useState();
  const [passwordConfirm, setPasswordConfirm] = React.useState();

  const [emailError, setEmailError] = React.useState();
  const [firstNameError, setFirstNameError] = React.useState();  
  const [lastNameError, setLastNameError] = React.useState();  
  const [passwordError, setPasswordError] = React.useState();  
  const [passwordConfirmError, setPasswordConfirmError] = React.useState();  

  const handleRegisterSubmit = () => {
    setIsSubmitting(true);
    clearPreviousErrors();

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    // TODO: Replace with /api/v1/user/register
    setTimeout(() => {
      setIsSubmitting(false);
    }, 3000);
  }

  const validateForm = () => {
    if (!email) setEmailError("Email is required");
    if (!firstName || firstName.length < 2) {
      setFirstNameError(
        "First name is required and must be greater than 2 characters"
      );
    }
    if (!lastName || lastName.length < 2) {
      setLastNameError(
        "Last name is required and must be greater than 2 characters"
      );
    }
    if (!password || password.length < 8) {
      setPasswordError(
        "Password is required and must be at least 8 characters"
      );
    }
    if (!passwordConfirm || password !== passwordConfirm)
      setPasswordConfirmError("Password confirmation does not match password");
    return email && firstName && lastName && password && passwordConfirm
      ? true
      : false;
  };

  const clearPreviousErrors = () => {
    setEmailError();
    setFirstNameError();
    setLastNameError();
    setPasswordError();
    setPasswordConfirmError();
  };

  return (
    <Container maxWidth="md" className="Register">
      <h1>😎 Cool Application</h1>
      <p>
        Please register a new acccount below and you'll be redirected to the
        dashboard. 🏃
      </p>
      <Grid container spacing={4}>
        <Grid item lg={12} xs={12}>
          <Item>
            <h2>Register</h2>
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
                    label="First Name"
                    placeholder="First Name"
                    variant="outlined"
                    onChange={(e) => setFirstName(e.target.value.trim())}
                    error={firstNameError !== undefined}
                    helperText={firstNameError}
                    required
                    fullWidth
                  />
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    placeholder="Last Name"
                    variant="outlined"
                    onChange={(e) => setLastName(e.target.value.trim())}
                    error={lastNameError !== undefined}
                    helperText={lastNameError}
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
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <TextField
                    id="outlined-basic"
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    variant="outlined"
                    onChange={(e) => setPasswordConfirm(e.target.value.trim())}
                    error={passwordConfirmError !== undefined}
                    helperText={passwordConfirmError}
                    required
                    fullWidth
                  />
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Stack
                    direction="row"
                    spacing={2}
                    className="Register__button-group"
                  >
                    <Button
                      variant="contained"
                      size="large"
                      endIcon={<HowToRegIcon />}
                      onClick={handleRegisterSubmit}
                      disabled={isSubmitting}
                    >
                      Register
                    </Button>
                    <Link to="/" className="Login__register">
                      Back
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

export default Register;
