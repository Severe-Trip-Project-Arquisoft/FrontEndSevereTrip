import React, {useEffect, useState, useContext} from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { UserContext }  from '../../contexts/UserContext';
import { PostCard } from './components';
import { API }  from 'API';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
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



const PostList = () => {
    

  const [state, setState] = useState ({
    posts : [],
    favorites: {}
  });

  const {user} = useContext(UserContext);
  useEffect( ()=>{


    const fetchData = async ()=>{
      let res = await API.postProvider.getAll();
      let favorites = {}
      //TO-DO: Esta verificación no sería necesaria si en el micro de favoritos se creara una petición para determinar si se es favorito o no.
      if(res && res.status === 200) {
        for (let postId in res.data) {
          favorites[postId] = false;
        }
        let resF = [];
        if(user.rol === 'client')
          resF = await API.favorites.getById(user.id);
        for (let fav in resF.data) {
          favorites[fav.postId] = true;
        }

        setState(
          {
            posts: res.data,
            favorites
          }
        )
      }
    }
    fetchData();

  }, []);


  const classes = useStyles();

  return (

    <div className={classes.root}>
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {state.posts.map(post => (
            <Grid
              item
              key={post.id}
              lg={4}
              md={6}
              xs={12}
            >
              <PostCard
                favorite = {user.logged ? state.favorites[post.id] : false}
                post={post}
              />
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



}


export default (PostList);
