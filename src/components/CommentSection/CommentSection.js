import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import {Comment, CommentForm} from './components'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import {API} from 'HTTPRequests'

const styles = theme => ({
    progress: {
      display: "block",
      margin: theme.spacing(3),
      marginLeft: "auto",
      marginRight: "auto" 
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
    const { userId, providerId, postId, classes } = props;
    

    const [ comments, setComments ] = useState([

    ])
    const [ isLoaded, setIsLoaded ] = useState(false)

    useEffect(() =>{
         const fetchComments = async () =>{
                const res = await API.postProvider.getPostComments(postId)
                setComments(res.data)
                setIsLoaded(true)


        }
        fetchComments();



    }, [ ])

    return (
        
        
        <React.Fragment>  
        {isLoaded ? <React.Fragment>   
            <Card className = {classes.card} > 
            <CardHeader            
                title ={
                    <Typography variant = 'h1'>Comentarios</Typography>
                }         
            >
            </CardHeader>
        </Card>
        
        
        {
            comments.map(
                (comment, index) =>
                (
                    <Comment className = {classes.comment} key = {index} comment = {comment}/>
                )
        )}
        </React.Fragment> : <CircularProgress className={classes.progress} />}
        <CommentForm userId = {userId} postId = {postId}/>
        </React.Fragment> 
    )}


CommentSection.propTypes = {
    className: PropTypes.string
};
  
export default withStyles(styles)(CommentSection);
  