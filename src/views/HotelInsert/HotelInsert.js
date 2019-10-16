import React from 'react';
import { makeStyles } from '@material-ui/styles';


import { InsertHT} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const HotelInsert = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InsertHT />
    </div>
  );
};

export default HotelInsert;
