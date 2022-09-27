const UC_loginAdmin = ({adminDb, loginAdminEntity, generateToken}) => {
    return async function loginUser(data) {

        const entity = loginAdminEntity({data})
        
        const {username, password} = data;

        const isExisting = await adminDb.isExisting({ username })
            .catch(err => console.log(err));

        if (isExisting.rowCount == 0) {
            throw new Error("Username Not Exist")
        }

        const res = await adminDb.loginAdmin({
            username: entity.getUsername(),
            password: entity.getPassword()
        }).catch(e => console.log(e));
        
        
        const result = res.rows
        console.log(result);

        const token = generateToken(result)

        if(res.rowCount == 0){
            throw new Error("Invalid Password");
        }
        if(res.rowCount > 0) {
            return {result, token:token}
        }
        else{
            throw new Error("Failed to login User");
        }

    }
}

module.exports = UC_loginAdmin;