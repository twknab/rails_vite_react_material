import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Alert, AlertTitle } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Link from "@mui/material/Link";
import RegisterImage from "../../../assets/images/register.svg";
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
  const [postError, setPostError] = React.useState();

  const navigate = useNavigate();

  const handleRegisterSubmit = () => {
    setIsSubmitting(true);
    clearPreviousErrors();

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    axios({
      method: "post",
      url: "/user/register",
      data: {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        password_confirmation: passwordConfirm,
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

  // FIXME: This logic should be improved, this is a hacky way to do this,
  // consider using useEffect in some way to pickup the changes to `emailError`,
  // `firstNameError`, `lastNameError`, etc and block submission if any are present.
  // This was a work around to keep moving as I was trying to check the value of the state constant,
  // and the value is not updated until the next render.
  // See: https://beta.reactjs.org/reference/react/useState#ive-updated-the-state-but-logging-gives-me-the-old-value
  const validateForm = () => {
    let isValid = true;
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    }
    if (!firstName || firstName.length < 2) {
      setFirstNameError(
        "First name is required and must be greater than 2 characters"
      );
      isValid = false;
    }
    if (!lastName || lastName.length < 2) {
      setLastNameError(
        "Last name is required and must be greater than 2 characters"
      );
      isValid = false;
    }
    if (!password || password.length < 8) {
      setPasswordError(
        "Password is required and must be at least 8 characters"
      );
      isValid = false;
    }
    if (!passwordConfirm || password !== passwordConfirm) {
      setPasswordConfirmError("Password confirmation must match password");
      isValid = false;
    }

    return isValid;
  };

  const clearPreviousErrors = () => {
    setEmailError();
    setFirstNameError();
    setLastNameError();
    setPasswordError();
    setPasswordConfirmError();
    setPostError();
  };

  return (
    <Container maxWidth="lg" className="Register">
      <h1>
        <AutoAwesomeIcon className="Login__stars" /> SuperCool
      </h1>
      <Grid container spacing={4}>
        <Grid item lg={6} xs={12}>
          <Item sx={{ pt: 8 }}>
            <img
              src={RegisterImage}
              alt="Register"
              className="Register__welcome-image"
            />
          </Item>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Item>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Item>
                  <h2>
                    Sign Up <AutoAwesomeIcon className="Login__stars" />
                  </h2>
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
                    type="password"
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
                    type="password"
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
                  {postError && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                      <AlertTitle>Sorry, something went wrong</AlertTitle>
                      {postError}
                    </Alert>
                  )}
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
                      Create Account
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<ArrowBackIosNewIcon />}
                      color="secondary"
                      component={Link}
                      onClick={() => navigate("/")}
                    >
                      Back
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

export default Register;
