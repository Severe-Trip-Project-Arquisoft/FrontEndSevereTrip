import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';

//import {HTTPRequests}  from 'HTTPRequests';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(() => ({
  root: {}
}));

const InsertFlight = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    flightName: '',
    flightAddress: '',
    flightEmail: '',
    flightPhone: '',
    flightPrice: '',
    flightCity: '',
    flightCountry: '',
    flightDescription: ''
  });

  const [state, setState] = React.useState({
    freeparking:false,
    restaurant:false,
    businessCenterInternetAccess:false,
    breakfastAvailable:false,
    laundryService:false,
    conferenceFacilities:false,
    meetingRooms:false,
    internet:false,
    freeInternet:false,
    nonSmokingRooms:false,
    suites:false,
    roomsFamilies:false,
    roomService:false,
    safeBox:false,
    flatScreenTV:false
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
    setState({ ...state, [event.target.name]: event.target.value });
  };



  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          subheader="The information must be complete"
          title="Insert a new restaurant"
        />
        <Divider />
        <CardHeader
          title="Information"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
	            md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Name of flight"
                margin="dense"
                name="flightName"
                onChange={handleChange}
                required
                value={values.flightName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
	            md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Address"
                margin="dense"
                name="flightAddress"
                onChange={handleChange}
                required
                value={values.flightAddress}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
	      md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email"
                margin="dense"
                name="flightEmail"
                onChange={handleChange}
                required
                value={values.flightEmail}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
	            md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                margin="dense"
                name="flightPhone"
                onChange={handleChange}
                type="number"
                value={values.flightPhone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
	            md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Average price per flight $"
                margin="dense"
                name="flightPrice"
                onChange={handleChange}
                type="number"
                value={values.flightPrice}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
	            md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="City"
                margin="dense"
                name="flightCity"
                onChange={handleChange}
                required
                value={values.flightCity}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
	            md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Country"
                margin="dense"
                name="flightCountry"
                onChange={handleChange}
                required
                value={values.flightCountry}
                variant="outlined"
              />
            </Grid>
	    <Grid
              item
	      md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Description"
                margin="dense"
                name="flightDescription"
                onChange={handleChange}
                value={values.flightDescription}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardHeader
          title="Type of flight"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
	      md={4}
              sm={6}
              xs={12}
            >
		<FormControlLabel
	            control={<Checkbox
			name="freeparking"
			onChange={handleChange}
			value={state.freeparking} />}
	            label="Free parking"
	          />
            </Grid>
            <Grid
              item
	      md={4}
              sm={6}
              xs={12}
            >
		<FormControlLabel
	            control={<Checkbox
			name="restaurant"
			onChange={handleChange}
			value={state.restaurant} />}
	            label="Restaurant"
	          />
            </Grid>
            <Grid
              item
	      md={4}
              sm={6}
              xs={12}
            >
		<FormControlLabel
	            control={<Checkbox
			name="businessCenterInternetAccess"
			onChange={handleChange}
			value={state.businessCenterInternetAccess} />}
	            label="Business center with Internet access"
	          />
            </Grid>
            <Grid
              item
	      md={4}
              sm={6}
              xs={12}
            >
		<FormControlLabel
	            control={<Checkbox
			name="breakfastAvailable"
			onChange={handleChange}
			value={state.breakfastAvailable} />}
	            label="Breakfast available"
	          />
            </Grid>
            <Grid
              item
	      md={4}
              sm={6}
              xs={12}
            >
		<FormControlLabel
	            control={<Checkbox
			name="laundryService"
			onChange={handleChange}
			value={state.laundryService} />}
	            label="Laundry service"
	          />
            </Grid>
            <Grid
              item
	      md={4}
              sm={6}
              xs={12}
            >
		<FormControlLabel
	            control={<Checkbox
			name="conferenceFacilities"
			onChange={handleChange}
			value={state.conferenceFacilities} />}
	            label="Conference facilities"
	          />
            </Grid>
            <Grid
              item
	      md={4}
              sm={6}
              xs={12}
            >
		<FormControlLabel
	            control={<Checkbox
			name="meetingRooms"
			onChange={handleChange}
			value={state.meetingRooms} />}
	            label="Meeting rooms"
	          />
            </Grid>
            <Grid
              item
	      md={4}
              sm={6}
              xs={12}
            >
		<FormControlLabel
	            control={<Checkbox
			name="internet"
			onChange={handleChange}
			value={state.internet} />}
	            label="Internet"
	          />
            </Grid>
            <Grid
              item
	      md={4}
              sm={6}
              xs={12}
            >
		<FormControlLabel
	            control={<Checkbox
			name="freeInternet"
			onChange={handleChange}
			value={state.freeInternet} />}
	            label="Free internet"
	          />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardHeader
          title="Room Features"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
	      md={4}
              sm={6}
              xs={12}
            >
		<FormControlLabel
	            control={<Checkbox
			name="nonSmokingRooms"
			onChange={handleChange}
			value={state.nonSmokingRooms} />}
	            label="Non smoking rooms"
	          />
            </Grid>
            <Grid
              item
	      md={4}
              sm={6}
              xs={12}
            >
		<FormControlLabel
	            control={<Checkbox
			name="suites"
			onChange={handleChange}
			value={state.suites} />}
	            label="Suites"
	          />
            </Grid>
            <Grid
              item
	      md={4}
              sm={6}
              xs={12}
            >
		<FormControlLabel
	            control={<Checkbox
			name="roomsFamilies"
			onChange={handleChange}
			value={state.roomsFamilies} />}
	            label="Rooms for families"
	          />
            </Grid>
            <Grid
              item
	      md={4}
              sm={6}
              xs={12}
            >
		<FormControlLabel
	            control={<Checkbox
			name="roomService"
			onChange={handleChange}
			value={state.roomService} />}
	            label="Room service"
	          />
            </Grid>
            <Grid
              item
	      md={4}
              sm={6}
              xs={12}
            >
		<FormControlLabel
	            control={<Checkbox
			name="safeBox"
			onChange={handleChange}
			value={state.safeBox} />}
	            label="Safe Box"
	          />
            </Grid>
            <Grid
              item
	      md={4}
              sm={6}
              xs={12}
            >
		<FormControlLabel
	            control={<Checkbox
			name="flatScreenTV"
			onChange={handleChange}
			value={state.flatScreenTV} />}
	            label="Flat screen TV"
	          />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
          >
            Save Hotel
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

InsertFlight.propTypes = {
  className: PropTypes.string
};

export default InsertFlight;
