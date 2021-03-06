import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  LinearProgress
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  details: {
    display: 'flex'
  },
  avatar: {
    marginLeft: 'auto',
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  }
}));

const AccountProfile = props => {
  const { className, user, ...rest } = props;
  const classes = useStyles();
  // ------------------------
  // console.log('accountProfile:...----------------------');
  // console.log(user);
  // ----------------------------------------------------------

  return (
    <React.Fragment>
      { (user.logged) ?
        <Card
          {...rest}
          className={clsx(classes.root, className)}
        >
          <CardContent>
            <div className={classes.details}>
              <div>
                <Typography
                  gutterBottom
                  variant="h2"
                >
                  {`${user.firstName} ${user.secondName}` }
                </Typography>
                <Typography
                  className={classes.locationText}
                  color="textSecondary"
                  variant="body1"
                >
                  {user.country}
                </Typography>
                <Typography
                  className={classes.dateText}
                  color="textSecondary"
                  variant="body1"
                />
              </div>
              <Avatar
                className={classes.avatar}
                src={user.avatar}
              />
            </div>
          </CardContent>
        </Card>:<div/>}
    </React.Fragment>
  );
};

AccountProfile.propTypes = {
  className: PropTypes.string
};

export default AccountProfile;
