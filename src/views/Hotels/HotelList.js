import React, { useState, useEffect } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { HotelsToolbar } from './components';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CircularProgress from '@material-ui/core/CircularProgress'
import {API} from 'API'
import {PostCard} from '../PostList/components';


const styles = theme => ({
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
  },
  progress: {
    display: 'block',
    margin: theme.spacing(3),
    marginLeft: 'auto',
    marginRight: 'auto',

   
  }
});


const HotelList = (props)=>{

  const [state , setState] = useState({
    isDataLoaded: false,
    datosHoteles: []
  });

  useEffect( () => {   
    async function cargarDatos () {
      const rensponse = await API.postProvider.getByType('hotel')
        .catch(err => console.log(err));
      setState({
        isDataLoaded: true,
        datosHoteles: rensponse.data
      })

    }
    cargarDatos();
    
    //return () =>{} 
  }  , [])
  
  
  const { classes } = props;

  return (
    state.isDataLoaded ?
      <div className={classes.root}>
        <HotelsToolbar />
        <div className={classes.content}>
          <Grid
            container
            spacing={3}
          >
            {state.datosHoteles.map(hotel => (
              <Grid
                item
                key={hotel.id}
                lg={4}
                md={6}
                xs={12}
              >
                <PostCard post={hotel} />
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
      : <div>
        <CircularProgress className={classes.progress} />
      </div>

  );
  
}

export default withRouter(withStyles(styles)(HotelList));
