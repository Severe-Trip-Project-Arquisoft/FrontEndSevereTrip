import React, { useContext, useState } from 'react';
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
  Divider,
  CardHeader,
  CardMedia
} from '@material-ui/core';
// import { sizing, maxHeight, maxWidth } from '@material-ui/system';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
import { UserContext } from '../../../../contexts/UserContext';
import { API } from '../../../../API';

const mapServiceTypeUnit = (type) => {
  switch (type) {
    case 'restaurant':
      return 'plato (aprox)';
    case 'hotel':
      return 'noche por persona';
    case 'rentCar':
      return 'día de alquiler';
    case 'flight':
      return 'pasaje';
  }
}

// const firstLetterUppercase = (str) =>{
//   return (str[0].toUpperCase() + str.slice(1));
// }

const useStyles = makeStyles(theme => ({
  root: {},
  button: {},
  imageContainer: {
    height: '100%',
    width: '100%',
    margin: '0 auto',
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
  },
  titlePost:{
    marginTop: 5,
    marginBottom: 5
  }
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
  >
    <RouterLink {...props} />
  </div>
));

// const ruta = '/postDetail';
const PostCard = props => {
  const { className, post, favorite } = props;
  const { user } = useContext(UserContext)
  const classes = useStyles();
  const [fav, setFav] = useState(favorite);
  const [favId, setFavId] = useState(null);
  const ruta = '/postDetail';
  const handleFavorite = async () => {

    if (!fav) {
      const res = await API.favorites.insertFavorite(user.id, post.id);

      if (res) {
        setFavId(res.data);
        setFav(true);

        console.log(fav);
      } else {

      }

    } else {
      const res = await API.favorites.deleteFavorite(user.id, post.id);
      setFavId('');
      setFav(false);

      console.log('NO FAV', res);
      console.log(fav);
    }

  }
  
  return (
    <Card
      className={clsx(classes.root, className)}
    >
      <Typography
          className={classes.titlePost}
          align="center"
          variant="h2"
        >
          {post.name}
        </Typography>
      <CardMedia
        alt="Post"
        className={classes.media}
        image={'/images/' + post.serviceType + 's/' + post.serviceType + '5.png'}
        component={CustomRouterLink}
        to={ruta + '/' + post.id}
        
      />
      <CardContent>
        {/* <div className={classes.imageContainer}>
          <Typography
            align="center"
            component={CustomRouterLink}
            to={ruta + '/' + post.id}
            variant="h4"
          >
            <img
              alt="Post"
              className={classes.image}
              src={'/images/' + post.serviceType + 's/' + post.serviceType + '5.png'}
            />
          </Typography>
        </div> */}
        <Typography
          align="center"
          variant="body1"
        >
          {post.description}
        </Typography>
        <Typography
          align="center"
          variant="h6"
        >
          Ubicado en: {post.city}
        </Typography>
        <Typography
          align="center"
          variant="h5"
        >
          Precio por {mapServiceTypeUnit(post.serviceType)}: ${post.price}
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
            {(user.logged) ?
              <IconButton
                className={classes.button}
                onClick={handleFavorite}
              >
                <StarIcon
                  className={classes.statsIcon}
                  color={fav ? 'primary' : 'error'}
                />
              </IconButton> : <React.Fragment />}
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
