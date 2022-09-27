const updateAdminEntity = ({data}) => {

    const {name,username, password} = data;


    if(!name) {
        name = name;
    }
    if(!username) {
        username = username;
    }
    if(!password){
        password = password;   
    }
    if(password < 6){
        throw new Error("Password must be at least 6 characters.")
    }


    return Object.freeze({
        getName:() => name,
        getUsername: () => username,
        getPassword: () => password

    })
}
module.exports = updateAdminEntity;