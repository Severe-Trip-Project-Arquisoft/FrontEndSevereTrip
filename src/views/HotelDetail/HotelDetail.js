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

import { HotelDetailToolbar} from './components';
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

const HotelDetail = (props) => {
  const classes = useStyles();
  const [hotel,setHotel] = useState(mockData)
  const [loaded,setLoaded] = useState(false);
  const {postId} = useParams();

  const fetchPostData = async ()=>{
    let receivedPostData = await API.postProvider.getById(postId)
    .then(res => {
      setHotel(Object.assign({},hotel,receivedPostData.data))
      setLoaded(true);
    })
    .catch(err => {
      
    })
    
  }

  useEffect(()=>{
    fetchPostData();    
  },[]);


  return (
    <div className={classes.root}>
      <HotelDetailToolbar />
      <div className={classes.content}>

        <Card
          className={classes.root}
        >
          <CardContent>
            <div className={classes.imageContainer}>
              <img
                alt="Hotel"
                className={classes.image}
                src={'/images/hotels/hotel1.png'}
              />
            </div>
            <Typography
              align="center"
              variant="h4"
            >
              {hotel.name}
            </Typography>
            <Typography
              align="center"
              variant="body1"
            >
              {hotel.description}
            </Typography>
            <Typography
              align="center"
              variant="body1"
            >
              {hotel.city} - {hotel.country}
            </Typography>
            <Typography
              align="center"
              variant="body1"
            >
              {hotel.address}
            </Typography>
            <Typography
              align="center"
              variant="body1"
            >
              {hotel.email}
            </Typography>
            <Typography
              align="center"
              variant="body1"
            >
              {hotel.phone}
            </Typography>
            <Typography
              align="center"
              variant="h5"
            >
          Precio por habitacion {hotel.price}
            </Typography>
          </CardContent>



          <div className={classes.demo}>


            {hotel.adiciones.map( (add, index) => (
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
		          {add.tx}
		        </Typography>

                </ListItem>
              </Grid>
            ))}

          </div>




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
              Actualizado hace 2 horas
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
                  {hotel.calification} 
                </Typography>
              </Grid>
            </Grid>
          </CardActions>
        </Card>



      </div>
      {loaded ?
        <CommentSection
          postId = {hotel.id}
          providerId = {hotel.providerId}
        /> : <div/>
      }
    </div>
  );
};

export default HotelDetail;
