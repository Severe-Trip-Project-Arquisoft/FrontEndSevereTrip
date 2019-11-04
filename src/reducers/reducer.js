export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_POST':
      return Object.assign({},state,{postObject : action.postObject})
    case 'SET_USER_ID':
      return Object.assign({},state,{userId : action.userId})
    case 'SET_USER_TYPE':
      return Object.assign({},state,{userType : action.userType})
    case 'SET_LOGGED_IN':
      return Object.assign({},state,{loggedIn : action.loggedIn})
    default:
      return state
  }
}
