import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Admin from "./Admin";
import "./App.css";
import SignUp from "./SignUp";
import layoffsLogo from "./layoffs.png";

function App() {
  const [isRecruiter, setIsRecruiter] = useState(false);
  const [isCandidate, setIsCandidate] = useState(false);

  const handleClose = () => {
    setIsRecruiter(false);
    setIsCandidate(false);
  };

  const DialogContentTxt = isCandidate
    ? "To get in touch with recruiters, please enter your email address here. We will send updates occasionally."
    : " To subscribe to the candidates list, please enter your email address here. We will send updates occasionally.";
  return (
    <div className="App">
      <img
        src={layoffsLogo}
        alt="Layoffs"
        style={{
          position: "absolute",
          width: "50em",
          height: "19em",
          marginTop: "-22em",
          marginLeft: "-22em",
        }}
      ></img>
      <Grid container style={{ marginTop: "22em" }}>
        <Grid item xs={12}>
          <Typography variant="h4" fontFamily="Roboto">
            Layoff is difficult. We can help!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" fontStyle={"italic"} fontFamily="Roboto">
            candidate: we will share with all recruiters
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" fontStyle={"italic"} fontFamily="Roboto">
            recruiter: sign up to view & receive awesome candidates
          </Typography>
        </Grid>
        <Grid
          container
          style={{ marginTop: "4em" }}
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={2}>
            <Box
              component="span"
              sx={{
                p: 5,
                border: "1px dashed grey",
                maxWidth: "2em",
                backgroundColor: "lightgrey",
              }}
            >
              <Button
                style={{ fontStyle: "italic" }}
                onClick={() => setIsRecruiter(true)}
              >
                recruiter
              </Button>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box
              component="span"
              sx={{
                p: 5,
                border: "1px dashed grey",
                maxWidth: "2em",
                backgroundColor: "lightgrey",
              }}
            >
              <Button
                style={{ fontStyle: "italic" }}
                onClick={() => setIsCandidate(true)}
              >
                candidate
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Dialog open={isCandidate || isRecruiter} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>{DialogContentTxt}</DialogContentText>
          {isCandidate ? <SignUp /> : <Admin />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
