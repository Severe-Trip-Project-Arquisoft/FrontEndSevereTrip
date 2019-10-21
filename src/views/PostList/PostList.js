import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { PostCard } from './components';
import { HTTPRequests }  from 'HTTPRequests';

const styles = theme => ({
    root: {
      padding: theme.spacing(3),
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



class PostList extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            posts : []
        }
    };
    

    async componentDidMount(){

        let req = HTTPRequests();
        let res = await req.postProvider.getAll();
        console.log(res);
        this.setState(
            {
                posts: res.data
            }
        )

    }

    render(){
        const{classes} = this.props;
        return (
            <div className={classes.root}>
              <div className={classes.content}>
                <Grid
                  container
                  spacing={3}
                >
                  {this.state.posts.map(post => (
                    <Grid
                      item
                      key={post.id}
                      lg={4}
                      md={6}
                      xs={12}
                    >
                      <PostCard post={post} />
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
}

PostList.propTypes ={
    classes: PropTypes.object.isRequired
};


export default withStyles(styles)(PostList);
