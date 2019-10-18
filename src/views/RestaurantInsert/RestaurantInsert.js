import React from 'react';
import { makeStyles } from '@material-ui/styles';


import { InsertRestaurant} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const RestaurantInsert = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InsertRestaurant />
    </div>
  );
};

export default RestaurantInsert;
