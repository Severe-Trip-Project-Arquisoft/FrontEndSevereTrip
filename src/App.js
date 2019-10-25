import React, { useState, useMemo } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Chart } from 'react-chartjs-2';
import { chartjs } from './helpers';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import validate from 'validate.js';
import validators from './common/validators';
import {UserContext} from "./contexts/UserContext";


import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';

import Routes from './Routes';


const browserHistory = createBrowserHistory();

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

validate.validators = {
  ...validate.validators,
  ...validators
};

 const App = ()=> {

   const [user, setUser] = useState({
     logged: false
   });
   const globalUser = useMemo( () => ({user, setUser}), [user, setUser]);


    return (
      <UserContext.Provider value = {globalUser}>
        <ThemeProvider theme={theme}>
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </ThemeProvider>
      </UserContext.Provider>

    );

}

export default App;
