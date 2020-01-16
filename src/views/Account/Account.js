import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { AccountProfile, AccountDetails, AccountNotifications, AccountPassword } from './components';
import {UserContext} from '../../contexts/UserContext'
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));
const Account = () => {
  const classes = useStyles();
  const {user} = useContext(UserContext);
  // ------------------------ borrar
  // console.log('Account:...----------------------');
  // console.log(user)
  // -------------------------------------------
  return (
    user.logged ?
      <div className={classes.root}>
        <Grid
          container
          spacing={4}
        >
          <Grid
            item
            lg={4}
            md={6}
            xl={4}
            xs={12}
          >
            <AccountProfile user = {user} />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xl={8}
            xs={12}
          >
            <AccountNotifications />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <AccountDetails user = {user} />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <AccountPassword user = {user} />
          </Grid>
        </Grid>
      </div>
      : <div/>

  );
};

export default Account;
