import React, {useEffect, useState, useContext} from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { UserContext }  from '../../contexts/UserContext';
import { PostCard } from './components';
import { API }  from 'API';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(0),
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '10px'
  },
  postCard: {
    alignContent: 'stretch'
  }
}));

const PostList = () => {
// borrar datos de prueba
  const datosPrueba = [{
    'id':'12h1h4uhdtjtkdstd413h',
    'name':'pruebaName1',
    'serviceType':'Hotel',
    'description':'PRUEBA Interesante prueba',
    'city':'pruebaBogota',
  },
  {
    'id':'12h1h4uh4432ghusye413h',
    'name':'pruebaName2',
    'serviceType':'rentCar',
    'description':'PRUEBA Interesante prueba',
    'city':'pruebaBogota',
  },
  {
    'id':'12h1dhshsth4uh413h',
    'name':'pruebaName3',
    'serviceType':'flight',
    'description':'PRUEBA Interesante prueba',
    'city':'pruebaBogota',
  },
  {
    'id':'12h1h4uh34gg4413h',
    'name':'pruebaName4',
    'serviceType':'restaurant',
    'description':'PRUEBA Interesante prueba',
    'city':'pruebaBogota',
  },
  {
    'id':'12h1h4uhdtje45j7tkdstd413h',
    'name':'pruebaName5',
    'serviceType':'Hotel',
    'description':'PRUEBA Interesante prueba',
    'city':'pruebaBogota',
  },
  {
    'id':'12h1h4uh4u6l,4432ghusye413h',
    'name':'pruebaName6',
    'serviceType':'rentCar',
    'description':'PRUEBA Interesante prueba',
    'city':'pruebaBogota',
  },
  {
    'id':'12h1dhyyjshsth4uh413h',
    'name':'pruebaName7',
    'serviceType':'flight',
    'description':'PRUEBA Interesante prueba',
    'city':'pruebaBogota',
  },
  {
    'id':'12h1h4uh3334gg4413h',
    'name':'pruebaName8',
    'serviceType':'restaurant',
    'description':'PRUEBA Interesante prueba',
    'city':'pruebaBogota',
  }]

  const [state, setState] = useState ({
    // posts : [],
    posts : datosPrueba,
    favorites: {},
  });

  const [data, setData] = useState([]);
  const [enteredFilter, setEnteredFilter] = useState("");

  const {user} = useContext(UserContext);
  useEffect( ()=>{

    const fetchData = async ()=>{
      let res = await API.postProvider.getAll();
      let favorites = {}
      //TO-DO: Esta verificación no sería necesaria si en el micro de favoritos se creara una petición para determinar si se es favorito o no.
      if(res && res.status === 200) {
        for (let postId in res.data) {
          favorites[postId] = false;
        }
        let resF = [];
        if(user.rol === 'client')
          resF = await API.favorites.getById(user.id);
        for (let fav in resF.data) {
          favorites[fav.postId] = true;
        }

        setState(
          {
            posts: res.data,
            favorites,
          }
        )

        setData(res.data)
      }
    }
    fetchData();

  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let filteredData = state.posts.filter(item => {
        return item.name.toLowerCase().includes(enteredFilter.toLowerCase());
      });
      setData(filteredData);
    };
    fetchData();
  }, [enteredFilter]);  

  const classes = useStyles();

  return (

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
        <Grid
          container
          spacing={3}
        >
          {data.map(post => (
            <Grid
              className={classes.postCard}
              item
              key={post.id}
              lg={4}
              md={6}
              xs={12}
            >
              <PostCard
                favorite = {user.logged ? state.favorites[post.id] : false}
                post={post}
              />
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


export default (PostList);
