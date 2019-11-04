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


const styles = theme => ({
  comment: {
    marginBottom: theme.spacing(1)
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
      const fetchData = async ()=>{
        const res = await API.users.getById(comment.clientId);
        console.log(res);
        if(res.status === 200){
          setUser( 
            {   username : res.data.clientId , loaded: true } 
          );
        }
                
      }   
      fetchData();


    }

  );

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

            <Avatar aria-label="recipe" > 
              {user !== null && user !== undefined &&user.username!== undefined && user.username!== null && user.username.length > 0 ? user.username[0].toUpperCase() : 'A' }   
                
            </Avatar>


          </Grid>
          <Grid
            item
            xs={3}
          >   
            <Typography variant = "h3" > 
              {user !== null && user !== undefined && user.username!== undefined && user.username!== null && user.username.length > 0 ? user.username : 'Anónimo' }
            </Typography>
            <Typography variant = "body1" > 
              {user !== null && user !== undefined && user.username!== undefined && user.username!== null && user.username.length > 0 ? comment.username : 'Anónimo' }
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


          <Grid
            item
            xs={6}
          >
            <Rating
              name="hover-side"
              readOnly            
              value={comment.rating}                    
            />
          </Grid>
   
        </Grid> 
      </CardContent>
    </Card>
  )
}
Comment.propTypes = {
  className: PropTypes.string
};
  
export default withStyles(styles)(Comment);
