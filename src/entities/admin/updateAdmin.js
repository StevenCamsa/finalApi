const updateAdminEntity = ({data}) => {

    const {name, username, password} = data;


    if (!name) {
        throw new Error("name is required.")
    }
    if (!username) {
        throw new Error("Username is required.")
    }
    if (!password) {
        throw new Error("Password is required.")
    }
    if (password < 6) {
        throw new Error("Password must be at least 6 characters.")
    }


    return Object.freeze({
        getName: () => name,
        getUsername: () => username,
        getPassword: () => password

    })
}
module.exports = updateAdminEntity;