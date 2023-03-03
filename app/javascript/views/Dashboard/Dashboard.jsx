import React, { useEffect } from "react";
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

import "./Dashboard.scss";

const Dashboard = () => {
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

    console.log("POSTING");
    axios({
      method: "post",
      url: "/api/v1/user",
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
        if (res.success !== 200 && res.error) {
          setPostError(res.error);
          return;
        }
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        setIsSubmitting(false);
      });
  };

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
            <h2>This will be dashboard</h2>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
