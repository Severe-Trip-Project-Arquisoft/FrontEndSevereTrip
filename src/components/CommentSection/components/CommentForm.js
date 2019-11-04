import React, {useState} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import {API} from 'API';

const styles = theme => ({
  content: {
    marginTop: theme.spacing(2)
  }  
});

const CommentForm =  ({user, postId,classes, reload}) =>{
    
    

  const [hover, setHover] = useState(1);
  const [rating, setRating] = useState(1);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const username = user.firstName;
  const submitComment = async ()=>{

    if( title && content && rating && title !== '' && content !== '' ){
      await API.postProvider.createComment(
        postId,
        {
          title, content, rating, clientId: user.id
        }
      );

      reload();
            
    }

  }


  return (
        
    <Card> 
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" > 
            {username!== undefined && username!== null && username.length > 0 ? username[0] : 'A' }
          </Avatar>
        }           
        title ={
          <Typography variant = "h2" > 
            {username!== undefined && username!== null && username.length > 0 ? username : 'Anónimo' }
          </Typography>                                
        }
      />
      <CardContent>
  
        <TextField
          className={classes.textField}
          id="standard-required"
          label="Requerido"
          margin="normal"
          onChange= {(e)=> {  setTitle(e.target.value)  }}
          placeholder="Titulo"                
          required
        />
                  
        <Rating
          name="hover-side"
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}            
          onClick = {()=>
          {setRating(hover);}
          }
          value={rating}
        />
        
        <TextField
          className={classes.textField}
          fullWidth
          id="outlined-textarea"
          label="Escribe un comentario..."
          margin="normal"
          multiline
          name = "content"
          onChange= {(e)=> {  setContent(e.target.value)  }}
          placeholder="Placeholder"                
          variant="outlined"
        />  


        <Button
          className={classes.button}
          color="primary"
          onClick = {submitComment}        
          variant="contained"
        >
            Send
        </Button>

      </CardContent>
    </Card>
  )
}

CommentForm.propTypes = {
  className: PropTypes.string
};
  
export default withStyles(styles)(CommentForm);
