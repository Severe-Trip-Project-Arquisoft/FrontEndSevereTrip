import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Reservation = '/doingReservations';
const DeleteHotel = '/';

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
  >
    <RouterLink {...props} />
  </div>
));

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 4
  },
  importButton: {
    marginRight: theme.spacing(4)
  },
  exportButton: {
    marginRight: theme.spacing(4)
  }
}));

const HotelsToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button
          color="primary"
          component={CustomRouterLink}
          to={DeleteHotel}
          variant="contained"
        >
          Delete hotel
        </Button>
        <Button
          color="primary"
          component={CustomRouterLink}
          to={Reservation}
          variant="contained"
        >
          Reserve
        </Button>
      </div>
    </div>
  );
};

HotelsToolbar.propTypes = {
  className: PropTypes.string
};

export default HotelsToolbar;
