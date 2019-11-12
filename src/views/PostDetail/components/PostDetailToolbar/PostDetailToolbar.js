import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Dialog from '@material-ui/core/Dialog';
import { AlertSessionNotStarted } from 'components';

import { UserContext } from 'contexts/UserContext';
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

const PostDetailToolbar = props => {
  const { className } = props;
  const [open, setOpen] = React.useState(false);
  const { postId } = props;
  const { user } = useContext(UserContext);

  const classes = useStyles();
//  console.log(postId);

  const AlertDescription = {
    titulo:'Usted no ha iniciado sesion ó no tiene los permisos necesarios',
    contenido:'Para continuar con la accion deseada, por favor inicie sesion en modo cliente.',
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
      
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
{(user.logged && user.rol==="PROVIDER") ?
        <Button
          color="primary"
          component={CustomRouterLink}
          to={DeleteHotel}
          variant="contained"
        >
          Delete hotel
        </Button>
:
<div></div>
}

{(user.logged && user.rol==="CLIENT") ?
        <Button
          color="primary"
          component={CustomRouterLink}
          to={Reservation+'/'+postId}
          variant="contained"
        >
          booking
        </Button>
:
        <Button
          color="primary"
          variant="contained"
	  onClick={handleClickOpen}
        >
          Booking
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

PostDetailToolbar.propTypes = {
  className: PropTypes.string
};

export default PostDetailToolbar;
