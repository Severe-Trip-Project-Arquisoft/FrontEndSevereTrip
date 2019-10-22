export const test = async (req) =>
{
  console.log('TEST');
  console.log(req)
  let tests = {
    //Post-Provider
    postProvider: async () =>{
            
      const posts = await req.postProvider.getAll();
      console.log(posts);

      const postBody1 = {
        providerId: '0',
        name: 'Trattoria Tussardi',
        serviceType: 'restaurant',
        latitude: 47.1,
        longitude: 78.2,
        address: 'Calle 102',
        postalCode: '111111',
        city: 'Venecia',
        telephone: '3121546798',
        price: 0.0,
        tags: [
          {
            'description': 'Apto para vegetarianos',
            'name': 'Menú con opción vegetariana.'
          },        
          {
            'description': 'Bar',
            'name': 'Bebidas alcohólicas disponibles.'
          }
        ]


      };

      const postBody2 = {
        providerId: '1',
        name: 'Hotel Hilton',
        serviceType: 'hotel',
        latitude: 47.1,
        longitude: 78.2,
        address: 'Calle 103',
        postalCode: '111111',
        city: 'New York',
        telephone: '3121546798',
        price: 0.0
      };
      const createdPost =  await req.postProvider.createPost(postBody1);
      console.log('Create Post 1', createdPost);

      const createdPost2 =  await req.postProvider.createPost(postBody2);
      console.log('Create Post 2', createdPost2);


      const postId1 = createdPost.data;
      const postId2 = createdPost2.data;

      const byId =  await req.postProvider.getById(postId1);
      console.log('Post 1', byId);
      const byId2 =  await req.postProvider.getById(postId2);
      console.log('Post 2', byId2);




      const del1  = await req.postProvider.deletePost(postId1);
      console.log('Delete Post 1', del1);

      const del2  = await req.postProvider.deletePost(postId2);
      console.log('Delete Post 2', del2);








      //Provider

      const p1 = await req.provider.getAll();
      console.log(p1);

      const c1 = await req.client.getMSG();
      console.log(c1);

      const f1 = await req.favorites.getMSG();
      console.log(f1);


      const m1 = await req.messages.createMessage(
        {
          senderId: 'dio',
          receiverId: 'jotaro',
          content: 'Oh, you are approaching me.'
        }
      );
      console.log(m1);


      const m2 = await req.messages.getById('dio');
      console.log(m2);


      const re1 = await req.reservation.getAll();
      console.log(re1);
    }
  }
  
  for (let t in tests){

    await tests[t]();
    
  }
}
