import React , {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import {API} from 'API';
import {amber,blue, blueGrey, brown, deepPurple, pink, green, orange, red, lightGreen, lightBlue, lime, yellow, deepOrange, purple, teal, indigo, cyan} from '@material-ui/core/colors'
const colors = [amber,blue, blueGrey, brown, deepPurple, pink, green, orange, red, lightGreen, lightBlue, lime, yellow, deepOrange, purple, teal, indigo, cyan]
const styles = theme => ({
  comment: {
    marginBottom: theme.spacing(1)
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    backgroundColor: colors[~~(Math.random() * colors.length)][500]
  }
});

const Comment = props =>{


  const { classes, comment } = props;

  const [user, setUser] = useState( {
    loaded: false,
    username: 'Anónimo'
  });


  useEffect(
    () =>{      
      const fetchData = async () =>{
        const res = await API.users.getById(comment.clientId);
        console.log(res);
        if(res) {
          if(res.status === 200){
            setUser(
              {  ...user, ...res.data , loaded: true }
            );
          }
          else if (res.status=== 200){
            setUser(
              {  ...user, loaded: false }
            );
          }
        }

      }
      fetchData();
    }

    ,[]);

  return (   
        
    <Card className = {classes.comment}>  
      <CardContent>
        <Grid
          alignItems="center"
          container
          direction="row"
          justify="flex-start"
        >

          <Grid
            item
            xs={1}
          >

            <Avatar
              aria-label="recipe" 
              className = {classes.avatar}
            >
              {user.loaded ? user.username[0].toUpperCase() : 'A' }
            </Avatar>


          </Grid>
          <Grid
            item
            xs={3}
          >   
            <Typography variant = "h3" > 
              {user.loaded ? user.username : 'Anónimo' }
            </Typography>
            <Typography variant = "body1" > 
              {user.loaded ? `${user.firstName} ${user.secondName} ` : '' }
            </Typography>

          </Grid>
          <Grid
            item
            xs={6}
          >   
            <Typography variant = "h4" > 
              {comment.title!== undefined && comment.title!== null && comment.title.length > 0 ? comment.title : '' }
            </Typography>
            <Typography variant = "body1" > 
              {comment.content!== undefined && comment.content!== null && comment.content.length > 0 ? comment.content : '' }
            </Typography>
                        

          </Grid>
          <Rating
            name="hover-side"
            readOnly
            value={comment.rating}
          />


        </Grid> 
      </CardContent>
    </Card>
  )
}
Comment.propTypes = {
  className: PropTypes.string
};
  
export default withStyles(styles)(Comment);
