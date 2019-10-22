import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';


const styles = theme => ({
    comment: {
      marginBottom: theme.spacing(1)
    }
  });

const Comment = props =>{
    
    const username = undefined
    
    const { classes, comment } = props;  

    

    return (
        <Card className = {classes.comment}>  
            <CardContent>

            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                >

<Grid item xs={1}>

    <Avatar aria-label="recipe" > 
        {comment.username!= undefined && comment.username!= null && comment.username.length > 0 ? comment.username[0].toUpperCase() : 'A' }
                
    </Avatar>


                </Grid>
                <Grid item xs={2}>   
                <Typography variant = "h3" > 
                        {comment.username!= undefined && comment.username!= null && comment.username.length > 0 ? comment.username : 'Anónimo' }
                </Typography>
                <Typography variant = "body1" > 
                        {comment.date!= undefined && comment.date!= null && comment.date.length > 0 ? comment.date : 'Anónimo' }
                </Typography>

                </Grid>
                <Grid item xs={6}>   
                <Typography variant = "h4" > 
                        {comment.title!= undefined && comment.title!= null && comment.title.length > 0 ? comment.title : '' }
                        </Typography>
                <Typography variant = "body1" > 
                        {comment.content!= undefined && comment.content!= null && comment.content.length > 0 ? comment.content : '' }
                </Typography>
                        

                </Grid>


                <Grid item xs={6}>
                    <Rating
                        name="hover-side"
                        value={comment.rating}            
                        readOnly                    
                    />
                </Grid>
   
                </Grid>
            </CardContent>
        </Card>
    )}


Comment.propTypes = {
    className: PropTypes.string
};
  
export default withStyles(styles)(Comment);
  