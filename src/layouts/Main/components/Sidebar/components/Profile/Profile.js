import React, {useContext} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import {UserContext} from '../../../../../../contexts/UserContext';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const Profile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  let {user} = useContext(UserContext);
  user = {...user, avatar:'/images/avatars/avatar_11.png' };
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        alt="Person"
        className={classes.avatar}
        src={user.avatar}

      />
      <Typography
        className={classes.name}
        component={RouterLink}
        to="/account"
        variant="h4"
      >
        {user.firstName} &nbsp;<SettingsIcon style={{ fontSize:18}} />
      </Typography>
      <Typography
        className={classes.name}
        variant="h5"
      >
        {user.rol}
      </Typography>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
