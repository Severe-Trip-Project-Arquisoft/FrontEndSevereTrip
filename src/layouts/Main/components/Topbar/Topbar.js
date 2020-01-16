import React, { useContext, useState } from 'react';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { UserContext } from '../../../../contexts/UserContext';

import { ProductsToolbar} from './components';

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 'right' }}
  >
    <RouterLink {...props} />
  </div>
));

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);

  const { user } = useContext(UserContext)
  user.avatar = '/images/avatars/avatar_1.png';
// -----------prueba borrar
  user.logged = true;
  user.id = 'eufh478qrg47w47'
  user.rol = 'provider'
  user.firstName = 'Sebastian'
  user.lastName = 'Camacho'
  user.username = 'sebcamacho'
  user.email = 'sebcamacho@julmail.com'
  user.phone = '3113113111'
  user.country = 'Colombia'
  // ----------------------------------

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/">
          <img
            alt="Logo"
            src="/images/logos/LogoSevereTrip.png"
            vspace={'1in'}
          />
        </RouterLink>
        <ProductsToolbar />
        <div className={classes.flexGrow} />

        <IconButton color="inherit">
          <Badge
            badgeContent={notifications.length}
            color="primary"
            variant="dot"
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>
        {(user.logged) ? '' :
          <IconButton
            activeclassname={classes.active}
            className={classes.signOutButton}
            color="inherit"
            component={CustomRouterLink}
            to={'/sign-in'}
          >
            sign in
          </IconButton>}
        {(!user.logged) ? '' :
          <IconButton
            activeclassname={classes.active}
            className={classes.signOutButton}
            color="inherit"
            component={CustomRouterLink}
            to={'/sign-up'}
          >
            <ExitToAppIcon />
          </IconButton>}

        <Hidden lgUp>
          <IconButton
            label="llllll"
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
