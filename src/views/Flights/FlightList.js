import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { FlightsToolbar } from './components';

import {API} from 'API'
import {PostCard} from '../PostList/components';

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

const FlightList = () => {
  const classes = useStyles();

  const [flights , setFlights] = useState({
    isDataLoaded: false,
    datosFlights: []
  });

  useEffect( () => {   
    async function cargarDatos () {
      const rensponse = await API.postProvider.getByType('flight')
        .catch(err => console.log(err));
      setFlights({
        isDataLoaded: true,
        datosFlights: rensponse.data
      })

    }
    cargarDatos();
    
    //return () =>{} 
  }  , [])

  return (
    <div className={classes.root}>
      <FlightsToolbar />
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {flights.datosFlights.map(flight => (
            <Grid
              item
              key={flight.id}
              lg={4}
              md={6}
              xs={12}
            >
              <PostCard post={flight} />
            </Grid>
          ))}
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
};

export default FlightList;
