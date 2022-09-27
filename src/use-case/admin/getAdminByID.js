const UC_getsingleAdmin = ({adminDb}) =>{
    return async function getUserbyID(admin_id) {


        const result = await adminDb.getAdminbyID({admin_id})
        .catch(e => console.log("error", e));
   
        if(result){
            return result
        }else{
            throw new Error ("ID not found")
        }

    }
}
module.exports = UC_getsingleAdmin