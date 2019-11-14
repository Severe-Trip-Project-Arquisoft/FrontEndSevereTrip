import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
  >
    <RouterLink {...props} />
  </div>
));

const AlertSessionNotStarted = props => {
  const { AlertDescription } = props;
  const [open, setOpen] = React.useState(true);

//console.log(AlertDescription);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          {AlertDescription.titulo}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {AlertDescription.contenido}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button 
	    component={CustomRouterLink}
            to={AlertDescription.ruta}
            color="primary"
	    variant="contained"
	  >
            {AlertDescription.opcion}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};


/*AlertSessionNotStarted.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object
};*/

export default AlertSessionNotStarted;
