import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Topbar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 10,
    height: '100%',
  },
  content: {
    height: '50%',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/featured/?travel)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '40%',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    alignItems: 'center',
  }, 
  grid:{
    backgroundColor: 'transparent',
  }
}));

const Minimal = props => {
  const { children } = props;

  const classes = useStyles();

  return (     
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Topbar />
        <Grid container justify="center" className={classes.image}>
          <Grid item xs={12} sm={8} md={5} className={classes.grid}>
            <div className={classes.paper}>
                <main 
                  className={classes.content}
                  >
                    {children}
                </main>
            </div>
          </Grid>
        </Grid>
    </Grid>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Minimal;
