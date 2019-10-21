import React, { useState, Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Link, withRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { CarsToolbar, CarCard } from './components';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const base_url = "http://52.5.42.71:8080";
const url = base_url + "/posts/"

const styles = theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});

class CarList extends Component{

  constructor(props){
    super(props);

    this.state = {
      isDataLoaded: false,
      datosCarros: []
    };
  }

  async componentDidMount(){
    await this.setState( {isDataLoaded: true} );
    this.cargarDatos();
  }

  async cargarDatos () {
    await axios({
	url
    })
      .then((response) => {
        let data = response.data

        this.setState({
          datosCarros: data
        })
      })
      .catch(err => console.log(err))
  }

  render(){
    const { classes } = this.props;

  return (
    <div className={classes.root}>
      <CarsToolbar />
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {this.state.datosCarros.map(car => (
            <Grid
              item
              key={car.id}
              lg={4}
              md={6}
              xs={12}
            >
              <CarCard car={car} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.pagination}>
        <Typography variant="caption">1-6 of 20</Typography>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
}
};

export default withRouter(withStyles(styles)(CarList));
