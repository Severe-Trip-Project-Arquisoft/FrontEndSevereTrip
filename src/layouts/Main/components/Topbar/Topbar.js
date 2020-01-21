import React, { useContext, useState } from 'react';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Hidden, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { UserContext } from '../../../../contexts/UserContext';

import { ProductsToolbar} from './components';
import AuthService from '../../../../views/AuthService/AuthService';

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

  const { user } = useContext(UserContext);
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
        {(user.logged) ? '' :
          <Button
            activeclassname={classes.active}
            className={classes.signOutButton}
            color="inherit"
            component={CustomRouterLink}
            to={'/sign-in'}
          >
            Ingresar
          </Button>}
        {(!user.logged) ? '' :
          <IconButton
            activeclassname={classes.active}
            className={classes.signOutButton}
            color="inherit"
            component={CustomRouterLink}
            to={'/sign-up'}
            onClick={AuthService.logOut}
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
