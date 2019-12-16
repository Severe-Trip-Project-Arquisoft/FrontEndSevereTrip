import React, { useState, useEffect } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import { IconButton, Grid, Typography } from '@material-ui/core';
import { CarsToolbar } from './components';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CircularProgress from '@material-ui/core/CircularProgress'
import {API} from 'API'
import {PostCard} from '../PostList/components';
import TextField from '@material-ui/core/TextField';

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
  },
  progress: {
    display: 'block',
    margin: theme.spacing(3),
    marginLeft: 'auto',
    marginRight: 'auto',   
  }
});

const CarList = (props) => {
  const [state , setState] = useState({
    isDataLoaded: false,
    datosCarros: []
  });

  const [data, setData] = useState([]);
  const [enteredFilter, setEnteredFilter] = useState("");

  useEffect( () => {   
    async function cargarDatos () {
      const rensponse = await API.postProvider.getByType('rentCar')
      .then(res => {
        setState({
          isDataLoaded: true,
          datosCarros: rensponse.data
        })
        setData(rensponse.data)
      })
      .catch(err => console.log(err));
    }
    cargarDatos();
    
    //return () =>{} 
  }  , [])

  useEffect(() => {
    const cargarDatos = async () => {
      let filteredData = state.datosCarros.filter(item => {
        return item.name.toLowerCase().includes(enteredFilter.toLowerCase());
      });
      setData(filteredData);
    };
    cargarDatos();
  }, [enteredFilter]);  

  const { classes } = props;

  return (
    state.isDataLoaded ?
    <div className={classes.root}>
      <div className={classes.content}>
        <form noValidate autoComplete="off">
                <div horizontal-align="left">
                  <TextField
                    className={classes.input}
                    id="standard-full-width"
                    placeholder="Placeholder"
                    label="Search here..."
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={
                      e => setEnteredFilter(e.target.value)
                    }
                  />
                </div>
            </form>
            <CarsToolbar />
        <Grid
          container
          spacing={3}
        >
          {data.map(car => (
            <Grid
              item
              key={car.id}
              lg={4}
              md={6}
              xs={12}
            >
              <PostCard post={car} />
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
    : <div>
        <CircularProgress className={classes.progress} />
      </div>
  );
};

export default withRouter(withStyles(styles)(CarList));
