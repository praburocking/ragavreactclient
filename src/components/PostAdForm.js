import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Button, Grid } from "@material-ui/core";
import {
  createMuiTheme,
  withStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: green
  }
});

export default function PostAdForm(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} validate autoComplete="off">
      <Divider variant="middle" style={{ margin: "10px" }} />
      <div>
        <TextField
          required
          id="title"
          label="Title"
          variant="outlined"
          size="Normal"
          name="title"
          style={{ width: "100%" }}
          onChange={props.updateData}
        />
      </div>
      <div>
        <TextField
          id="description"
          name="description"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          size="normal"
          style={{ width: "100%" }}
          onChange={props.updateData}
        />
      </div>

      <Divider variant="middle" style={{ margin: "10px" }} />
      <div>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={6}>
            <TextField
              id="org_name"
              label="Organization Name"
              name="org_name"
              variant="outlined"
              style={{ width: "100%" }}
              onChange={props.updateData}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="incharge"
              label="Incharge"
              name="incharge"
              variant="outlined"
              style={{ width: "100%" }}
              onChange={props.updateData}
            />
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={6}>
            <TextField
              id="area"
              name="area"
              label="Area in square"
              type="number"
              variant="outlined"
              style={{ width: "100%" }}
              onChange={props.updateData}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="price"
              label="Price in INR"
              name="price"
              type="number"
              variant="outlined"
              style={{ width: "100%" }}
              onChange={props.updateData}
            />
          </Grid>
        </Grid>
      </div>
      <Divider variant="middle" style={{ margin: "10px" }} />
      <div>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={12}>
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              style={{ width: "100%" }}
              onChange={props.updateData}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="phone"
              name="phone"
              style={{ width: "100%" }}
              name="phone"
              label="Phone"
              variant="outlined"
              onChange={props.updateData}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="alt_phone"
              name="alt_phone"
              label="Alernate Phone"
              variant="outlined"
              style={{ width: "100%" }}
              onChange={props.updateData}
            />
          </Grid>
        </Grid>
      </div>
      <Divider variant="middle" style={{ margin: "10px" }} />
      <div>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={1}
        >
          <Grid xs={6} item>
            <TextField
              id="city"
              name="city"
              label="City"
              variant="outlined"
              style={{ width: "100%" }}
              onChange={props.updateData}
            />
          </Grid>
          <Grid xs={6} item>
            <TextField
              id="state"
              name="state"
              label="State"
              variant="outlined"
              style={{ width: "100%" }}
              onChange={props.updateData}
            />
          </Grid>
          <Grid xs={6} item>
            <TextField
              id="address"
              name="address"
              label="Address"
              variant="outlined"
              style={{ width: "100%" }}
              onChange={props.updateData}
            />
          </Grid>
          <Grid xs={6} item>
            <TextField
              id="zip_code"
              name="zip_code"
              label="Zip Code"
              type="number"
              variant="outlined"
              style={{ width: "100%" }}
              onChange={props.updateData}
            />
          </Grid>
        </Grid>
      </div>
      {props.isJobDetailsNeeded && (
        <>
          <Divider variant="middle" style={{ margin: "10px" }} />
          <div>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              spacing={1}
            >
              <Grid xs={6} item>
                <TextField
                  id="job_location"
                  name="job_location"
                  label="Job Location"
                  variant="outlined"
                  style={{ width: "100%" }}
                  onChange={props.updateData}
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  id="position"
                  name="position"
                  label="Position"
                  variant="outlined"
                  style={{ width: "100%" }}
                  onChange={props.updateData}
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  id="education"
                  name="education"
                  label="Education"
                  variant="outlined"
                  style={{ width: "100%" }}
                  onChange={props.updateData}
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  id="experience"
                  name="experience"
                  label="Experience"
                  type="number"
                  variant="outlined"
                  style={{ width: "100%" }}
                  onChange={props.updateData}
                />
              </Grid>
            </Grid>
          </div>
        </>
      )}
      <Divider variant="middle" style={{ margin: "10px" }} />
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <ThemeProvider theme={theme}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Create Ad
          </Button>
        </ThemeProvider>
      </Grid>
    </form>
  );
}
