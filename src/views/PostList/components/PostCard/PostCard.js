import React , {useContext, useState} from 'react';
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
import IconButton from '@material-ui/core/IconButton';
import {UserContext} from "../../../../contexts/UserContext";
import {API} from "../../../../HTTPRequests";

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
  }
}

const firstLetterUppercase = (str) =>{
  return (str[0].toUpperCase() + str.slice(1));
}

const useStyles = makeStyles(theme => ({
  root: {},
  button: {},
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

const ruta = "/postDetail";
const PostCard = props => {
  const { className, post, favorite } = props;
  const { user } =  useContext(UserContext)
  const classes = useStyles();
  const [fav, setFav] = useState(favorite);
  const [favId, setFavId] = useState(null);
  const ruta = "/postDetail";
  const handleFavorite = async() =>{
  


    if(!fav){
      const res = await API.favorites.insertFavorite(
        {
          clientId: user.id,
          postId: post.id,
          stateFavorite : true,
        }
      )
      setFavId(res.data);
      setFav(true);

      console.log("FAV", res);
    console.log(fav);


    }else{
      const res = await API.favorites.deleteFavorite(
        favId
      );
      setFavId("");
      setFav(false);

      console.log("NO FAV", res);
      console.log(fav);
    }




  }
  return (
    <Card
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
          align="center"
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
              <StarIcon className={classes.statsIcon} color = {fav ? 'primary' : 'error'} />
            </IconButton>: <React.Fragment/>}
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
