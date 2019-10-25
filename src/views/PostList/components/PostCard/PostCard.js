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

const PostCard = props => {
  const { className, post, ...rest } = props;

  const classes = useStyles();
  const ruta = "/"+post.serviceType+"Detail";

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.imageContainer}>
          <img
            alt="Post"
            className={classes.image}
            src={'/images/'+post.serviceType+'s/'+post.serviceType+'5.png'}
          />
        </div>
        <Typography
          align="right"
          variant="h4"
	        component={CustomRouterLink}
          to={ruta+"/"+post.id}
        >
          {post.name}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          {post.name}
        </Typography>
        <Typography
          align="center"
          variant="h5"
        >
          {post.city}
        </Typography>
        <Typography
          align="center"
          variant="h5"
        >
          Precio por {post.serviceType} {post.price}
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
              {post.calification}
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

PostCard.propTypes = {
  className: PropTypes.string,
  post: PropTypes.object.isRequired
};

export default PostCard;
