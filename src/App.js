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
      <Grid container style={{ marginTop: "10em" }}>
        <Grid item xs={12}>
          <Typography variant="h4">
            Layoff is difficult. We can help!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" fontStyle={"italic"}>
            candidate: we will share with all recruiters
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" fontStyle={"italic"}>
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
              sx={{ p: 5, border: "1px dashed grey", maxWidth: "2em" }}
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
              sx={{ p: 5, border: "1px dashed grey", maxWidth: "2em" }}
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
