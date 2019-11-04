import React, {useState, useEffect, useContext} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import {Comment, CommentForm} from './components'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import {API} from 'API';
import { UserContext } from 'contexts/UserContext';

const styles = theme => ({
  progress: {
    display: 'block',
    margin: theme.spacing(3),
    marginLeft: 'auto',
    marginRight: 'auto' 
  }, 
  card :{
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2)

  },
  comment:{
    marginBottom: theme.spacing(2)

  }
});

const CommentSection = props =>{
  const {  postId, classes } = props;
  const { user } = useContext(UserContext);
    

  const [ comments, setComments ] = useState([

  ])
  const [ isLoaded, setIsLoaded ] = useState(false)


  const fetchComments = async () =>{
    const res = await API.postProvider.getPostComments(postId)
    if(res.data.length>0)
      setComments(res.data)
    setIsLoaded(true)


  }
  useEffect(() =>{

    fetchComments();



  }, []);

  return (
        
        
    <React.Fragment>  
      {isLoaded ? <React.Fragment>   
        <Card className = {classes.card} > 
          <CardHeader            
            title ={
              <Typography variant = "h1">Comentarios</Typography>
            }
          />
        </Card>
        
        
        {
          comments.map(
            (comment, index) =>
              (
                <Comment
                  className = {classes.comment}
                  comment = {comment}
                  key = {index}
                />
              )
          )}
      </React.Fragment> : <CircularProgress className={classes.progress} />}
      {user.logged ? <CommentForm
        postId = {postId}
        reload = {fetchComments}
        user = {user}
      /> : <div/>}
    </React.Fragment> 
  )}


CommentSection.propTypes = {
  className: PropTypes.string
};
  
export default withStyles(styles)(CommentSection);
