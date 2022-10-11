const updateAdminEntity = ({data}) => {

    const {name, username, password} = data;


    if (!name) {
        throw new Error("Name is required.")
    }
    if (!username) {
        throw new Error("Username is required.")
    }
    if (!password) {
        throw new Error("Password is required.")
    }



    return Object.freeze({
        getName: () => name,
        getUsername: () => username,
        getPassword: () => password

    })
}
module.exports = updateAdminEntity;