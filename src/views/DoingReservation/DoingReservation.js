import 'date-fns';
import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
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


const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  }
  });





class DoingReservation extends Component{
    
    constructor(props){
        super(props);
        this.state = {
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
        }
    };
    

    async componentDidMount(){

        
        let res = await API.postProvider.getById('5dae79db5d68100001394647');
        console.log(res.data);
        this.setState(
            {
                post: res.data
            }
        );
	let res1 = await API.client.getById('5dacf583a0c08b00014acd1c');
        console.log(res1.data);
        this.setState(
            {
                client: res1.data
            }
        );
        console.log(this.state.client.firstName);
	this.setState(
            {
		serviceName: this.state.post.name,
		serviceType: this.state.post.serviceType,
		clientName: this.state.client.firstName+' '+this.state.client.secondName,
		priceReservation: this.state.post.price,
            }
        );
    }

render(){
  const {classes, className, ...rest } = this.props;
  const handleDateChangeCheckIn = date => {
        this.setState(
            {
                selectedDateCheckIn: date
            }
        )
  };

  const handleDateChangeCheckOut = date => {
        this.setState(
            {
                selectedDateCheckOut: date
            }
        )
  };

  const handleChange = event => {
    this.setState(
            {
	      [event.target.name]: event.target.value
            }
        )
  };

  const handleSubmit = event => {
        event.preventDefault();
	var data = {
		clientId: this.state.client.clientId,
		providerId: this.state.post.providerId,
		postId: this.state.post.id,
		startTime: this.state.selectedDateCheckIn,
		endTime: this.state.selectedDateCheckOut,
		amount: this.state.serviceNumber,
		prizePerHead: this.state.priceReservation,
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
      {...rest}
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
	          {this.state.serviceName}
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
	          {this.state.clientName}
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
			  value={this.state.selectedDateCheckIn}
			  onChange={handleDateChangeCheckIn}
			  KeyboardButtonProps={{
			    'aria-label': 'change date',
			  }}
			/>
			<KeyboardTimePicker
			  margin="normal"
			  id="time-Check-in"
			  label="Time Check-in"
			  value={this.state.selectedDateCheckIn}
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
			  value={this.state.selectedDateCheckOut}
			  onChange={handleDateChangeCheckOut}
			  KeyboardButtonProps={{
			    'aria-label': 'change date',
			  }}
			/>
			<KeyboardTimePicker
			  margin="normal"
			  id="time-Check-out"
			  label="Time Check-out"
			  value={this.state.selectedDateCheckOut}
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
	         Service type: {this.state.serviceType}
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
                value={this.state.serviceNumber}
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
	         Price Reservation $ {this.state.priceReservation}
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
	         State Paid: {this.state.serviceStatePaid}
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
	         State Approved: {this.state.serviceStateApproved}
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
          );


    }
}

DoingReservation.propTypes ={
    classes: PropTypes.object.isRequired
};


export default withStyles(styles)(DoingReservation);

