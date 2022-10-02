const UC_updateAdmin = ({adminDb, updateAdminEntity}) => {
    return async function patch(data) {

        const {name, username, password,  id } = data

      
        const prevData = await adminDb.getAdminbyID({ admin_id:id })

        // console.log(prevData);

        if(prevData.rowCount === 0){ throw new Error ("Id not found") }

        const entity = await updateAdminEntity({ data })
        const result = await adminDb.updateAdmin({

            admin_id:id,
            name: entity.getName(),
            username: entity.getUsername(),
            password:entity.getPassword()
        
        })
        .catch(e => console.log("error", e));
    


        if(result){
            return {
                message:"Updated Successfully",
                result
 
            }
        }else{
            throw new Error("Failed to update")

        }
    
        
    }
}
module.exports = UC_updateAdmin;