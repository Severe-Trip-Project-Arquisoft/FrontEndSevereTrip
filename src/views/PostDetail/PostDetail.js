import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, CardContent, Card, CardActions, Divider } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import StarIcon from '@material-ui/icons/Star';
import {useParams } from 'react-router-dom';


import ListItem from '@material-ui/core/ListItem';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

import ListItemIcon from '@material-ui/core/ListItemIcon';

import CommentSection from '../../components/CommentSection';

import { PostDetailToolbar} from './components';
import mockData from './data';
import { API }  from 'API';
import { maxWidth } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  imageContainer: {
    height: 300,
    width: maxWidth,
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

const PostDetail = () => {
  const classes = useStyles();
  const [Post,setPost] = useState(mockData)
  const [loaded,setLoaded] = useState(false);
  const {postId} = useParams();

  useEffect(()=>{
    const fetchPostData = async ()=>{
      let receivedPostData = await API.postProvider.getById(postId)
      if(receivedPostData && receivedPostData.status === 200)
      {setPost(Object.assign({},Post,receivedPostData.data))
        setLoaded(true);}
    }
    fetchPostData();    
  },[]);
  return (
    <div className={classes.root}>


      <PostDetailToolbar postId = {Post.id}/>

      <div className={classes.content}>

        <Card
          className={classes.root}
        >
          <CardContent>
            <Typography
              align="center"
              variant="h1"
            >
              {Post.name}
            </Typography>
            <div className={classes.imageContainer}>
              <img
                alt="Post"
                className={classes.image}
                src={'/images/'+Post.serviceType+'s/'+Post.serviceType+'5.png'}
              />
            </div>            
            <Typography
              align="center"
              variant="body1"
            >
              {Post.description}
            </Typography>
            <Typography
              align="center"
              variant="body1"
            >
              {Post.city} - {Post.country}
            </Typography>
            <Typography
              align="center"
              variant="body1"
            >
              {Post.address}
            </Typography>
            <Typography
              align="center"
              variant="body1"
            >
              {Post.email}
            </Typography>
            <Typography
              align="center"
              variant="body1"
            >
              {Post.phone}
            </Typography>
            <Typography
              align="center"
              variant="h5"
            >
          Precio por {mapServiceTypeUnit(Post.serviceType)}: ${Post.price}
            </Typography>
          </CardContent>


          { loaded ?
            <div className={classes.demo}>


              {Post.tags.map( (add, index) => (
                <Grid
                  item
                  key = {index}
                  md={6}
                  xs={12}
                >
                  <ListItem>
                    <ListItemIcon>
                      <RadioButtonCheckedIcon />
                    </ListItemIcon>
                    <Typography
                      align="center"
                      variant="body1"
                    >
                      {add.description}
                    </Typography>

                  </ListItem>
                </Grid>
              ))}

            </div>
          
            : <div/>}



          <Divider />
          <CardActions>
            <Grid
              container
              justify="space-between"
            >
              <Grid
                className={classes.statsItem}
                item
              >
                <AccessTimeIcon className={classes.statsIcon} />
                <Typography
                  display="inline"
                  variant="body2"
                >
              Updated 2hr ago
                </Typography>
              </Grid>
              <Grid
                className={classes.statsItem}
                item
              >
                <StarIcon className={classes.statsIcon} />
                <Typography
                  display="inline"
                  variant="body2"
                >
                  {Post.calification} 
                </Typography>
              </Grid>
            </Grid>
          </CardActions>
        </Card>



      </div>
      {loaded ?
        <CommentSection
          postId = {Post.id}
          providerId = {Post.providerId}
        /> : <div/>
      }          
    </div>
  );
};

export default PostDetail;
