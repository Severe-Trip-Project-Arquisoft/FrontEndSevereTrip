import 'date-fns';
import React, { useState, useEffect, useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { API } from 'API';
import mockData from './data';


import {UserContext} from '../../contexts/UserContext'
import {useParams } from 'react-router-dom';

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

const DoingReservation = props =>{
  const {className, history } = props;
  const classes = useStyles();
  const {user} = useContext(UserContext);
  const {postId} = useParams();

    const [dataPost, setDataPost] = useState({
	    serviceNumber: '2',
	    serviceStatePaid: 'false',
	    serviceStateApproved: 'false',
	    selectedDateCheckIn: new Date('2019-09-19T06:00:00'),
	    selectedDateCheckOut: new Date('2019-09-19T06:00:00')
    });

  const [Post,setPost] = useState(mockData);
  const [setLoaded] = useState(false);
  useEffect(()=>{
    const fetchPostData = async ()=>{
      let receivedPostData = await API.postProvider.getById(postId)
      if(receivedPostData && receivedPostData.status === 200){
        setPost(Object.assign({},Post,receivedPostData.data));
        setLoaded(true);
	    }
    }

    fetchPostData();
    },[]);

  const handleDateChangeCheckIn = date => {
        setDataPost(
            {
		...dataPost,
                selectedDateCheckIn: date
            }
        )
  };

  const handleDateChangeCheckOut = date => {
        setDataPost(
            {
		...dataPost,
                selectedDateCheckOut: date
            }
        )
  };

  const handleChange = event => {
      setDataPost(
            {
	      ...dataPost,
	      [event.target.name]: event.target.value
            }
        )
  };

  const handleSubmit = event => {
      event.preventDefault();
      const data = {
        clientId: user.id,
        providerId: Post.providerId,
        postId: Post.id,
        startTime: dataPost.selectedDateCheckIn.toJSON(),
        endTime: dataPost.selectedDateCheckOut.toJSON(),
        amount: dataPost.serviceNumber,
        prizePerHead: Post.price,
        paid: false,
        approved: false
      }

      console.log('DATA',data);
//      console.log('DATE',data.startTime);
      API.reservation.insertReservation(data);
      history.push('/posts');
//      var reservas ='hjkl';
//      var reservas = API.reservation.getByClient(user.id);
//      console.log('Reservaciones........',reservas);      
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
                      {Post.name}
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
                      {user.firstName} {user.secondName}
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
                          value={dataPost.selectedDateCheckIn}
                          onChange={handleDateChangeCheckIn}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                        <KeyboardTimePicker
                          margin="normal"
                          id="time-Check-in"
                          label="Time Check-in"
                          value={dataPost.selectedDateCheckIn}
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
                          value={dataPost.selectedDateCheckOut}
                          onChange={handleDateChangeCheckOut}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                        <KeyboardTimePicker
                          margin="normal"
                          id="time-Check-out"
                          label="Time Check-out"
                          value={dataPost.selectedDateCheckOut}
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
                      Service type: {Post.serviceType}
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
                      value={dataPost.serviceNumber}
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
                      Price Reservation $ {Post.price}
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
                      State Paid: {dataPost.serviceStatePaid}
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
                      State Approved: {dataPost.serviceStateApproved}
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
