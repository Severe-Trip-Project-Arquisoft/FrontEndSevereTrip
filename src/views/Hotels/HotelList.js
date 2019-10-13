import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { HotelsToolbar, HotelCard } from './components';
import mockData from './data';

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

const HotelList = () => {
  const classes = useStyles();

  const [hotels] = useState(mockData);

  return (
    <div className={classes.root}>
      <HotelsToolbar />
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {hotels.map(hotel => (
            <Grid
              item
              key={hotel.id}
              lg={4}
              md={6}
              xs={12}
            >
              <HotelCard hotel={hotel} />
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

export default HotelList;
