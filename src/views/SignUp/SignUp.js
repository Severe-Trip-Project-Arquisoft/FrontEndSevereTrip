import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  TextField,
  Link,
  FormHelperText,
  Checkbox,
  Typography,
  MenuItem
} from '@material-ui/core';
import { API } from 'API';

import MuiPhoneNumber from 'material-ui-phone-number'

const schema = {
  firstName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  lastName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  address: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  country: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  },
  cellphone: {
    presence: { allowEmpty: false, message: 'is required' },
  },
  rol: {
    presence: { allowEmpty: false, message: 'is required' },
  },
  policy: {
    presence: { allowEmpty: false, message: 'is required' },
    checked: true
  }
};
const currencies = [
  {
    value: 'provider',
    label: 'Proveedor',
  },
  {
    value: 'client',
    label: 'Cliente',
  },
];

const currenciesCountry = [
  {
    value: 'Antigua y Barbuda',
    label: 'Antigua y Barbuda',
  }, {
    value: 'Argentina',
    label: 'Argentina',
  }, {
    value: 'Bahamas',
    label: 'Bahamas',
  }, {
    value: 'Barbados',
    label: 'Barbados',
  }, {
    value: 'Belice',
    label: 'Belice',
  }, {
    value: 'Bolivia',
    label: 'Bolivia',
  }, {
    value: 'Brasil',
    label: 'Brasil',
  }, {
    value: 'Canadá',
    label: 'Canadá',
  }, {
    value: 'Chile',
    label: 'Chile',
  }, {
    value: 'Colombia',
    label: 'Colombia',
  }, {
    value: 'Costa Rica',
    label: 'Costa Rica',
  }, {
    value: 'Cuba',
    label: 'Cuba',
  }, {
    value: 'Dominica',
    label: 'Dominica',
  }, {
    value: 'Ecuador',
    label: 'Ecuador',
  }, {
    value: 'El Salvador',
    label: 'El Salvador',
  }, {
    value: 'Estados Unidos',
    label: 'Estados Unidos',
  }, {
    value: 'Granada',
    label: 'Granada',
  }, {
    value: 'Guatemala',
    label: 'Guatemala',
  },
  {
    value: 'Guyana',
    label: 'Guyana',
  },
  {
    value: 'Haití',
    label: 'Haití',
  },
  {
    value: 'Honduras',
    label: 'Honduras',
  },
  {
    value: 'Jamaica',
    label: 'Jamaica',
  },
  {
    value: 'México',
    label: 'México',
  },
  {
    value: 'Nicaragua',
    label: 'Nicaragua',
  },
  {
    value: 'Panamá',
    label: 'Panamá',
  },
  {
    value: 'Paraguay',
    label: 'Paraguay',
  },
  {
    value: 'Perú',
    label: 'Perú',
  },
  {
    value: 'República Dominicana',
    label: 'República Dominicana',
  },
  {
    value: 'San Cristóbal y Nieves',
    label: 'San Cristóbal y Nieves',
  },
  {
    value: 'San Vicente y las Granadinas',
    label: 'San Vicente y las Granadinas',
  },
  {
    value: 'Santa Lucía',
    label: 'Santa Lucía',
  },
  {
    value: 'Surinam',
    label: 'Surinam',
  },
  {
    value: 'Trinidad y Tobago',
    label: 'Trinidad y Tobago',
  },
  {
    value: 'Uruguay',
    label: 'Uruguay',
  },
  {
    value: 'Venezuela',
    label: 'Venezuela',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: theme.palette.background.default,
    height: '100%'
  },
  // grid: {
  //   height: '100%'
  // },
  contentContainer: {},
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
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
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '25px'
  },
  form: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 50,
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(3)
  },
  textField: {
    marginTop: theme.spacing(2),
  },
  policy: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  },
  policyCheckbox: {
    marginLeft: '-14px'
  },
  signUpButton: {
    margin: theme.spacing(2, 0)
  }
}));

const SignUp = props => {
  const { history } = props;

  const classes = useStyles();


  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      },
    }));
    
  };

  const handleChangeCellphone = value => {

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        cellphone : value
      },
      touched: {
        ...formState.touched,
        cellphone : true
      },
    }));
  };

  function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  const handleSignUp = async event => {
    event.preventDefault();
    var data;
    if (formState.values.rol === 'client') {
      data = {

        username: formState.values.userName,
        firstName: formState.values.firstName,
        secondName: formState.values.lastName,
        localAirport: "Aeropuerto internacional Jonathan Brando",
        email: formState.values.email,
        address: formState.values.address,
        city: "Bogota",
        stateProvinceRegion: "Cundinamarca",
        postalCode: "11001",
        country: formState.values.country,
        cellphone: formState.values.cellphone,
        password: formState.values.password,
        favorites: []
      }

      console.log('envio cliente...', data)
      const res = await API.users.createClient(data);
      console.log('respuesta creaci0n cliente...', res)
    }
    if (formState.values.rol === 'provider') {
      data = {
        username: formState.values.userName,
        firstName: formState.values.firstName,
        secondName: formState.values.lastName,
        yearsExperience: numeroAleatorio(1, 20),
        bankAccount: numeroAleatorio(45000000, 60000000),
        updateDate: (new Date()).toJSON(),
        email: formState.values.email,
        address: formState.values.address,
        country: formState.values.country,
        city: "Bogota",
        cellphone: formState.values.cellphone,
        password: formState.values.password

      }

      console.log('envio proveedor...', data)
      const res = await API.users.createProvider(data);
      console.log('respuesta creacion proveedor...', res)
    }
    history.push('/sign-in');
  };

  const hasError = field =>
    !!(formState.touched[field] && formState.errors[field]);

  return (
    <div className={classes.root}>

      <div className={classes.content}>
        <div className={classes.contentBody}>
          <form
            className={classes.form}
            onSubmit={handleSignUp}
          >
            <Grid
              container
              // spacing={1}
            >

              <Grid
                item
                // md={12}
                xs={12}
              >
                <Typography
                  className={classes.title}
                  variant="h2"
                >
                  Crea una cuenta nueva
  		          </Typography>
                <Typography
                  color="textSecondary"
                  gutterBottom
                >
                  Ingresa tus datos para crear una cuenta nueva.
	              </Typography>
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  className={classes.textField}
                  error={hasError('userName')}
                  fullWidth
                  helperText={
                    hasError('userName') ? formState.errors.userName[0] : null
                  }
                  label="Nombre de usuario"
                  name="userName"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.userName || ''}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  className={classes.textField}
                  error={hasError('email')}
                  fullWidth
                  helperText={
                    hasError('email') ? formState.errors.email[0] : null
                  }
                  label="Email"
                  name="email"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.email || ''}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  className={classes.textField}
                  error={hasError('password')}
                  fullWidth
                  helperText={
                    hasError('password') ? formState.errors.password[0] : null
                  }
                  label="Contraseña"
                  name="password"
                  onChange={handleChange}
                  type="password"
                  value={formState.values.password || ''}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  className={classes.textField}
                  error={hasError('firstName')}
                  fullWidth
                  helperText={
                    hasError('firstName') ? formState.errors.firstName[0] : null
                  }
                  label="Nombre"
                  name="firstName"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.firstName || ''}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  className={classes.textField}
                  error={hasError('lastName')}
                  fullWidth
                  helperText={
                    hasError('lastName') ? formState.errors.lastName[0] : null
                  }
                  label="Apellido"
                  name="lastName"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.lastName || ''}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  className={classes.textField}
                  error={hasError('address')}
                  fullWidth
                  helperText={
                    hasError('address') ? formState.errors.address[0] : null
                  }
                  label="Dirección"
                  name="address"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.address || ''}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  className={classes.textField}
                  error={hasError('country')}
                  fullWidth
                  helperText={
                    hasError('country') ? formState.errors.country[0] : null
                  }
                  label="Selecciona tu país"
                  name="country"
                  onChange={handleChange}
                  select
                  // type="text"
                  value={formState.values.country || ''}
                  variant="outlined"
                >
                  {currenciesCountry.map(option => (
                    <MenuItem
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <MuiPhoneNumber 
                  defaultCountry={'co'} 
                  className={classes.textField}
                  error={hasError('cellphone')}
                  fullWidth
                  helperText={
                    hasError('cellphone') ? formState.errors.cellphone[0] : null
                  }
                  label="Telefono móvil"
                  name="cellphone"
                  onChange={handleChangeCellphone}
                  value={formState.values.cellphone || ''}
                  variant="outlined"
                  />
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  className={classes.textField}
                  error={hasError('rol')}
                  fullWidth
                  helperText={
                    hasError('rol') ? formState.errors.rol[0] : null
                  }
                  label="Elige tu rol"
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
              </Grid>
              <div className={classes.policy}>
                <Checkbox
                  checked={formState.values.policy || false}
                  className={classes.policyCheckbox}
                  color="primary"
                  name="policy"
                  onChange={handleChange}
                />
                <Typography
                  className={classes.policyText}
                  color="textSecondary"
                  variant="body1"
                >
                  He leido los {' '}
                  <Link
                    color="primary"
                    component={RouterLink}
                    to="#"
                    underline="always"
                    variant="h6"
                  >
                    Terminos y condiciones
                  </Link>
                </Typography>
              </div>
              {hasError('policy') && (
                <FormHelperText error>
                  {formState.errors.policy[0]}
                </FormHelperText>
              )}
              <Button
                className={classes.signUpButton}
                color="primary"
                disabled={!formState.isValid}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Registrarse ahora
              </Button>
              <Typography
                color="textSecondary"
                variant="body1"
              >
                ¿Ya tienes una cuenta?{' '}
                <Link
                  component={RouterLink}
                  to="/sign-in"
                  variant="h6"
                >
                  Ingresar
                </Link>
              </Typography>

            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignUp);
