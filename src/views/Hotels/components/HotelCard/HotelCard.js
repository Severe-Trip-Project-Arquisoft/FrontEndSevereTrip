import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { forwardRef } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles(theme => ({
  root: {},
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
  }
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
  >
    <RouterLink {...props} />
  </div>
));

const HotelCard = props => {
  const { className, hotel, ...rest } = props;

  const classes = useStyles();
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.imageContainer}>
          <img
            alt="Hotel"
            className={classes.image}
            src={'/images/hotels/hotel5.png'}
          />
        </div>
        <Typography
          align="right"
          variant="h4"
	        component={CustomRouterLink}
          to={"/hotelDetail/"+hotel.id}
        >
          {hotel.name}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          {hotel.name}
        </Typography>
        <Typography
          align="center"
          variant="h5"
        >
          {hotel.city}
        </Typography>
        <Typography
          align="center"
          variant="h5"
        >
          Precio por habitacion {hotel.price}
        </Typography>
      </CardContent>
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
              {hotel.calification}
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

HotelCard.propTypes = {
  className: PropTypes.string,
  hotel: PropTypes.object.isRequired
};

export default HotelCard;
