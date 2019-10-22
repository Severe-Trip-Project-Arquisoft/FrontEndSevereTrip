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
import {API} from 'HTTPRequests'

const styles = theme => ({
    content: {
      marginTop: theme.spacing(2)
    }  
  });

const CommentForm = props =>{
const {userId, username, postId} = props

    const [hover, setHover] = React.useState(1);
    const [rating, setRating] = React.useState(1);
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");


    const { classes } = props;
    const submitComment = async ()=>{

        console.log({title, content, rating})

        if( title && content && rating && title != "", content!= "" ){
            const res = await API.postProvider.createComment(
                postId,
                {
                    title, content, rating, clientId: userId
                }
            );

            console.log(res);
        }

    }


    return (
        
        <Card> 
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" > 
                        {username!= undefined && username!= null && username.length > 0 ? username[0] : 'A' }
                    </Avatar>
                }           
                title ={
                    <Typography variant = "h2" > 
                        {username!= undefined && username!= null && username.length > 0 ? username : 'Anónimo' }
                    </Typography>                                
                }         
            >
    
            </CardHeader>
            <CardContent>
  
            <TextField
                required
                id="standard-required"
                label="Requerido"
                placeholder="Titulo"
                className={classes.textField}
                margin="normal"                
                onChange= {(e)=> {  setTitle(e.target.value)  }   }
            />
                  
            <Rating
            name="hover-side"
            value={rating}            
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            onClick = {  ()=>
                {setRating(hover);}
            }
          />
        
            <TextField
                name = "content"
                id="outlined-textarea"
                label="Escribe un comentario..."
                placeholder="Placeholder"
                multiline
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth                
                onChange= {(e)=> {  setContent(e.target.value)  }   }
            />  


             <Button
            variant="contained"
            color="primary"
            className={classes.button}        
            onClick = {submitComment }    
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
  