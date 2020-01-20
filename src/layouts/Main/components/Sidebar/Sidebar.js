import React, {useContext} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import HotelIcon from '@material-ui/icons/Hotel';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PublicIcon from '@material-ui/icons/Public';
import { Profile, SidebarNav } from './components';
import {UserContext} from '../../../../contexts/UserContext';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;
  const {user} = useContext(UserContext);

  const classes = useStyles();

  const pages = [
    {
      title: 'Posts',
      href: '/posts',
      icon: <PublicIcon />
    },
    {
      title: 'Hoteles',
      href: '/hotels',
      icon: <HotelIcon />
    },
    {
      title: 'Renta de carros',
      href: '/cars',
      icon: <DirectionsCarIcon />
    },
    {
      title: 'Restaurantes',
      href: '/restaurants',
      icon: <RestaurantIcon />
    },
    {
      title: 'Vuelos',
      href: '/flights',
      icon: <FlightTakeoffIcon />
    }
  ];

  if(user.logged)
    pages.unshift({
      title: 'Favoritos',
      href: '/favorites',
      icon: <FavoriteIcon />
    },
    {
      title: 'Reservaciones',
      href: '/reservations',
      icon: <LibraryBooksIcon />
    });

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        { user.logged?
          <React.Fragment>
            <Profile />
            <Divider className={classes.divider} />
          </React.Fragment>:
          <React.Fragment/>
        }
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
