import axios from 'axios';

const base_url = "http://52.5.42.71:8080";
export const API =
{
      postProvider:{
            //GET
      getAll: async ()=>{
                const url = base_url + "/posts/";
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
          url+= ',' + id
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
    provider:{
      //GET
      getAll: async ()=> {
        let url = base_url + '/providers/allProviders';
        return await axios.get(
          url
        ).catch(e => console.log('Error: ', e));

      },
      getById: async (id)=>{
        const url = base_url + '/providers/provider/' + id;
        return await axios.get(
          url
        ).catch(e => console.log('Error: ', e));
      },
      getAvailability: async (username)=>{

        const url = base_url + '/providers/provider/available/' + username;
        return await axios.get(
          url
        ).catch(e => console.log('Error: ', e));
      },
      getByName: async (username)=>{

        const url = base_url + '/providers/provider/username/' + username;
        return await axios.get(
          url
        ).catch(e => console.log('Error: ', e));
      },
      //DELETE
      deleteProvider: async (providerId)=> {

        let url = base_url + '/providers/deleteProvider/' + providerId;
        return await axios.delete(
          url
        ).catch(e => console.log('Error: ', e));

      },
      //POST
      insertProvider: async (providerBody)=> {

        let url = base_url + '/providers/insertProvider/';
        return await axios.post(
          url, {...providerBody}
        ).catch(e => console.log('Error: ', e));

      },
      //PUT
      updateProvider: async (providerId, providerBody)=> {

        let url = base_url + '/providers/updateProvider/' + providerId;
        return await axios.put(
          url, {...providerBody}
        ).catch(e => console.log('Error: ', e));
      }
    },
    client:{
      //GET
      getMSG: async ()=> {

        let url = base_url + '/clients';
        return await axios.get(
          url
        ).catch(e => console.log('Error: ', e));

      },
      getAll: async ()=> {

        let url = base_url + '/clients/allClients';
        return await axios.get(
          url
        ).catch(e => console.log('Error: ', e));

      },
      getById: async (id)=>{

        const url = base_url + '/clients/client/' + id;
        return await axios.get(
          url
        ).catch(e => console.log('Error: ', e));
      },
      getAvailability: async (username)=>{

        const url = base_url + '/clients/client/available/' + username;
        return await axios.get(
          url
        ).catch(e => console.log('Error: ', e));
      },
      getByName: async (username)=>{

        const url = base_url + '/clients/client/username/' + username;
        return await axios.get(
          url
        ).catch(e => console.log('Error: ', e));
      },
      //DELETE
      deleteProvider: async (clientId)=> {

        let url = base_url + '/clients/deleteClient/' + clientId;
        return await axios.delete(
          url
        ).catch(e => console.log('Error: ', e));

      },
      //POST
      insertProvider: async (clientBody)=> {

        let url = base_url + '/clients/insertClient/';
        return await axios.post(
          url, {...clientBody}
        ).catch(e => console.log('Error: ', e));

      },
      //PUT
      updateProvider: async (clientId, clientBody)=> {

        let url = base_url + '/clients/updateClient/' + clientId;
        return await axios.put(
          url, {...clientBody}
        ).catch(e => console.log('Error: ', e));

      }
    },
    favorites:{
      //GET
      getMSG: async ()=> {

        let url = base_url + '/favorites/';
        return await axios.get(
          url
        ).catch(e => console.log('Error: ', e));

      },
      getById: async (id)=>{

        const url = base_url + '/favorites/' + id;
        return await axios.get(
          url
        ).catch(e => console.log('Error: ', e));
      },
      //POST
      insertFavorite: async (favoriteBody)=> {

        let url = base_url + '/favorites/';
        return await axios.post(
          url, {...favoriteBody}
        ).catch(e => console.log('Error: ', e));

      },
      //DELETE
      deleteFavorite: async (id)=> {

        let url = base_url + '/favorites/' + id;
        return await axios.delete(
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
      getAllPayments: async ()=> {

        let url = base_url + '/payment/';
        return await axios.get(
          url
        ).catch(e => console.log('Error: ', e));

      },
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

        const url = base_url + '/reservation/post' + id;
        return await axios.get(
          url
        ).catch(e => console.log('Error: ', e));
      },
      getByClient: async (id)=>{

        const url = base_url + '/reservation/client' + id;
        return await axios.get(
          url
        ).catch(e => console.log('Error: ', e));
      },
      getByProvider: async (id)=>{

        const url = base_url + '/reservation/provider' + id;
        return await axios.get(
          url
        ).catch(e => console.log('Error: ', e));
      },
      //DELETE
      deleteReservation: async (id)=> {

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
      updateReservation: async (reservationBody)=> {

        let url = base_url + '/reservation/';
        return await axios.put(
          url, {...reservationBody}
        ).catch(e => console.log('Error: ', e));
      }
    }
};