import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, CardContent, Card, CardActions, Divider } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import StarIcon from '@material-ui/icons/Star';


import ListItem from '@material-ui/core/ListItem';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

import ListItemIcon from '@material-ui/core/ListItemIcon';
//import {CommentSection} from '../../components/CommentSection'

import { CarDetailToolbar} from './components';
import mockData from './data';

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

const CarDetail = () => {
  const classes = useStyles();
  const [car] = useState(mockData);

  return (
    <div className={classes.root}>
      <CarDetailToolbar />
      <div className={classes.content}>

    <Card
      className={classes.root}
    >
      <CardContent>
	<div className={classes.imageContainer}>
          <img
            alt="Car 1"
            className={classes.image}
            src={car.imageUrl}
          />
        </div>
        <Typography
          align="center"
          variant="h4"
        >
          {car.title}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          {car.description}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          {car.city} - {car.country}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          {car.address}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          {car.email}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          {car.phone}
        </Typography>
        <Typography
          align="center"
          variant="h5"
        >
          Precio del carro {car.price}
        </Typography>
      </CardContent>



          <div className={classes.demo}>


              {car.adiciones.map( (add, index) => (
            <Grid  key = {index} item xs={12} md={6}>
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
              {car.calification}
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>



      </div>
    </div>
  );
};

export default CarDetail;
