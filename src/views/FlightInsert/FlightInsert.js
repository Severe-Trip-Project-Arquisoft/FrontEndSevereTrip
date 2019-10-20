import React from 'react';
import { makeStyles } from '@material-ui/styles';


import { InsertFlight} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const FlightInsert = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InsertFlight />
    </div>
  );
};

export default FlightInsert;
