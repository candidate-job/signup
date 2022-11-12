import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormGroup } from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      previousTitle: data.get("prevTitle"),
      previousCompany: data.get("prevCompany"),
      currentLocation: data.get("currentLocation"),
      currentTitle: data.get("currentTitle"),
      linkedIn: data.get("linkedIn"),
      github: data.get("github"),
      idealNextRole: data.get("idealNextRole"),
      yeasOfExperience: data.get("yearsOfExperience"),
      otherNotes: data.get("otherNotes"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <HowToRegIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Employee Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="prevTitle"
                  label="Previous Title"
                  name="prevTitle"
                  autoComplete="prev-title"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="prevCompany"
                  label="Previous Company"
                  name="previous company"
                  autoComplete="prev-Company"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="currentLocation"
                  label="Current Location"
                  name="current location"
                  autoComplete="current-location"
                />
              </Grid>

              <Grid container paddingLeft="16px">
                <Grid item xs={12} textAlign="left">
                  <Typography component="h6" variant="h6">
                    Work preferences
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Remote" />
                  </FormGroup>
                </Grid>
                <Grid item xs={4}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Hybrid" />
                  </FormGroup>
                </Grid>
                <Grid item xs={4}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="In-person"
                    />
                  </FormGroup>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="linkedIn"
                  label="LinkedIn"
                  name="linkedIn"
                  autoComplete="linkedIn"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="github"
                  label="Github"
                  name="github"
                  autoComplete="github"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  maxRows={6}
                  id="idealNextRole"
                  label="Ideal Next Role(s)"
                  name="idealNextRole"
                  autoComplete="idealNextRole"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="yearsOfExperience"
                  label="Years of Experience"
                  name="yearsOfExperience"
                  autoComplete="yearsOfExperience"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  maxRows={6}
                  id="otherNotes"
                  label="Other Notes"
                  name="otherNotes"
                  autoComplete="otherNotes"
                />
              </Grid>
              <Grid container justifyContent="flex-start" paddingLeft="16px">
                <FormControlLabel
                  control={<Checkbox value="needVisa" color="primary" />}
                  label="Need Visa Sponsorship"
                />
              </Grid>
              <Grid container justifyContent="flex-start" paddingLeft="16px">
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want recruiters to contact me."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
