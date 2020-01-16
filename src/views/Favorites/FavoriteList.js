import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {API} from '../../API';
import {UserContext} from '../../contexts/UserContext';
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

const FavoriteList = () => {
  const classes = useStyles();
  const {user } = useContext(UserContext);
  const [pairs, setPairs] = useState({set:[],loaded:false});

  const fetchFav = async  ()=>{
    console.log(user)
    const res = await API.favorites.getById(user.id);
    console.log(res);
    let pairs = [];

    for(let element of res.data) {
      let tmp = await API.postProvider.getById(element);
      console.log(tmp)
      pairs.push({post: tmp.data,favorite: element});

    }
    console.log(pairs)
    setPairs({set:pairs,loaded:true});
  }

  useEffect( () => {

    fetchFav();


  },[])

  return (
    <div className={classes.root}>
      {pairs.loaded ?<div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {pairs.set.map(pair => (
            <Grid
              item
              key={pair.favorite.id}
              lg={4}
              md={6}
              xs={12}
            >
              <PostCard
                favorite={pair.favorite}
                post={pair.post}
              />
            </Grid>
          ))}
        </Grid>
      </div>:<div/>}
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
