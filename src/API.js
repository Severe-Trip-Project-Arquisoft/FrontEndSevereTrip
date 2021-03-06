import axios from 'axios';
import crypto from 'crypto'
const base_url = 'http://52.5.42.71:8080';
// const base_url = 'https://localhost:8443/login';


axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('userInfo');



export const API =
{
  postProvider:{
    //GET
    getAll: async ()=>{
      const url = base_url + '/posts/';
      return await axios.get(
        url
      ).catch(e => console.log('Error: ', e));

    },
    getById: async (id)=>{

      const url = base_url + '/posts/' + id;
      return await axios.get(
        url
      ).catch(e => console.log('Error: ', e));

    },
    getByType: async (type)=>{

      const url = base_url + '/posts/type/' + type;
      return await axios.get(
        url
      ).catch(e => console.log('Error: ', e));
    },
    getByProvider: async (providerId)=>{

      const url = base_url + '/posts/provider/' + providerId;

      return await axios.get(
        url
      ).catch(e => console.log('Error: ', e));
    },
    getByIdList: async (ids)=>{

      let url = base_url + '/posts/reservation/?ids=';
      for (let id in ids){
        url+= ',' + ids[id]
      }
      return await axios.get(
        url
      ).catch(e => console.log('Error: ', e));
    },
    //POST
    createPost: async (postRequest)=>{

      const url = base_url + '/posts/';
      return await axios.post(
        url, {...postRequest}
      ).catch(e => console.log('Error: ', e));


    },
    //PUT
    updatePost: async (postRequest)=>{

      const url = base_url + '/posts/';
      return await axios.put(
        url, {...postRequest}
      ).catch(e => console.log('Error: ', e));

    },
    //DELETE
    deletePost: async (postId)=>{

      const url = base_url + '/posts/' + postId;
      return await axios.delete(
        url
      ).catch(e => console.log('Error: ', e));

    },
    getPostComments:  async (postId)=> {

      const url = base_url + '/comments/' + postId;
      return await axios.get(
        url
      ).catch(e => console.log('Error: ', e));


    },
    createComment: async (postId,commentRequest)=> {

      const url = base_url + '/comments/' + postId;
      return await axios.put(
        url, {...commentRequest}
      ).catch(e => console.log('Error: ', e));

    },
    deleteComment: async (postId, commentId)=> {

      let url = base_url + '/comments/?postId=' + postId + '&commentId=' + commentId;
      return await axios.delete(
        url
      ).catch(e => console.log('Error: ', e));
    }
  },
  users:{
    //GET
    MSG: async ()=> {

      let url = base_url + '/users/';
      return await axios.get(
        url
      ).catch(e => console.log('Error: ', e));

    },
    getAll: async ()=> {

      let url = base_url + '/users/all/';
      return await axios.get(
        url
      ).catch(e => console.log('Error: ', e));

    },
    getById: async (id)=>{

      const url = base_url + '/users/' + id;
      return await axios.get(
        url
      ).catch(e => console.log('Error: ', e));
    },
    getAvailability: async (username)=>{

      const url = base_url + '/users/available/' + username;
      return await axios.get(
        url
      ).catch(e => console.log('Error: ', e));
    },
    getByName: async (username)=>{

      const url = base_url + '/users/username/' + username;
      let res;
      res = await axios.get(
        url
      ).catch( e=> {res = e.response});
      return res;

    },
    //DELETE
    deleteUser: async (userId)=> {

      let url = base_url + '/users/delete/' + userId;
      return await axios.delete(
        url
      ).catch(e => console.log('Error: ', e));

    },
    //POST
    createClient: async (clientBody)=> {

      let url = base_url + '/users/insert/client/';
      clientBody.password = crypto.createHash('sha256').update(clientBody.password).digest('hex');
      return await axios.post(
        url, {...clientBody}
      ).catch(e => console.log('Error: ', e));

    },
    createProvider: async (clientBody)=> {

      let url = base_url + '/users/insert/provider/';
      clientBody.password = crypto.createHash('sha256').update(clientBody.password).digest('hex');
      return await axios.post(
        url, {...clientBody}
      ).catch(e => console.log('Error: ', e));

    },
    //PUT
    updateClient: async (clientId, clientBody)=> {

      let url = base_url + '/users/update/client/' + clientId;
      return await axios.put(
        url, {...clientBody}
      ).catch(e => console.log('Error: ', e));
    },
    updateProvider: async (clientId, clientBody)=> {

      let url = base_url + '/users/update/provider/' + clientId;
      return await axios.put(
        url, {...clientBody}
      ).catch(e => console.log('Error: ', e));
    }
  },
  favorites:{
    getById: async (id)=>{
      const url = base_url + '/favorites/' + id;
      return await axios.get(
        url
      ).catch(e => console.log('Error: ', e));
    },
    //POST
    insertFavorite: async (clientId, postId)=> {

      let url = base_url + '/favorites/' + clientId + '/insert/' + postId;
      return await axios.post(
        url
      ).catch(e => console.log('Error: ', e));

    },
    //DELETE
    deleteFavorite: async (clientId, postId)=> {

      let url = base_url + '/favorites/' + clientId + '/remove/' + postId;
      return await axios.post(
        url
      ).catch(e => console.log('Error: ', e));
    }
  },
  messages:{
    getById: async (id)=>{
      const url = base_url + '/messages/' + id;
      return await axios.get(
        url
      ).catch(e => console.log('Error: ', e));
    },
    createMessage: async (messageBody)=>{
      const url = base_url + '/messages/';
      return await axios.post(
        url, {...messageBody}
      ).catch(e => console.log('Error: ', e));
    }
  },
  reservation:{

    //GET
    getAll: async ()=> {

      let url = base_url + '/reservation/';
      return await axios.get(
        url
      ).catch(e => console.log('Error: ', e));

    },
    getById: async (id)=>{

      const url = base_url + '/reservation/' + id;
      return await axios.get(
        url
      ).catch(e => console.log('Error: ', e));
    },
    getByPost: async (id)=>{

      const url = base_url + '/reservation/post/' + id;
      return await axios.get(
        url
      ).catch(e => console.log('Error: ', e));
    },
    getByClient: async (id)=>{

      const url = base_url + '/reservation/client/' + id;
      return await axios.get(
        url
      ).catch(e => console.log('Error: ', e));
    },
    getByProvider: async (id)=>{

      const url = base_url + '/reservation/provider/' + id;
      return await axios.get(
        url
      ).catch(e => console.log('Error: ', e));
    },
    getAllPayments: async ()=> {

      let url = base_url + '/payment/';
      return await axios.get(
        url
      ).catch(e => console.log('Error: ', e));

    },
    //DELETE
    rejectReservation: async (id)=> {

      let url = base_url + '/reservation/' + id;
      return await axios.delete(
        url
      ).catch(e => console.log('Error: ', e));

    },
    //POST
    insertReservation: async (reservationBody)=> {

      let url = base_url + '/reservation/';
      return await axios.post(
        url, {...reservationBody}
      ).catch(e => console.log('Error: ', e));

    },
    //PUT
    updateReservation: async (reservationBody, reservationId)=> {

      let url = base_url + '/reservation/' + reservationId;
      return await axios.put(
        url, {...reservationBody}
      ).catch(e => console.log('Error: ', e));
    },
    answerReservation: async (reservationId)=> {

      let url = base_url + '/reservation/accept/' + reservationId;
      return await axios.put(
        url
      ).catch(e => console.log('Error: ', e));
    },
    payReservation: async (reservationId)=> {

      let url = base_url + '/reservation/pay/' + reservationId;
      return await axios.put(
        url
      ).catch(e => console.log('Error: ', e));
    }

  }
};
