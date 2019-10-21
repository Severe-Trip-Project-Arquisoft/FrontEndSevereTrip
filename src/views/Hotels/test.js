export const test = (req) =>
{
    console.log("TEST");

    //Post-Provider
    console.log("------------listalistalista",req)
    const r1 = req.postProvider.getAll();
    console.log("ARREGLO",r1);

    return r1;


}
