import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import ConversationList from './components/ConversationList';
import Grid from '@material-ui/core/Grid';
import {Conversation} from './components';

//import {API} from 'API'

const styles = theme => ({
  root: {
    padding: theme.spacing(3)
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  }
});
const messages = [{
  id: 1,
  title: 'Dio',
  content:'Cómo estás',
  sender: 'Jotaro'
},
{
  id: 2,
  title: 'Dio',
  content:'Cómo estás',
  sender: 'Jotaro'
},
{
  id:          3,
  title:      'Dio',
  content:    'Cómo estás',
  sender:     'Jotaro'
},
{
  id: 4,
  title: 'Dio',
  content:'Cómo estás',
  sender: 'Jotaro'
}];

const Mailbox = () => {


  return (
    <Grid
      alignItems="flex-start"
      container
      direction="row"
      justify="flex-start"
    >
      <Grid item xs={6} sm={6}>
        <ConversationList messages = {messages}/>
      </Grid>
      <Grid item xs={6} sm={6}>
        <Conversation/>
      </Grid>
    </Grid>
  );


};

export default withRouter(withStyles(styles)(Mailbox));
