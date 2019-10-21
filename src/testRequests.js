export const test = async (req) =>
{
    console.log("TEST");

    //Post-Provider
    console.log("------------ttttttttt",req)
    const r1 = await req.postProvider.getAll();
    console.log(r1);

    
    const b2 = {
        providerId: "012354",
        name: "Trattoria Tussardi",
        serviceType: "restaurant",
        latitude: 47.1,
        longitude: 78.2,
        address: "Calle 102",
        postalCode: "111111",
        city: "Venecia",
        telephone: "3121546798",
        commentIds: [],
        price: 0.0,
        tags: [
            {
                "description": "Apto para vegetarianos",
                "name": "Menú con opción vegetariana."
            },        
            {
                "description": "Bar",
                "name": "Bebidas alcohólicas disponibles."
            }
        ]


    };
    const r2 =  await req.postProvider.createPost(b2);
    console.log("Create Post", r2);
    const postId = r2.data;
    const r3 =  await req.postProvider.getById(postId);
    console.log("Create Post", r3);



    const p1 = await req.provider.getAll();
    console.log(p1);

    const c1 = await req.client.getMSG();
    console.log(c1);

    const f1 = await req.favorites.getMSG();
    console.log(f1);


    const m1 = await req.messages.createMessage(
        {
            senderId: "dio",
            receiverId: "jotaro",
            content: "Oh, you are approaching me."
        }
    );
    console.log(m1);


    const m2 = await req.messages.getById("dio");
    console.log(m2);


    const re1 = await req.reservation.getAll();
    console.log(re1);



}
