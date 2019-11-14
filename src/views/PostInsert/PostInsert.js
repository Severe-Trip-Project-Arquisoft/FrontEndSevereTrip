import React from 'react';
import { makeStyles } from '@material-ui/styles';


import { InsertPT} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const PostInsert = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InsertPT />
    </div>
  );
};

export default PostInsert;
