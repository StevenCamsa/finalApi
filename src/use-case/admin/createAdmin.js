const UC_createAdmin = ({adminDb, makeAdminEntity}) => {

    return async function add (data) {
       
            const {username} = data;
            let result = {};

            const isExisting = await adminDb.isExisting({username})
            .catch(e => console.log(e));

            if(isExisting.rowCount > 0){
                throw new Error("Account already Exist")
            }

            const entity = await makeAdminEntity({ data })
     
     
            // console.log(isExisting)

            const res = await adminDb.createAdmin({
                name: entity.getName(),
                username: entity.getUsername(),
                password:entity.getPassword()
            })
            .catch(e => console.log(e))
            

            if(res){

                return {res, message:"admin has been added"}
                
                
            }else{
                throw new Error ("Failed to register");
            }
            
      
        
    }
}
module.exports = UC_createAdmin;