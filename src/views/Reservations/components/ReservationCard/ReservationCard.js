import React, {useState, useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
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
import GetAppIcon from '@material-ui/icons/GetApp';
import { API } from 'API';
import {UserContext} from '../../../../contexts/UserContext'
import { Link as RouterLink } from 'react-router-dom';
import { forwardRef } from 'react';
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

const ruta = '/reservationDetail';
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

const ReservationCard = props => {
  const { className, reservation, ...rest } = props;
  const {user} = useContext(UserContext);
  const classes = useStyles();

  const [post,setPost] = useState([]);

  useEffect(()=>{
    const fetchPostData = async ()=>{
      let receivedPostData = await API.postProvider.getById(reservation.postId)
      if(receivedPostData && receivedPostData.status === 200){
	setPost(Object.assign({},post,receivedPostData.data));
	}
    }
console.log("post",post);
    fetchPostData();
    },[]);


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
          align="center"
          component={CustomRouterLink}
          to={ruta+'/'+reservation.id}
          variant="h4"
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
    </Card>
  );
};

ReservationCard.propTypes = {
  className: PropTypes.string,
  reservation: PropTypes.object.isRequired
};

export default ReservationCard;
