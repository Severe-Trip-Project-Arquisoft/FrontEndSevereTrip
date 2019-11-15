import React, { useState, useEffect, useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, CardContent, Card, CardHeader, CardActions, Divider } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import StarIcon from '@material-ui/icons/Star';
import {useParams } from 'react-router-dom';
import {UserContext} from '../../contexts/UserContext';

import ListItem from '@material-ui/core/ListItem';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

import ListItemIcon from '@material-ui/core/ListItemIcon';


import { ReservationDetailToolbar} from './components';
import mockData from './data';
import { API }  from 'API';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  imageContainer: {
    height: 64,
    width: 64,
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  }
}));

const mapServiceTypeUnit = (type) =>{
  switch(type){
    case 'restaurant':
      return 'plato (aprox)';
    case 'hotel':
      return 'noche por persona';
    case 'rentCar':
      return 'día de alquiler';
    case 'flight':
      return 'pasaje';
    default:
      return ''
  }
}

const ReservationDetail = props => {
  const {className, history } = props;
  const classes = useStyles();
  const {reservationId} = useParams();
  const [Post,setPost] = useState(mockData);
  const [reservation,setReservation] = useState([]);
  const {user} = useContext(UserContext);
  useEffect(()=>{
    const fetchReservationData = async ()=>{
console.log("++++++",reservationId);
await API.reservation.getById(reservationId).then(res => {
      console.log(res);
        
      if(res.status === 200){          
	setReservation(Object.assign({},reservation,res.data));
	console.log("tttttttttt",reservation);
	}
    }).catch((error) => {
//	dialogo1 =true;
      console.log(error);
    });
await API.postProvider.getById(reservation.postId).then(res => {
      console.log(res);
        
      if(res.status === 200){          
	setPost(Object.assign({},Post,res.data));
	console.log("ññññññññ",Post);
	}
    }).catch((error) => {
//	dialogo1 =true;
      console.log(error);
    });
    }
    fetchReservationData();
    },[]);


  return (
    <div className={classes.root}>


      <ReservationDetailToolbar reservationId = {reservation.id}/>

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
                subheader="The information must be complete with aproved, cancel or pay"
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
                    md={6}
                    xs={12}
                  >

                    <Typography
                      align="center"
                      variant="h4"
                    >
                      Start time: {reservation.startTime}
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
                      End time: {reservation.endTime}
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
                      Service type: {Post.serviceType}
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
                      # Service : {(reservation.amount*reservation.prizePerHead)}
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
                      State Paid: {reservation.paid}
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
                      State Approved: {reservation.approved}
                    </Typography>
                  </Grid>

                </Grid>
              </CardContent>
            </form>
          </Card>







        </Grid>

        
	</div>          
    </div>
  );
};

export default ReservationDetail;
