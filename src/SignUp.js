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
// import S3 from "aws-sdk/clients/s3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import supabase from "./supabaseClient";

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
  const [checkedItems, setCheckedItems] = React.useState({});

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  // create JSON file in s3 bucket by uploading JSON object

  // const S3_BUCKET = process.env.REACT_APP_BUCKET_NAME;
  // const REGION = process.env.REACT_APP_REGION_NAME;
  // const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
  // const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_KEY;

  // const s3 = new S3({
  //   accessKeyId: ACCESS_KEY,
  //   secretAccessKey: SECRET_ACCESS_KEY,
  //   region: REGION,
  //   signatureVersion: "v4",
  // });

  // const handleUpload = async (userProfileObj) => {
  //   try {
  //     toast("Saving your profile...");
  //     const res = s3.putObject(
  //       {
  //         Bucket: S3_BUCKET,
  //         Key: `${userProfileObj.firstName}-${userProfileObj.lastName}.json`,
  //         Body: JSON.stringify(userProfileObj),
  //         ContentType: "application/octet-stream",
  //       },
  //       function (err, data) {
  //         console.log(JSON.stringify(err) + " " + JSON.stringify(data));
  //       }
  //     );
  //     console.log(res);
  //   } catch (e) {
  //     toast.error("Upload Failed");
  //     console.log(e);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const fileName = email.split("@")[0];
    // const userProfileObj = {
    //   firstName: data.get("firstName"),
    //   lastName: data.get("lastName"),
    //   email: email,
    //   password: data.get("password"),
    //   previousTitle: data.get("prevTitle"),
    //   previousCompany: data.get("prevCompany"),
    //   currentLocation: data.get("currentLocation"),
    //   remote: checkedItems.remote || false,
    //   hybrid: checkedItems.hybrid || false,
    //   inPerson: checkedItems.inPerson || false,
    //   linkedIn: data.get("linkedIn"),
    //   github: data.get("github"),
    //   idealNextRole: data.get("idealNextRole"),
    //   yeasOfExperience: data.get("yearsOfExperience"),
    //   otherNotes: data.get("otherNotes"),
    //   visaSponsorship: checkedItems.visaSponsorship || false,
    //   recruitersContact: checkedItems.recruitersContact || false,
    // };
    const userProfileObj = {
      first_name: data.get("firstName"),
      last_name: data.get("lastName"),
      email: email,
      previous_title: data.get("prevTitle"),
      previous_company: data.get("prevCompany"),
      current_location: data.get("currentLocation"),
      is_remote: checkedItems.remote || false,
      is_hybrid: checkedItems.hybrid || false,
      is_inperson: checkedItems.inPerson || false,
      linkedIn: data.get("linkedIn"),
      github: data.get("github"),
      ideal_next_role: data.get("idealNextRole"),
      yoe: data.get("yearsOfExperience"),
      notes: data.get("otherNotes"),
      is_sponsorship: checkedItems.visaSponsorship || false,
      is_consent: checkedItems.recruitersContact || false,
    };

    // make a post request to supabase
    try {
      toast("Saving your profile...");
      const { data, error } = await supabase
        .from("candidates")
        .insert([userProfileObj]);
      if (error) throw error;
      console.log(data);
      toast.success("Profile saved successfully!");
    } catch (error) {
      console.log(error);
    }

    // }

    // // make axios post call to send JSON data
    // try {
    //   const res = await axios.put(
    //     `https://candidate-profiles.naveenjammula.workers.dev?name=${fileName}`,
    //     JSON.stringify(userProfileObj),
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   toast("Saving your profile...");
    //   console.log(res);
    // } catch (e) {
    //   console.log("Error submitting form", e);
    // }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <ToastContainer />
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
                  name="prevCompany"
                  autoComplete="prev-Company"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="currentLocation"
                  label="Current Location"
                  name="currentLocation"
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
                    <FormControlLabel
                      control={
                        <Checkbox
                          id="remote"
                          name="remote"
                          checked={checkedItems["remote"] || false}
                          onChange={handleChange}
                        />
                      }
                      label="Remote"
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={4}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          id="hybrid"
                          name="hybrid"
                          checked={checkedItems["hybrid"] || false}
                          onChange={handleChange}
                        />
                      }
                      label="Hybrid"
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={4}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          id="inPerson"
                          name="inPerson"
                          checked={checkedItems["inPerson"] || false}
                          onChange={handleChange}
                        />
                      }
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
                  fullWidth
                  id="github"
                  label="Github"
                  name="github"
                  autoComplete="github"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
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
                  fullWidth
                  multiline
                  rows={4}
                  id="otherNotes"
                  label="Other Notes"
                  name="otherNotes"
                  autoComplete="otherNotes"
                />
              </Grid>
              <Grid container justifyContent="flex-start" paddingLeft="16px">
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      id="visaSponsorship"
                      name="visaSponsorship"
                      checked={checkedItems["visaSponsorship"] || false}
                      onChange={handleChange}
                    />
                  }
                  label="Need Visa Sponsorship"
                />
              </Grid>
              <Grid container justifyContent="flex-start" paddingLeft="16px">
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      id="recruitersContact"
                      name="recruitersContact"
                      checked={checkedItems["recruitersContact"] || false}
                      onChange={handleChange}
                    />
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
