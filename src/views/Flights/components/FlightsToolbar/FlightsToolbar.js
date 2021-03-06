import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { UserContext } from 'contexts/UserContext';
import Dialog from '@material-ui/core/Dialog';
import { AlertSessionNotStarted } from 'components';

const FlightInsert = '/postInsert/flight';

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
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const FlightsToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

const [open, setOpen] = React.useState(false);
  const { user } = useContext(UserContext);

  const AlertDescription = {
    titulo:'Usted no ha iniciado sesion ó no tiene los permisos necesarios',
    contenido:'Para continuar con la accion deseada, por favor inicie sesion en modo proveedor.',
    opcion:'sign - in',
    ruta:'/sign-in'
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };	

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
{(user.logged && user.rol==="PROVIDER") ?
        <Button
          color="primary"
          component={CustomRouterLink}
          to={FlightInsert}
          variant="contained"
        >
          Add flight
        </Button>
:
        <Button
          color="primary"
	  onClick={handleClickOpen}
          variant="contained"
        >
          Add flight
        </Button>
}
      </div>

      <Dialog 
        open={open}
        onClose={handleClose}
      >
        <AlertSessionNotStarted
          AlertDescription={AlertDescription}
        />
      </Dialog>

    </div>
  );
};

FlightsToolbar.propTypes = {
  className: PropTypes.string
};

export default FlightsToolbar;
