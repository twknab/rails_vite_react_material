import React /*, { useEffect }*/ from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// import { Alert, AlertTitle } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
// import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Link from "@mui/material/Link";
import RegisterImage from "../../../assets/images/register.svg";
// import Stack from "@mui/material/Stack";
// import TextField from "@mui/material/TextField";

import "./Dashboard.scss";

const Dashboard = () => {
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
