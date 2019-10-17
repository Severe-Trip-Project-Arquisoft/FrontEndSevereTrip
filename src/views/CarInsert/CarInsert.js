import React from 'react';
import { makeStyles } from '@material-ui/styles';


import { InsertCar} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const CarInsert = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InsertCar />
    </div>
  );
};

export default CarInsert;
