import 'date-fns';
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
  Typography,
  Grid,
  Button,
  TextField
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const DoingReservationCar = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const [values, setValues] = useState({
    serviceName: 'Kia cerato',
    serviceType: 'car',
    clientName: 'Amir',
    howManyPeople: '3',
    priceReservation: '123567',
    serviceState: 'waiting for your answer'
  });

 const [selectedDateCheckIn, setSelectedDateCheckIn] = React.useState(new Date('2019-09-19T06:00:00'));
 const [selectedDateCheckOut, setSelectedDateCheckOut] = React.useState(new Date('2019-09-19T06:00:00'));

  const handleDateChangeCheckIn = date => {
    setSelectedDateCheckIn(date);
  };

  const handleDateChangeCheckOut = date => {
    setSelectedDateCheckOut(date);
  };

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>


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
          title="Doing reservation Car"
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
		<Typography
       			align="center"
		        variant="h4"
	        >
	          {values.serviceName}
	        </Typography>


            </Grid>
            <Grid
              item
	      md={6}
              xs={12}
            >
		<Typography
       			align="center"
		        variant="h4"
	        >
	          {values.clientName}
	        </Typography>


            </Grid>


            <Grid
              item
	      md={12}
              xs={12}
            >
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container justify="space-around">
			<KeyboardDatePicker
			  margin="normal"
			  id="date-Check-in"
			  label="Date Check-in"
			  format="MM/dd/yyyy"
			  value={selectedDateCheckIn}
			  onChange={handleDateChangeCheckIn}
			  KeyboardButtonProps={{
			    'aria-label': 'change date',
			  }}
			/>
			<KeyboardTimePicker
			  margin="normal"
			  id="time-Check-in"
			  label="Time Check-in"
			  value={selectedDateCheckIn}
			  onChange={handleDateChangeCheckIn}
			  KeyboardButtonProps={{
			    'aria-label': 'change time',
			  }}
			/>
		      </Grid>
		    </MuiPickersUtilsProvider>
            </Grid>

            <Grid
              item
	      md={12}
              xs={12}
            >
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container justify="space-around">
			<KeyboardDatePicker
			  margin="normal"
			  id="date-Check-out"
			  label="Date Check-out"
			  format="MM/dd/yyyy"
			  value={selectedDateCheckOut}
			  onChange={handleDateChangeCheckOut}
			  KeyboardButtonProps={{
			    'aria-label': 'change date',
			  }}
			/>
			<KeyboardTimePicker
			  margin="normal"
			  id="time-Check-out"
			  label="Time Check-out"
			  value={selectedDateCheckOut}
			  onChange={handleDateChangeCheckOut}
			  KeyboardButtonProps={{
			    'aria-label': 'change time',
			  }}
			/>
		      </Grid>
		    </MuiPickersUtilsProvider>
            </Grid>

	    <Grid
              item
	      md={6}
              xs={12}
            >
		<Typography
       			align="center"
		        variant="h4"
	        >
	         Service type: {values.serviceType}
	        </Typography>
            </Grid>

            <Grid
              item
	      md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="How many people?"
                margin="dense"
                name="HowManyPeople"
                onChange={handleChange}
                type="number"
                value={values.howManyPeople}
                variant="outlined"
              />
            </Grid>
	    <Grid
              item
	      md={6}
              xs={12}
            >
		<Typography
       			align="center"
		        variant="h4"
	        >
	         Price Reservation $ {values.priceReservation}
	        </Typography>
            </Grid>
	    <Grid
              item
	      md={6}
              xs={12}
            >
		<Typography
       			align="center"
		        variant="h4"
	        >
	         State: {values.serviceState}
	        </Typography>
            </Grid>

          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
          >
            Save Reservation
          </Button>
          <Button
            color="primary"
            variant="contained"
          >
            Cancel Reservation
          </Button>
          <Button
            color="primary"
            variant="contained"
          >
            Approve Reservation
          </Button>
          <Button
            color="primary"
            variant="contained"
          >
            Pay Car
          </Button>
        </CardActions>
      </form>
    </Card>
      </div>
    </div>
  );
};

DoingReservationCar.propTypes = {
  className: PropTypes.string
};

export default DoingReservationCar;
