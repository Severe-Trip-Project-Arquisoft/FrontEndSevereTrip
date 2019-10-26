import React, { useState, useEffect, useContext } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Link,
  FormHelperText,
  Checkbox,
  Typography,
  MenuItem
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { API } from 'HTTPRequests';
import {UserContext} from '../../contexts/UserContext';

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
    length: {
      maximum: 12
    }
  },
  policy: {
    presence: { allowEmpty: false, message: 'is required' },
    checked: true
  }
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
    backgroundColor: theme.palette.background.default,
    height: '100%'
  },
  grid: {
    height: '100%'
  },
  quoteContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  quote: {
    backgroundColor: theme.palette.neutral,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/images/auth.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px'
  },
  quoteText: {
    color: theme.palette.white,
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.white
  },
  bio: {
    color: theme.palette.white
  },
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
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
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

const SignUp = ({history }) => {

  const classes = useStyles();
  const {user, setUser} = useContext(UserContext);

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  const [values2, setValues] = useState({
    currency: 'client',
  });
  const numeroAleatorio = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  }
  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: !errors,
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

  const handleChange2 = name => event => {
    setValues({ ...values2, [name]: event.target.value });
  };

  const handleBack = () => {
    history.goBack();
  };
  const handleSignUp = async event => {
    event.preventDefault();
    let data;
    let res;
    console.log(formState.values.rol);
    if(formState.values.rol === 'client'){
      data = {
        'clientId': formState.values.userName,
        'firstName': formState.values.firstName,
        'secondName': formState.values.lastName,
        'localAirport': 'Aeropuerto internacional Jonathan Brando',
        'email': formState.values.email,
        'address': formState.values.address,
        'city': 'Bogota',
        'stateProvinceRegion': 'Cundinamarca',
        'postalCode': '11001',
        'country': formState.values.country,
        'cellphone': formState.values.cellphone
      }
      res = await API.client.insertClient(data);
    }
    if(formState.values.rol === 'provider'){
      data = {
        'providerId': formState.values.userName,
        'firstName': formState.values.firstName,
        'secondName': formState.values.lastName,
        'localAirport': 'Aeropuerto internacional Jonathan Brando',
        'bankAccount': numeroAleatorio(45000000, 60000000),
        'yearsExperience': numeroAleatorio(1, 20),
        'updateDate': new Date(),
        'email': formState.values.email,
        'address': formState.values.address,
        'city': 'Bogota',
        'stateProvinceRegion': 'Cundinamarca',
        'postalCode': '11001',
        'country': formState.values.country,
        'cellphone': formState.values.cellphone
      }
      res = await API.provider.insertProvider(data);
    }
    if(res && res.status === 200){
      setUser(
        {...user,
          data,
          rol: formState.values.rol
        })
      console.log('envio...' + data)
      history.push('/sign-in');

    }
  };
  const hasError = field => (!!(formState.touched[field] && formState.errors[field]));
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.contentHeader}>
          <IconButton onClick={handleBack}>
            <ArrowBackIcon />
          </IconButton>
        </div>
        <div className={classes.contentBody}>
          <form
            className={classes.form}
            onSubmit={handleSignUp}
          >
            <Grid
              container
              spacing={3}
            >

              <Grid
                item
                md={12}
                xs={12}
              >
                <Typography
                  className={classes.title}
                  variant="h2"
                >
                    Create new account
                </Typography>
                <Typography
                  color="textSecondary"
                  gutterBottom
                >
                    Use your email to create new account
                </Typography>
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  className={classes.textField}
                  error={hasError('username')}
                  fullWidth
                  helperText={
                    hasError('username') ? formState.errors.username[0] : null
                  }
                  label="Username"
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
                  label="Email address"
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
                  label="Password"
                  name="password"
                  onChange={handleChange}
                  type="password"
                  value={formState.values.password || ''}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  className={classes.textField}
                  error={hasError('firstName')}
                  fullWidth
                  helperText={
                    hasError('firstName') ? formState.errors.firstName[0] : null
                  }
                  label="First name"
                  name="firstName"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.firstName || ''}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  className={classes.textField}
                  error={hasError('lastName')}
                  fullWidth
                  helperText={
                    hasError('lastName') ? formState.errors.lastName[0] : null
                  }
                  label="Last name"
                  name="lastName"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.lastName || ''}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  className={classes.textField}
                  error={hasError('address')}
                  fullWidth
                  helperText={
                    hasError('address') ? formState.errors.address[0] : null
                  }
                  label="Address"
                  name="address"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.address || ''}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  className={classes.textField}
                  error={hasError('country')}
                  fullWidth
                  helperText={
                    hasError('country') ? formState.errors.country[0] : null
                  }
                  label="Country"
                  name="country"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.country || ''}
                  variant="outlined"
                />
              </Grid>


              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  className={classes.textField}
                  error={hasError('cellphone')}
                  fullWidth
                  helperText={
                    hasError('cellphone') ? formState.errors.cellphone[0] : null
                  }
                  label="Cellphone"
                  name="cellphone"
                  onChange={handleChange}
                  type="number"
                  value={formState.values.cellphone || ''}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  className={classes.textField}
                  error={hasError('rol')}
                  fullWidth
                  helperText={
                    hasError('rol') ? formState.errors.rol[0] : null
                  }
                  label="Select your rol"
                  name="rol"
                  onChange={handleChange2('currency')}
                  select
                  value={values2.currency}
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
                    I have read the{' '}
                  <Link
                    color="primary"
                    component={RouterLink}
                    to="#"
                    underline="always"
                    variant="h6"
                  >
                        Terms and Conditions
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
                    Sign up now
              </Button>
              <Typography
                color="textSecondary"
                variant="body1"
              >
                    Have an account?{' '}
                <Link
                  component={RouterLink}
                  to="/sign-in"
                  variant="h6"
                >
                    Sign in
                </Link>
              </Typography>

            </Grid>
          </form>
        </div>
      </div>
    </div>
  );

}

SignUp.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignUp);
