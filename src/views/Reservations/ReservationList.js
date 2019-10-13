import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { ReservationsToolbar, ReservationCard } from './components';
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

const ReservationList = () => {
  const classes = useStyles();

  const [reservations] = useState(mockData);

  return (
    <div className={classes.root}>
      <ReservationsToolbar />
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {reservations.map(reservation => (
            <Grid
              item
              key={reservation.id}
              lg={4}
              md={6}
              xs={12}
            >
              <ReservationCard reservation={reservation} />
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

export default ReservationList;
