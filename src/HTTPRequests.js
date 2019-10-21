import axios from 'axios';
var resData = new Array();
export const HTTPRequests = () =>
{
    const base_url = "http://52.5.42.71:8080"
    const req = {
        postProvider:{             
            //GET
            getAll: async ()=>{
                const url = base_url + "/posts/"
                console.log(url)
                const response = await axios.get(
                    url
		).catch(e => console.log('Error: ', e) )
                return response;

            }, 
            getById: async (id)=>{

                const url = base_url + "/posts/" + id
                console.log(url)
                const response = await axios.get(
                    url           
                ).catch(e => console.log('Error: ', e))
                return response;


            },
            getByType: async (type)=>{
                
                const url = base_url + "/posts/type/" + type
                console.log(url)
                const response = await axios.get(
                    url           
                ).catch(e => console.log('Error: ', e))
                return response;
                


            },
            getByProvider: async (providerId)=>{

                const url = base_url + "/posts/provider/" + providerId
                console.log(url)
                const response = await axios.get(
                    url           
                ).catch(e => console.log('Error: ', e))
                return response;


            },
            getByIdList: async (ids)=>{

                let url = base_url + "/posts/reservation/?ids="
                for (var id in ids){
                    url+= "," + id
                }
                console.log(url)
                const response = await axios.get(
                    url           
                ).catch(e => console.log('Error: ', e))
                return response;


            },
            //POST
            createPost: async (postRequest)=>{
                
                const url = base_url + "/posts/"
                console.log(url)
                
                const response = await axios.post(
                    url ,  {...postRequest}
                ).catch(e => console.log('Error: ', e))
                return response;


            },
            //PUT
            updatePost: async (postRequest)=>{

                const url = base_url + "/posts/"
                console.log(url)
                
                const response = await axios.put(
                    url ,  {...postRequest}
                ).catch(e => console.log('Error: ', e))
                return response;

            },
            //DELETE
            deletePost: async (postId)=>{
                
                const url = base_url + "/posts/" + postId
                console.log(url)
                
                const response = await axios.delete(
                    url
                ).catch(e => console.log('Error: ', e))
                return response;

            },            
            //getAll
            //getById
            //getByType
            //getByProvider
            //getByIdList
            //createPost
            //updatePost
            //deletePost
            //getPostComments
            //createComment
            //deleteComment


            //Comments
            getPostComments:  async (postId)=> {

                const url = base_url + "/comments/" + postId
                console.log(url)
                
                const response = await axios.get(
                    url
                ).catch(e => console.log('Error: ', e))
                return response;


            },
            createComment: async (postId,commentRequest)=> {

                const url = base_url + "/comments/" + postId
                console.log(url)
                
                const response = await axios.put(
                    url, {...commentRequest}
                ).catch(e => console.log('Error: ', e))
                return response;

            },
            deleteComment: async (postId, commentId)=> {

                let url = base_url + "/comments/?postId=" + postId + "&commentId=" + commentId
                console.log(url)
                
                const response = await axios.delete(
                    url
                ).catch(e => console.log('Error: ', e))
                return response;
            }     
            
        },




        provider:{            
            //GET
            getAll: async ()=> {

                let url = base_url + "/providers/allProviders"
                console.log(url)
                
                const response = await axios.get(
                    url
                ).catch(e => console.log('Error: ', e))
                return response;

            },
            getById: async (id)=>{

                const url = base_url + "/providers/provider/" + id
                console.log(url)
                const response = await axios.get(
                    url           
                ).catch(e => console.log('Error: ', e))
                return response;
            },     
            getAvailability: async (username)=>{

                const url = base_url + "/providers/provider/available/" + username
                console.log(url)
                const response = await axios.get(
                    url           
                ).catch(e => console.log('Error: ', e))
                return response;
            },
            getByName: async (username)=>{

                const url = base_url + "/providers/provider/username/" + username
                console.log(url)
                const response = await axios.get(
                    url           
                ).catch(e => console.log('Error: ', e))
                return response;
            },
            //DELETE
            deleteProvider: async (providerId)=> {

                let url = base_url + "/providers/deleteProvider/" + providerId
                console.log(url)
                
                const response = await axios.delete(
                    url
                ).catch(e => console.log('Error: ', e))
                return response;

            },
            //POST
            insertProvider: async (providerBody)=> {

                let url = base_url + "/providers/insertProvider/"
                console.log(url)
            
                const response = await axios.post(
                    url, {...providerBody}
                ).catch(e => console.log('Error: ', e))
                return response;

            },
            //PUT
            updateProvider: async (providerId, providerBody)=> {

                let url = base_url + "/providers/updateProvider/" + providerId

                console.log(url)
            
                const response = await axios.put(
                    url, {...providerBody}
                ).catch(e => console.log('Error: ', e))
                return response;

            }

        },
        client:{ 
            
            //GET
            getMSG: async ()=> {

                let url = base_url + "/clients"
                console.log(url)
                
                const response = await axios.get(
                    url
                ).catch(e => console.log('Error: ', e))
                return response;

            },
            getAll: async ()=> {

                let url = base_url + "/clients/allClients"
                console.log(url)
                
                const response = await axios.get(
                    url
                ).catch(e => console.log('Error: ', e))
                return response;

            },
            getById: async (id)=>{

                const url = base_url + "/clients/client/" + id
                console.log(url)
                const response = await axios.get(
                    url
                ).catch(e => console.log('Error: ', e))
                return response;
            },     
            getAvailability: async (username)=>{

                const url = base_url + "/clients/client/available/" + username
                console.log(url)
                const response = await axios.get(
                    url           
                ).catch(e => console.log('Error: ', e))
                return response;
            },
            getByName: async (username)=>{

                const url = base_url + "/clients/client/username/" + username
                console.log(url)
                const response = await axios.get(
                    url           
                ).catch(e => console.log('Error: ', e))
                return response;
            },
            //DELETE
            deleteProvider: async (clientId)=> {

                let url = base_url + "/clients/deleteClient/" + clientId
                console.log(url)
                
                const response = await axios.delete(
                    url
                ).catch(e => console.log('Error: ', e))
                return response;

            },
            //POST
            insertProvider: async (clientBody)=> {

                let url = base_url + "/clients/insertClient/"
                console.log(url)                        
                const response = await axios.post(
                    url, {...clientBody}
                ).catch(e => console.log('Error: ', e))
                return response;

            },
            //PUT
            updateProvider: async (clientId, clientBody)=> {

                let url = base_url + "/clients/updateClient/" + clientId

                console.log(url)
            
                const response = await axios.put(
                    url, {...clientBody}
                ).catch(e => console.log('Error: ', e))
                return response;

            }





        },
        favorites:{ 
            //GET
            getMSG: async ()=> {

                let url = base_url + "/favorites/"
                console.log(url)

                const response = await axios.get(
                    url
                ).catch(e => console.log('Error: ', e));
                
                return response;

            },
            getById: async (id)=>{

                const url = base_url + "/favorites/" + id
                console.log(url)
                const response = await axios.get(
                    url           
                ).catch(e => console.log('Error: ', e))
                return response;
            },
            //POST
            insertFavorite: async (favoriteBody)=> {

                let url = base_url + "/favorites/"
                console.log(url)
            
                const response = await axios.post(
                    url, {...favoriteBody}
                ).catch(e => console.log('Error: ', e))
                return response;

            },
            //DELETE
            deleteFavorite: async (id)=> {

                let url = base_url + "/favorites/" + id
                console.log(url) 

                const response = await axios.delete(
                    url
                ).catch(e => console.log('Error: ', e))
                return response;

            }

        },
        messages:{
            getById: async (id)=>{
            
                const url = base_url + "/messages/" + id
                console.log(url)

                const response = await axios.get(
                    url
                ).catch(e => console.log('Error: ', e))
                return response;

            },
            createMessage: async (messageBody)=>{
            
                const url = base_url + "/messages/"
                console.log(url)

                const response = await axios.post(
                    url, {...messageBody}
                ).catch(e => console.log('Error: ', e))
                return response;

            }
        },
        reservation:{
            
            //GET
            getAllPayments: async ()=> {

                let url = base_url + "/payment/"
                console.log(url)

                const response = await axios.get(
                    url
                ).catch(e => console.log('Error: ', e));

                return response;

            },
            getAll: async ()=> {

                let url = base_url + "/reservation/"
                console.log(url)

                const response = await axios.get(
                    url
                ).catch(e => console.log('Error: ', e));
                
                return response;

            },
            getById: async (id)=>{

                const url = base_url + "/reservation/" + id
                console.log(url)
                const response = await axios.get(
                    url           
                ).catch(e => console.log('Error: ', e))
                return response;
            },
            getByPost: async (id)=>{

                const url = base_url + "/reservation/post" + id
                console.log(url)
                const response = await axios.get(
                    url           
                ).catch(e => console.log('Error: ', e))
                return response;
            },
            getByClient: async (id)=>{

                const url = base_url + "/reservation/client" + id
                console.log(url)
                const response = await axios.get(
                    url           
                ).catch(e => console.log('Error: ', e))
                return response;
            },
            getByProvider: async (id)=>{

                const url = base_url + "/reservation/provider" + id
                console.log(url)
                const response = await axios.get(
                    url           
                ).catch(e => console.log('Error: ', e))
                return response;
            },
            //DELETE
            deleteReservation: async (id)=> {

                let url = base_url + "/reservation/" + id
                console.log(url)
                
                const response = await axios.delete(
                    url
                ).catch(e => console.log('Error: ', e))
                return response;

            },
            //POST
            insertReservation: async (reservationBody)=> {

                let url = base_url + "/reservation/"
                console.log(url)
            
                const response = await axios.post(
                    url, {...reservationBody}
                ).catch(e => console.log('Error: ', e))
                return response;

            },
            //PUT
            updateReservation: async (reservationBody)=> {

                let url = base_url + "/reservation/"

                console.log(url)
            
                const response = await axios.put(
                    url, {...reservationBody}
                ).catch(e => console.log('Error: ', e))
                return response;

            }





        }

    }
    return req
}
