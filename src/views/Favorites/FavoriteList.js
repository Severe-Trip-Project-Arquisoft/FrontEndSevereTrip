import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import {FavoriteCard } from './components';
import mockData from './data';
import {API} from "../../HTTPRequests";
import {UserContext} from "../../contexts/UserContext";

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

const FavoriteList = () => {
  const classes = useStyles();
  const {user } = useContext(UserContext);
  const [favorites, setFavorites] = useState([]);

  const fetchFav = async  ()=>{

    const res = await API.favorites.getById(user.id);


    console.log(res);
    if(res.status === 200) setFavorites(res.data);

  }

  useEffect( () => {

    fetchFav();


  },[])

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {favorites.map(favorite => (
            <Grid
              item
              key={favorite.id}
              lg={4}
              md={6}
              xs={12}
            >
              <FavoriteCard favorite={favorite} />
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

export default FavoriteList;
