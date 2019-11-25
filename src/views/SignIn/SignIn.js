import React, { useState, useEffect, useContext } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import {
  Grid,
  Button,
  TextField,
  Link,
  Typography,
  MenuItem
} from '@material-ui/core';
import { UserContext } from '../../contexts/UserContext';
import AuthService from '../AuthService/AuthService';
import Dialog from '@material-ui/core/Dialog';
import { AlertSessionNotStarted } from 'components';
import {API} from '../../API';

const schema = {
  userName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 64
    }
  },
  rol: {
    presence: { allowEmpty: false, message: 'is required' },
  },
};

const currencies = [
  {
    value: 'provider',
    label: 'provider',
  },
  {
    value: 'client',
    label: 'client',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  name: {
    marginTop: theme.spacing(3),
  },
  contentContainer: {},
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  // logoImage: {
  //   marginLeft: theme.spacing(4)
  // },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    },
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  form: {
    // paddingTop: 100,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 50,
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
  },
  title: {
    marginTop: theme.spacing(3),
    
  },
  textField: {
    marginTop: theme.spacing(2),
  },
  signInButton: {
    margin: theme.spacing(2, 0),
  },
}));

const SignIn = props => {
  const { history } = props;
  const { setUser } = useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const AlertDescription = {
    titulo:'Error de inicio de sesion',
    contenido:'Su usuario o contraseña no coinciden',
    opcion:'Registrarse',
    ruta:'/sign-up'
  };

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState(formState => ({
      ...formState,
      isValid: !errors,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();    

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSignIn = async event => {
    event.preventDefault();
    const credentials = {username: formState.values.userName, password: formState.values.password};     
	
    var dialogo1 = true;
    var dialogo2 = true;

    await AuthService.login(credentials).then(res => {
      //      console.log(res);
        
      if(res && res.status === 200){
        sessionStorage.setItem('userInfo', JSON.stringify(res.headers.authorization).substr(1,JSON.stringify(res.headers.authorization).length-2));
        //console.log(sessionStorage.getItem('userInfo'));
        axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('userInfo');
        dialogo1 =false;
      }
    }).catch((error) => {
      dialogo1 =true;
      console.log(error);
    });

    await API.users.getByName(credentials.username).then( userRes => {
      //          console.log(userRes);
      if(userRes && userRes.status === 200){
        setUser({...userRes.data,
          logged: true
        });
        dialogo2 =false;
      }
    }).catch((error) => {
      console.log(error);
    });

    //console.log("dialogo1...",dialogo1);
    //console.log("dialogo2...",dialogo2);
    if(dialogo1 || dialogo2){
      handleClickOpen();
    }else{
      history.push('/posts');
    }
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <Grid
        className={classes.grid}
        container
      >
        <Grid
          className={classes.content}
          item
          lg={7}
          xs={12}
        >
          
          <div className={classes.contentBody}>
            <form
              className={classes.form}
              onSubmit={handleSignIn}
            >
              <Typography
                className={classes.title}
                variant="h2"
              >
                  Sign in
              </Typography>
              <TextField
                className={classes.textField}
                error={hasError('rol')}
                fullWidth
                helperText={
                  hasError('rol') ? formState.errors.rol[0] : null
                }
                label="Select your rol"
                name="rol"
                onChange={handleChange}
                select
                value={formState.values.rol || ''}
                variant="outlined"
              >
                {currencies.map(option => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                className={classes.textField}
                error={hasError('userName')}
                fullWidth
                helperText={
                  hasError('userName') ? formState.errors.userName[0] : null
                }
                label="User name"
                name="userName"
                onChange={handleChange}
                type="text"
                value={formState.values.userName || ''}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                error={hasError('password')}
                fullWidth
                helperText={
                  hasError('password') ? formState.errors.password[0] : null
                }
                label="Password"
                name="password"
                onChange={handleChange}
                type="password"
                value={formState.values.password || ''}
                variant="outlined"
              />
              <Button
                className={classes.signInButton}
                color="primary"
                disabled={!formState.isValid}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                  Sign in now
              </Button>
              <Typography
                color="textSecondary"
                variant="body1"
              >
                  Don't have an account?{' '}
                <Link
                  component={RouterLink}
                  to="/sign-up"
                  variant="h6"
                >
                    Sign up
                </Link>
              </Typography>
            </form>
          </div>
        </Grid>
      </Grid>


      <Dialog 
        onClose={handleClose}
        open={open}
      >
        <AlertSessionNotStarted
          AlertDescription={AlertDescription}
        />
      </Dialog>

	
    </div>
  );
};

SignIn.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignIn);
