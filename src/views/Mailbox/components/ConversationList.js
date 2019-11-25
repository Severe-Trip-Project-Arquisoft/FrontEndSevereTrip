import React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
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


const ConversationList = ({messages}) =>(<List className={styles.list}>
  <ListSubheader className={styles.subheader}>Today</ListSubheader>
  {messages.map(  (message) =>(<React.Fragment key={message.id}>
    <ListItem button>
      <ListItemAvatar>
        <Avatar aria-label="recipe" >
          {message.sender[0]}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={message.title}
        secondary={message.content}
      />
    </ListItem>
  </React.Fragment>))}
</List>)


export default ConversationList;
