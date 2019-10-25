import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { Link as RouterLink, withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const ReservationsToolbar = props => {
  const { className } = props;

  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button
          color="primary"
          variant="contained"
          component={ RouterLink }
          to="/doingReservations"
        >
          Add reservation
        </Button>
      </div>
    </div>
  );
};

ReservationsToolbar.propTypes = {
  className: PropTypes.string
};

export default withRouter(ReservationsToolbar);
