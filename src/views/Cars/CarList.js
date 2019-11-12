import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import { CarsToolbar } from './components';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {API} from 'API'
import {PostCard} from '../PostList/components';

import {UserContext} from '../../contexts/UserContext';

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

const CarList = () => {
  const classes = useStyles();
  const { user } =  useContext(UserContext)
  const [state , setState] = useState({
    isDataLoaded: false,
    datosCarros: []
  });

  useEffect( () => {   
    async function cargarDatos () {
      const rensponse = await API.postProvider.getByType('rentCar')
        .catch(err => console.log(err));
      setState({
        isDataLoaded: true,
        datosCarros: rensponse.data
      })

    }
    cargarDatos();
    
    //return () =>{} 
  }  , [])

  return (
    <div className={classes.root}>
{(user.logged) ?
      <CarsToolbar />:<div></div>}
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {state.datosCarros.map(car => (
            <Grid
              item
              key={car.id}
              lg={4}
              md={6}
              xs={12}
            >
              <PostCard post={car} />
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

export default CarList;
