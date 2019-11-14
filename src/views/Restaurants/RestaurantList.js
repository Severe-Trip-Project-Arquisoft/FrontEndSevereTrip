import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { RestaurantsToolbar } from './components';
import {PostCard} from '../PostList/components';
import {API} from 'API'

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

const RestaurantList = () => {
  const classes = useStyles();
  const [state , setState] = useState({
    isDataLoaded: false,
    datosRestaurantes: []
  });

  useEffect( () => {   
    async function cargarDatos () {
      const rensponse = await API.postProvider.getByType('restaurant')
        .catch(err => console.log(err));
      setState({
        isDataLoaded: true,
        datosRestaurantes: rensponse.data
      })

    }
    cargarDatos();
    
    //return () =>{} 
  }  , [])

  return (
    <div className={classes.root}>
      <RestaurantsToolbar />
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {state.datosRestaurantes.map(restaurant => (
            <Grid
              item
              key={restaurant.id}
              lg={4}
              md={6}
              xs={12}
            >
              <PostCard post={restaurant} />
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

export default RestaurantList;
