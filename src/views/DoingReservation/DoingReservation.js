import 'date-fns';
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { API } from 'HTTPRequests';

import {
  IconButton,
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
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const DoingReservation = (props)=>{
  const classes = useStyles();
    const [state, setState] = useState({
            post : [],
            client : [],
	    serviceName: 'El virrey',
	    serviceType: 'hotel',
	    clientName: 'pepito',
	    serviceNumber: '2',
	    priceReservation: '245432',
	    serviceStatePaid: 'false',
	    serviceStateApproved: 'false',
	    selectedDateCheckIn: new Date('2019-09-19T06:00:00'),
	    selectedDateCheckOut: new Date('2019-09-19T06:00:00')
    });

    
  useEffect( () =>{
    const fetchReservation = async ()=>{

      let res = await API.postProvider.getById('5db09a8eb24da600017a3cff');
      console.log(res.data);
      setState(
        {
          post: res.data
        }
      );
      let res1 = await API.client.getById('5dacf583a0c08b00014acd1c');
      console.log(res1.data);
      setState(
        {
          client: res1.data
        }
      );
      console.log(state.client.firstName);
      setState(
        {
          serviceName: state.post.name,
          serviceType: state.post.serviceType,
          clientName: state.client.firstName +' '+ state.client.secondName,
          priceReservation: state.post.price,
        }
      );
    }

    fetchReservation().then(r => console.log(r));
    },[]
  );


  const {className } = props;
  const handleDateChangeCheckIn = date => {
        setState(
            {
                selectedDateCheckIn: date
            }
        )
  };

  const handleDateChangeCheckOut = date => {
        setState(
            {
                selectedDateCheckOut: date
            }
        )
  };

  const handleChange = event => {
      setState(
            {
	      [event.target.name]: event.target.value
            }
        )
  };

  const handleSubmit = event => {
      event.preventDefault();
      const data = {
        clientId: state.client.clientId,
        providerId: state.post.providerId,
        postId: state.post.id,
        startTime: state.selectedDateCheckIn.toJSON(),
        endTime: state.selectedDateCheckOut.toJSON(),
        amount: state.serviceNumber,
        prizePerHead: state.priceReservation,
        paid: false,
              approved: false
      }

      console.log('DATA',data);
      console.log('DATE',data.startTime);
      API.reservation.insertReservation(data);
  };




  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >





          <Card
            className={clsx(classes.root, className)}
          >
            <form
              autoComplete="off"
              noValidate
            >
              <CardHeader
                subheader="The information must be complete"
                title="Doing reservation"
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
                      {state.serviceName}
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
                      {state.clientName}
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
                          value={state.selectedDateCheckIn}
                          onChange={handleDateChangeCheckIn}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                        <KeyboardTimePicker
                          margin="normal"
                          id="time-Check-in"
                          label="Time Check-in"
                          value={state.selectedDateCheckIn}
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
                          value={state.selectedDateCheckOut}
                          onChange={handleDateChangeCheckOut}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                        <KeyboardTimePicker
                          margin="normal"
                          id="time-Check-out"
                          label="Time Check-out"
                          value={state.selectedDateCheckOut}
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
                      Service type: {state.serviceType}
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      label="Service Number"
                      margin="dense"
                      name="serviceNumber"
                      onChange={handleChange}
                      type="number"
                      value={state.serviceNumber}
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
                      Price Reservation $ {state.priceReservation}
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
                      State Paid: {state.serviceStatePaid}
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
                      State Approved: {state.serviceStateApproved}
                    </Typography>
                  </Grid>

                </Grid>
              </CardContent>
              <Divider />
              <CardActions>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  onClick={handleSubmit}
                >
                  Save Reservation
                </Button>
              </CardActions>
            </form>
          </Card>







        </Grid>
      </div>
      <div className={classes.pagination}>
        <Typography variant="caption">1-6 of 20</Typography>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  )
}



export default (DoingReservation);

